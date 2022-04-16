from multiprocessing import context
from aiohttp import web
import logging
from bs4 import ResultSet
from bs4.element import Tag
from typing import List
import json
from common import URL_HACKER_NEWS, PAGE_NUMBER
from utilities import get_soup, get_posts
from aiohttp_jinja2 import render_template_async
from contextlib import suppress


async def get_links_from_page(request: web.Request):
    links: List[str] = []
    _page: int = request.match_info["page"]
    _resource: str = request.match_info["resource"]
    _resource_URL = _resource + PAGE_NUMBER
    soup = await get_soup(resource=_resource_URL, page_number=_page)
    _posts = await get_posts(soup=soup)
    for _post in _posts["posts"]:
        _links = _post.find_all("a", "titlelink")
        for _link in _links:
            link = str(_link.get("href"))
            if link.startswith("item?"):
                link = URL_HACKER_NEWS + link
            links.append(link)
    response = json.dumps(links)
    return web.Response(body=response, content_type="application/json")


async def get_titles_from_page(request: web.Request):
    titles: List[str] = []
    _page: int = request.match_info["page"]
    _resource: str = request.match_info["resource"]
    _resource_URL = _resource + PAGE_NUMBER
    soup = await get_soup(resource=_resource_URL, page_number=_page)
    _posts = await get_posts(soup=soup)
    logging.info("_POSTS: {}".format(_posts))
    for _post in _posts["posts"]:
        _titles = _post.find_all("td", "title")
        titles.append(
            {"serial_number": _titles[0].get_text(), "title": _titles[1].get_text()}
        )
    response = json.dumps(titles)
    return web.Response(body=response, content_type="application/json")


async def get_hacker_news(request: web.Request):
    posts = []
    try:
        _page: int = int(request.match_info["page"])
    except (ValueError, KeyError):
        _page = 1
    _resource: str = request.match_info["resource"]
    if _resource not in ["news", "ask", "show"]:
        _resource = "news"
    _resource_URL = _resource + PAGE_NUMBER
    _soup = await get_soup(resource=_resource_URL, page_number=_page)
    _posts: dict[str, ResultSet] = await get_posts(soup=_soup)
    if len(_posts["posts"]) == len(_posts["metadatas"]):
        _posts_list: list[Tag] = list(_posts["posts"])
        _metadatas_list: list[Tag] = list(_posts["metadatas"])
        for index in range(len(_posts_list)):
            _current_post_tag: Tag = _posts_list[index]
            _current_metadata_tag: Tag = _metadatas_list[index]
            _post_ID = str(_current_post_tag.get("id"))
            _post_titles = _current_post_tag.find_all("td", "title")
            _post_serial_number = _post_titles[0].get_text()
            with suppress(AttributeError):
                _post_titles[1].span.extract()
            _post_title = _post_titles[1].get_text()
            _post_URL_reference = str(
                _current_post_tag.find("a", "titlelink").get("href")
            )
            _post_URL = (
                URL_HACKER_NEWS + _post_URL_reference
                if _post_URL_reference.startswith("item?")
                else _post_URL_reference
            )
            try:
                _user_object = _current_metadata_tag.find("a", "hnuser")
                _user_ID = _user_object.get_text()
                _user_URL = URL_HACKER_NEWS + str(_user_object.get("href"))
                user = {
                    "ID": _user_ID,
                    "URL": _user_URL,
                }
            except AttributeError:
                user = {"ID": "", "URL": ""}
            _post_object = {
                "ID": _post_ID,
                "serial_number": _post_serial_number,
                "title": _post_title,
                "URL": _post_URL,
                "user": user,
            }
            posts.append(_post_object)
    context = {"context": posts, "resource": _resource, "page_number": _page}
    response = await render_template_async(
        "index.html", request=request, context=context
    )
    return response

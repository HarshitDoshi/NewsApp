from aiohttp import ClientSession
from bs4 import BeautifulSoup, ResultSet
from common import URL_HACKER_NEWS


async def get_soup(resource: str, page_number: int) -> BeautifulSoup:
    async with ClientSession() as session:
        async with session.get(
            URL_HACKER_NEWS + resource + str(page_number)
        ) as response:
            content = await response.content.read()
            soup = BeautifulSoup(content, "html5lib")
    return soup


async def get_posts(soup: BeautifulSoup) -> dict[str, ResultSet]:
    _posts = soup.find_all("tr", "athing")
    _metadatas = soup.find_all("td", "subtext")
    return {"posts": _posts, "metadatas": _metadatas}

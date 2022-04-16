from aiohttp.web import get, static
from handlers import get_hacker_news
from pathlib import Path


routes = [
    static("/static", Path(__file__).parent),
    get("/{resource}/{page}", get_hacker_news),
    get("/{resource}/", get_hacker_news),
    get("/{resource}", get_hacker_news),
]

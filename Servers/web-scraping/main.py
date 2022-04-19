from aiohttp.web import run_app, Application
import logging

import jinja2
from routes import routes
from aiohttp_jinja2 import setup
from pathlib import Path


app = Application()
logging.basicConfig(level=logging.INFO)

app.add_routes(routes=routes)
setup(app=app, enable_async=True, loader=jinja2.FileSystemLoader(Path(__file__).parent))

if __name__ == "__main__":
    run_app(app)

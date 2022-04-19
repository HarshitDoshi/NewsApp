FROM python:latest
COPY . .
RUN python -m pip install -r ./Servers/web-scraping/requirements.txt
CMD [ "python", "./Servers/web-scraping/main.py" ]

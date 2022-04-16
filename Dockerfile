FROM python:latest
COPY . .
RUN python -m pip install -r requirements.txt
CMD [ "python", "main.py" ]

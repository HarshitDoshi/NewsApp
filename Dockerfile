FROM python:latest
COPY . .
# RUN curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
# ENV PATH="${PATH}:/root/.poetry/bin"
# RUN poetry install
RUN python -m pip install -r requirements.txt
CMD [ "python", "main.py" ]

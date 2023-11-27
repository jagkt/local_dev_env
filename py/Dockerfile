# # pull the official docker image
FROM python:3.11.1-slim
# # set work directory
WORKDIR /home/py/app
# # set env variables
ENV PYTHONDONTWRITEBYTECODE 1 \ 
    PYTHONUNBUFFERED 1 \
    PIP_NO_CACHE_DIR=1
# # install dependencies
COPY ./requirements.txt .
RUN pip install --upgrade -r requirements.txt 
# copy project
COPY . /home/py/app
# start application
# CMD ["uvicorn", "main:app", "--host", "--reload"]


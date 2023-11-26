# # pull the official docker image
FROM python:3.11.1-slim
# # set work directory
WORKDIR /pyApp
# # set env variables
ENV PYTHONDONTWRITEBYTECODE 1 \ 
    PYTHONUNBUFFERED 1 \
    PIP_NO_CACHE_DIR=1
# # install dependencies
COPY ./requirements.txt .
RUN pip install --no-cache-dir --upgrade -r requirements.txt 
# copy project
COPY . /pyApp
# start application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]


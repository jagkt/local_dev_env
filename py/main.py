from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def home():
    return {"message": "hello from py_app!"}

@app.get("/hello/{user}")
async def greetings(user):
    return {"Hello": user}
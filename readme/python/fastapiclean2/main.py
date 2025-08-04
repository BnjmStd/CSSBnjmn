from fastapi import FastAPI
from app.interfaces import user_controller

app = FastAPI()
app.include_router(user_controller.router)

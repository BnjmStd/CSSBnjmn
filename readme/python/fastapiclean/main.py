from fastapi import FastAPI
from interfaces.http.controllers import food_controller

app = FastAPI()

app.include_router(food_controller.router)

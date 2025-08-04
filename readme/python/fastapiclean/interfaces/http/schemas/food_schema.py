from pydantic import BaseModel

class FoodCreateRequest(BaseModel):
    name: str
    calories: int

class FoodResponse(BaseModel):
    name: str
    calories: int

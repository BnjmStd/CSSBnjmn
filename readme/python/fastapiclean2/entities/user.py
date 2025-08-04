from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str


class UserInputDto(BaseModel):
    name: str


class UserOutputDto(BaseModel):
    id: int
    name: str
    date_created: str
    date_updated: str

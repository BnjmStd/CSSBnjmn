from fastapi import APIRouter
from app.entities.user import User
from app.use_cases.create_user import CreateUserUseCase
from app.infrastructure.user_in_memory_repository import InMemoryUserRepository

router = APIRouter()

user_repository = InMemoryUserRepository()
create_user_use_case = CreateUserUseCase(user_repository)

@router.post("/users")
def create_user(user: User):
    return create_user_use_case.execute(user)
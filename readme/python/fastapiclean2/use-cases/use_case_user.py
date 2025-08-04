from app.repositories.user_repository import UserRepository
from app.entities.user import User

class CreateUserUseCase:
    def __init__(self, user_repository: UserRepository):
        self.user_repository = user_repository

    def execute(self, user: User) -> User:
        return self.user_repository.save(user)

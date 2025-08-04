from typing import Dict
from app.repositories.user_repository import UserRepository
from app.entities.user import User

class InMemoryUserRepository(UserRepository):
    def __init__(self):
        self.db: Dict[int, User] = {}

    def save(self, user: User) -> User:
        self.db[user.id] = user
        return user

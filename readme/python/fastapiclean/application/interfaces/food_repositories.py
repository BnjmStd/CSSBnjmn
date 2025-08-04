from abc import ABC, abstractmethod
from domain.entities.food import Food

class FoodRepository(ABC):
    @abstractmethod
    def create(self, food: Food) -> Food:
        ...

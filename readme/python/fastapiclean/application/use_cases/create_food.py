from domain.entities.food import Food
from application.interfaces.repositories import FoodRepository

class CreateFoodUseCase:
    def __init__(self, food_repository: FoodRepository):
        self.food_repository = food_repository

    def execute(self, name: str, calories: int) -> Food:
        food = Food(name=name, calories=calories)
        return self.food_repository.create(food)

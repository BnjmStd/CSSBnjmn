from sqlalchemy.orm import Session
from domain.entities.food import Food
from application.interfaces.repositories import FoodRepository
from infrastructure.db.models import FoodModel

class SqlAlchemyFoodRepository(FoodRepository):
    def __init__(self, db: Session):
        self.db = db

    def create(self, food: Food) -> Food:
        food_model = FoodModel(name=food.name, calories=food.calories)
        self.db.add(food_model)
        self.db.commit()
        self.db.refresh(food_model)
        return Food(name=food_model.name, calories=food_model.calories)

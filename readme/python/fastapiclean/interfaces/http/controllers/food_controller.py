from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from interfaces.schemas.food_schema import FoodCreateRequest, FoodResponse
from infrastructure.db.repositories import SqlAlchemyFoodRepository
from application.use_cases.create_food import CreateFoodUseCase
from infrastructure.db.database import get_db  # Función para obtener DB Session

router = APIRouter()

@router.post("/foods/", response_model=FoodResponse)
def create_food(
    request: FoodCreateRequest,
    db: Session = Depends(get_db)
):
    repo = SqlAlchemyFoodRepository(db)
    use_case = CreateFoodUseCase(repo)
    food = use_case.execute(name=request.name, calories=request.calories)
    return FoodResponse(**food.__dict__)

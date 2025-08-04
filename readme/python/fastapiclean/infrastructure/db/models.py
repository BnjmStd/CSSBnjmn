from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class FoodModel(Base):
    __tablename__ = "foods"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    calories = Column(Integer, nullable=False)

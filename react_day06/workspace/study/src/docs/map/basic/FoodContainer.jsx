import React from 'react';
import Food from './Food';

const FoodContainer = () => {

  const foods = [
    {
      id : 1,
      name : "마라탕"
    },
    {
      id : 2,
      name : "육개장"
    },
    {
      id : 3,
      name : "라면"
    },
    {
      id : 4,
      name : "뚝불"
    },
  ]

  // <li key={i}>{food.name}</li>
  const foodList = foods.map((food, i) => <Food key={i} food={food} />)

  return (
    <div>
      {foodList}
    </div>
  );
};

export default FoodContainer;
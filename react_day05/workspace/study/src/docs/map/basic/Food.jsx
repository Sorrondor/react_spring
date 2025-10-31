import React from 'react';

const Food = ({food}) => {
  // console.log(props.food.name)
  const {name} = food
  
  return (
    <li>
      {name}      
    </li>
  );
};

export default Food;
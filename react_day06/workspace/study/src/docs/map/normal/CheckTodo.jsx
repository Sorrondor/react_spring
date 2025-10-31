import React from 'react';

const CheckTodo = ({todo, handleDone}) => {
  const {id, task, done} = todo;
   
  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => {handleDone(id)}} />
      <span style={{textDecoration : done ? "line-through" : ""}}>{task}</span>
    </li>
  );
};

export default CheckTodo;
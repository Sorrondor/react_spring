import React, { useEffect, useState } from 'react';
import getTodos from './getTodos';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

const TodoContainer = () => {

  const [todos, setTodos] = useState([])
  const [handleTodos, setHandleTodos] = useState(false)

  useEffect(() => {
     getTodos("http://localhost:4000/todos")
      .then(setTodos)
      .catch(console.error)
  }, [handleTodos])

  const props = {
    handleTodos : handleTodos,
    setHandleTodos : setHandleTodos
  }

  const todoList = todos.map((todo, i) => <Todo key={i} todo={todo} {...props} />)

  return (
    <div>
      <TodoInsert todos={todos} {...props} />
      <h1>남은 할일의 개수😎: {todos.length && todoList.length}개</h1>
      <ul>{todoList}</ul>
    </div>
  );
};

export default TodoContainer;
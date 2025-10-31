import React, { useState } from 'react';
import CheckTodo from './CheckTodo';

const CheckTodoContainer = () => {

  // 1. 화면에 todo의 데이터를 출력한다.
  // 2. todo의 상태(done)이 true 상태라면 
  // textdecoration: line-through 적용시킨다.
  // 3. todo의 상태(done)이 false라면 아무스타일도 들어가지 않는다.
  // 4. checkbox를 클릭하면 상태(done)가 변경되고, 스타일도 맞게 들어간다.
  // .map(), 삼항연산자 이용

  const [todos, setTodos] = useState([
    { id: 1, task: "React 공부하기", done: false },
    { id: 2, task: "운동하기", done: true },
    { id: 3, task: "장보기", done: false },
    { id: 4, task: "점심 먹기", done: false },
    { id: 5, task: "코딩하기", done: true },
  ])

  const handleDone = (id) => {
    setTodos(
      todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)
    )
  }

  const todoList = todos.map((todo, i) => {
    return (
      <CheckTodo key={i} todo={todo} handleDone={handleDone} />
    )
  })

  return (
    <ul>
      {todoList}
    </ul>
  );
};

export default CheckTodoContainer;
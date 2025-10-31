import React from 'react';

const TodoContainer = () => {

  const todoData = [
    { id: 1, task: "React 공부하기", done: false },
    { id: 2, task: "운동하기", done: true },
    { id: 3, task: "장보기", done: false },
    { id: 4, task: "점심 먹기", done: false },
    { id: 5, task: "코딩하기", done: true },
  ]

  // 1. todoData를 이용해서 화면에 done이 true인 todo데이터만 출력하기
  // 2. 컴포넌트로 분리하기
  const compeleteTodoList = todoData
    .filter(({done}) => done)
    .map(({task}, i) => <li key={i}>{task}</li>)
  
  return (
    <ul>
      {compeleteTodoList}
    </ul>
  );
};

export default TodoContainer;
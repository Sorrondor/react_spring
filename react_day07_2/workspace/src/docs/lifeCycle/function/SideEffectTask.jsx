import React, { useEffect, useState } from 'react';

const SideEffectTask = () => {
  const [number, setNumber] = useState(0)
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getTodos = async () => {
      try {
        const dataLength = 10 * number
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${dataLength}&_limit=10`)
        console.log(response)
        if(!response.ok) throw new Error(`${response} todos datas fetch Error`)
        const todos = await response.json()
        if(!todos.length) throw new Error(`todos 데이터가 없습니다.`)
        return todos
      } catch (error) {
        console.error(`${error.message}`)
        console.error("getTodos fetching error")
      }
    }
    
    getTodos()
      .then((todos) => {
        setTodos(todos)
        setLoading(false)
      })
      .catch((erorr) => {
        setLoading(true)
      })
  }, [number])

  const todoList = todos.map(({title}, i) => <li key={i}>{title}</li>)

  if(loading) return (
    <div>로딩중...</div>
  )

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <ul>
        {todoList}
      </ul>
    </div>
  );
};

export default SideEffectTask;
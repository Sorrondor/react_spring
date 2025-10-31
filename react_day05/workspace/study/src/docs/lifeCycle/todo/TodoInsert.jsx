import React, { useState } from 'react';
import fetchTodo, { fetchOptions } from './fetchTodo';

const TodoInsert = ({todos, handleTodos, setHandleTodos}) => {

  const [value, setValue] = useState("")

  const onChangeValue = (e) => {
    setValue(e.target.value)
  }

  // Create : POST
	// Read : GET
	// Update : PUT
	// Delete : DELETE
  const insertTodo = async (e) => {
    if(e.key === 'Enter'){
      if(!window.confirm(`이대로 추가하시겠습니까?`)) return;
      // POST (url, method, type)

      const data = {
        id : (todos.length + 1).toString(),
        title : value,
        isChecked : false
      }

      fetchTodo(`http://localhost:4000/todos`, fetchOptions("POST", data))
        .then((res) => {
          if(!res.ok) return alert("알 수 없는 오류가 발생했습니다.");
          alert("할 일 추가가 완료 되었습니다.😁")
          setHandleTodos(!handleTodos)
        })
        .catch(console.error)
    }
  }

  return (
    <div>
      <input type="text" 
        onChange={onChangeValue} 
        onKeyDown={insertTodo}
        placeholder='오늘 할 일을 추가해 볼까요?' 
      />
    </div>
  );
};

export default TodoInsert;
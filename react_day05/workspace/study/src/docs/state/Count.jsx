import React, { useState } from 'react';

const Count = () => {

  const [number, setNumber] = useState(0)

  const increase = (e) => {
    setNumber((prev) => {
      console.log(`이전 값: ${prev}`)
      return number + 1
    })
  }

  const decrease = (e) => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={decrease}>-1 감소</button>
      <button onClick={increase}>+1 증가</button>
    </div>
  );
};

export default Count;
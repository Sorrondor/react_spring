import React, { useEffect, useState } from 'react';

const SideEffect = () => {

  const [color, setColor] = useState("")
  const [number, setNumber] = useState(0)

  const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)
  const increase = () => setNumber(number + 1)
  const onClickToChangeColor = () => setColor(getRandomColor())

  useEffect(() => {
    console.log("useEffect 내부 리랜더링😁")
  }, [number])
  
  console.log("리랜더링😎")

  return (
    <div>
      <h1 style={{color}}>오늘 금요일 승찬이 놀러간다.</h1>
      <h1>{number}</h1>
      <button onClick={onClickToChangeColor}>색상 변경</button>
      <button onClick={increase}>+1</button>
    </div>
  );
};

export default SideEffect;
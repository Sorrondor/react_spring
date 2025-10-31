import React, { useState } from 'react';

// 사용자에게 취미를 입력 받고, 화면에 실시간으로 출력한다.
// hobby 상태가 필요!

// 취미가 축구라면, 글자의 크기를 50px로 바꾼다.
// 취미가 농구라면, 글자의 컬러를 blue로 바꾼다.

const Hobby = () => {

  const [hobby, setHobby] = useState("")
  const [style, setStyle] = useState({})

  const onChangeToHobby = (e) => {
    const newHobby = e.target.value
    setHobby(e.target.value)
    
    if(newHobby === "축구"){
      setStyle({fontSize: "50px"})
    }else if(newHobby === "농구"){
      setStyle({color: "blue"})
    }else{
      setStyle({})
    }
  }

  return (
    <div>
      <h1 style={style}>{hobby}</h1>
      <input type="text" onChange={onChangeToHobby} />
    </div>
  );
};

export default Hobby;
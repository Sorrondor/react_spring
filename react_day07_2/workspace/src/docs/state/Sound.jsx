import React, { useState } from 'react';

const Sound = () => {
  const [sound, setSound] = useState("")

  const onClickToSound = (e) => {
    const target = e.target.innerText
    if(target === "고양이 버튼"){
      setSound("야 ~ 옹")
    }else if(target === "강아지 버튼"){
      setSound("멍멍!!")
    }else {
      setSound("진구야~~~")
    }
  }

  return (
    <div>
      {sound}
      <div>
        <button onClick={onClickToSound}>고양이 버튼</button>
        <button onClick={onClickToSound}>강아지 버튼</button>
        <button onClick={onClickToSound}>이태희 버튼</button>
      </div>
    </div>
  );
};

export default Sound;
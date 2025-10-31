import React from 'react';

const Jsx03 = () => {
  const name = "홍길동"
  const age = 20
  const realAge = age - 1
  const message = "오늘 점심 뭐 먹지?"

  return (
    <div>
      <h1>이름: {name}</h1>
      <p>나이: {age}</p>
      <p>만나이: {realAge}</p>
      <p>{message}</p>
    </div>
  );
};

export default Jsx03;
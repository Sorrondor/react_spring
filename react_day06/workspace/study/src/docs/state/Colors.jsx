import React, { useState } from 'react';

// result는 사용자가 입력한 결과
// 빨간색 버튼을 누르면 글자색을 빨갛게
// 파란색 버튼을 누르면 글자색을 파랗게
// 핑크색 입력 시 글자색을 없앤다.

// 1. 입력했을 때 입력한 요소를 들고온다. e객체, (key, onChange)
// - 이벤트를 input에 붙여야한다.
// 2. result에 입력한 값을 추가하거나 변경한다.
// 3. 상태를 변화시켜야 한다. useState(초기값)

// 1. button을 눌렀을 때 p태그를 들고 올 수 있는 방법이 없다.
// React는 DOM에 직접 접근하는 방법을 권장하지 않는다.
// 2. 그렇다면? 상태를 만들어서 사용할 수 있게 넘겨준다

const Colors = () => {

  // 리턴: [변수, 변수를 변경할 세터]
  const [result, setResult] = useState("") 
  const [color, setColor] = useState("")

  const onChangeResult = (e) => {
    if(e.target.value === "핑크색"){ setColor("") }
    setResult(e.target.value)
  }

  const onClickChangeColor = (e) => {
    const target = e.target.innerText
    if(target === "빨간색 버튼"){
      setColor("red")
    }else if(target === "파란색 버튼"){
      setColor("blue")
    }
  }

  return (
    <div>
      <p style={{color}}>{result}</p>
      <input type="text" onChange={onChangeResult} />
      <button onClick={onClickChangeColor}>빨간색 버튼</button>
      <button onClick={onClickChangeColor}>파란색 버튼</button>
    </div>
  );
};

export default Colors;
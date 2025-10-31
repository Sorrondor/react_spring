import React, { useRef, useState } from 'react';

const RefName = () => {
  const [result, setResult] = useState("")
  const nameRef = useRef({});
  const onChangeResult = (e) => {
    setResult(e.target.value)
  }

  const addNim = () => {
    // setResult(result + "님")
    // console.log(nameRef.current) // === p태그
    setResult(nameRef.current.innerText.replaceAll("님", "") + "님") // === p태그
  }

  return (
    <div>
      <p ref={nameRef}>{result}</p>
      <input type="text" onChange={onChangeResult} />
      <button onClick={addNim}>님 추가</button>
    </div>
  );
};

export default RefName;
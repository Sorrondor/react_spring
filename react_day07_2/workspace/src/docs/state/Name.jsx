import React, { useState } from 'react';

const Name = () => {
  const [result, setResult] = useState("")
  const onChangeResult = (e) => {
    setResult(e.target.value)
  }

  return (
    <div>
      <p>{result}</p>
      <input type="text" onChange={onChangeResult} />
    </div>
  );
};

export default Name;
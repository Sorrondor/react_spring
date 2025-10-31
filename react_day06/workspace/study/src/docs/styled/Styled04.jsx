import React, { useState } from 'react';
import S from './style';

const Styled04 = () => {
  // const red = "red"
  const [value, setValue] = useState("")
  const [color, setColor] = useState("")
  const onChangeValue = (e) => setValue(e.target.value)
  const handleColor = (e) => {
    if(e.key === 'Enter'){
      setColor(value)
    }
  }

  return (
    <div>
      <input type="text" onChange={onChangeValue} onKeyDown={handleColor} />
      <S.H1 color={color}>컬러가 적용될 폰트😎</S.H1>
      {/* <S.P fontColor={red}>스타일드 컴포넌트!😎</S.P> */}
    </div>
  );
};

export default Styled04;
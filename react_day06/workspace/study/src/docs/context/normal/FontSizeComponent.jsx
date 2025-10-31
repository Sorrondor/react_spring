import React, { useContext, useState } from 'react';
import { FontContext } from './FontContext';
import useInput from '../../../hooks/useInput';

const FontSizeComponent = () => {
  // context
  const { state, actions } = useContext(FontContext)
  const { setFontSize } = actions
  const { fontSize } = state;

  // hooks
  const [value, setValue, onChangeValue] = useInput("")
  const changeFontSize = (e) => {
    if(e.key === 'Enter'){
      setFontSize(value)
    }
  }

  return (
    <div>
      <p style={{fontSize}}>최하위 컴포넌트!😎</p>
      {/* 
        사용자가 글자의 크기를 입력 후 엔터를 치면
        입력한 크기로 글자 크기 변경 
      */}
      <input 
        type="text" value={value} 
        onKeyDown={changeFontSize} 
        onChange={onChangeValue}
      />
      <button onClick={() => setFontSize("100px")}>커지는 버튼!</button>
    </div>
  );
};

export default FontSizeComponent;
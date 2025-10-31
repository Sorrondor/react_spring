import React from 'react';
import S from './style';

// ThemeProvider에서 제공한 스타일 사용하기
const Styled08 = () => {
  return (
    <div>
      <S.ThemeButton>버튼 컬러 변경</S.ThemeButton>
      {/* 
        input(styled Component) 글자의 컬러 theme secondary컬러 적용
      */}
      <S.Input />
    </div>
  );
};

export default Styled08;
import React from "react";
import S from "./style";

const Styled06 = () => {
  return (
    <div>
      <S.Form>
        <S.Wrap>
          <span id="id">아이디</span>
          <input type="text" />
        </S.Wrap>
        <S.Wrap>
          <span className="password">비밀번호</span>
          <input type="password" />
        </S.Wrap>
        <button type="button">전송</button>
      </S.Form>
    </div>
  );
};

export default Styled06;

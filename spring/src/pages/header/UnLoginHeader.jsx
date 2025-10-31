import React from 'react';
import { Link } from 'react-router-dom';

const UnLoginHeader = () => {
  return (
    <header style={{
      display: "flex",
      gap: "10px",
      padding: "0 10px"
    }}>
    <Link to={"/"}>홈</Link>
    <Link to={"/members/sign-in"}>로그인</Link>
    <Link to={"/members/modify"}>회원정보 수정</Link>
    <Link to={"/members/sign-up"}>회원가입</Link>
  </header>
  );
};

export default UnLoginHeader;
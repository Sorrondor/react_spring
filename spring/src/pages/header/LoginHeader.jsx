import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser, setUserStatus } from '../../modules/user';

const LoginHeader = () => {
  
  const dispatch = useDispatch()


  const handleLogout = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
      method : "POST",
      credentials: 'include'
    })

    if(!response.ok){
      throw new Error("로그아웃 실패!")
    }

    dispatch(setUserStatus(false))
    dispatch(setUser({}))
    localStorage.removeItem("accessToken")

  }

  return (
   <header style={{
      display: "flex",
      gap: "10px",
      padding: "0 10px"
    }}>
      <Link to={"/"}>홈</Link>
      <Link to={"/members/modify"}>회원정보 수정</Link>
      <Link to={"/my-page"}>마이페이지</Link>
      <Link to={"/members/modify"}>로그인 후 서비스</Link>
     <button onClick={handleLogout}>로그아웃</button>
    </header>
  );
};

export default LoginHeader;
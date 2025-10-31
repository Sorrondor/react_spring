import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// 로그인이 안되었는데 로그인이 필요한 페이지에 접근하는 경우
const LoginLayout = () => {

  const {isLogin} = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLogin){
      navigate("/members/sign-in")
    }
  }, [isLogin])

  return (
    <Outlet />
  );
}

export default LoginLayout;
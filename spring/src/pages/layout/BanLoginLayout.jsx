import React, { use, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

// 로그인이 되어있는데 로그인 후 접근하면 안되는 페이지에 접근하는 경우
// ex) 로그인 후 로그인 페이지에 접근
const BanLoginLayout = () => {

  const {isLogin} = useSelector(state => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if(isLogin){
      navigate("/")
    }
  }, [isLogin])

  return (
    <Outlet />
  );
}

export default BanLoginLayout;
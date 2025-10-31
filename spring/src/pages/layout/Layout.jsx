import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import LoginHeader from '../header/LoginHeader';
import UnLoginHeader from '../header/UnLoginHeader';

const Layout = () => {

  const { isLogin } = useSelector(state => state.user)

  return (
    <div>
      {isLogin ? <LoginHeader /> : <UnLoginHeader />}
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
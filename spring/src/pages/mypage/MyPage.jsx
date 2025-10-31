import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {

  const { currentUser } = useSelector((state) => state.user)

  return (
    <div>
      <p>{currentUser?.memberEmail}</p>
    </div>
  );
};

export default MyPage;
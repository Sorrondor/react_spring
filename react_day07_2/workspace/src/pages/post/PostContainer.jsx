import React from 'react';
import { Outlet } from 'react-router-dom'
import { PostsProvider } from '../../context/PostsContext';

const PostContainer = () => {
  return (
    <PostsProvider>
      <div>배너</div>
      <Outlet context={{name: "홍길동"}}/>
    </PostsProvider>
  );
};

export default PostContainer;
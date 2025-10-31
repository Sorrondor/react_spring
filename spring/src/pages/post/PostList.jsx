import React, { useEffect, useState } from 'react';
import { getPost } from './_function/getPosts';
import { Link } from 'react-router-dom';

const PostList = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPost(`${process.env.REACT_APP_BACKEND_URL}/posts/read-posts`)
    .then(setPosts)
    .catch(console.error)
  }, [])

  const postList = posts.map(({id, postTitle}, i) => (
    <li key={i}>
      <Link to={`/post/read/${id}`}>
        {postTitle}
      </Link>
    </li>
  ))
  
  return (
    <div>
      {postList}
    </div>
  );
};

export default PostList;
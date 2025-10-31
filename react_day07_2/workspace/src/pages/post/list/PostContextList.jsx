import React, { useContext } from 'react';
import { PostsContext } from '../../../context/PostsContext';
import { Link } from 'react-router-dom'

const PostContextList = () => {
  const {state, actions, error, loading, refetch} = useContext(PostsContext)
  console.log(useContext(PostsContext))

  const postList = state.posts && state.posts.map(({title, id}, i) => (
    <li key={i}>
      <Link to={`/community/read/${id}`}>{title}</Link>
    </li>
  ))

  return (
    <div>
      {postList}
    </div>
  );
};

export default PostContextList;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getPost } from './_function/getPosts';

const PostRead = () => {
  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [post, setPost] = useState({})

  const goToUpdate = () => {
    navigate(`/post/update/${id}`, {
      state: {
        post: post
      }
    })
  }

  const removePost = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/delete/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if(!res.ok) throw new Error();
      return res.json()
    })
    .then((res) => {
      alert(res.message)
      navigate("/post/list")
    })
    .catch(console.error)
  }


  useEffect(() => {
    getPost(`${process.env.REACT_APP_BACKEND_URL}/posts/read-post/${id}`)
      .then(setPost)
      .catch(console.error)

  }, [])

  return (
    <div>
      <h1>제목: {post.postTitle}</h1>
      <p>내용: {post.postContent}</p>
      <button onClick={goToUpdate}>수정하기</button>
      <button onClick={removePost}>삭제하기</button>
    </div>
  );
};

export default PostRead;
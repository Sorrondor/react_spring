import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import S from './style';

const PostReadContainer = () => {

  const {id} = useParams()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const getPosts = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const post = await response.json()
      return post
    }

    getPosts()
      .then((post) => {
        setLoading(false)
        setPost(post)
      })
      .catch((error) => {
        setLoading(true)
        console.error(error)
      })

  }, [])

  if(loading){
    return (
      <>
        <S.FontAwesomeIcon icon={faSpinner} spinPulse />
        <S.Bg />
      </>
    )
  }

  return (
    <div>
      <p>아이디: {post.id}</p>
      <p>제목: {post.title}</p>
      <p>내용: {post.body}</p>
    </div>
  );
};

export default PostReadContainer;
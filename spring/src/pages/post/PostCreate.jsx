import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const PostCreate = () => {
  const {
    register, handleSubmit, getValues, formState: { isSubmitting, isSubmitted, errors }
  } = useForm({ mode: "onChange" })
  const navigate = useNavigate()


  const handleSumbmitForm = handleSubmit(async (data) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/create`, {
      headers: {
        "Content-Type": "application/json"
      },
      method : "POST",
      body : JSON.stringify(data)
    })
    .then((res) => {
      if(!res.ok) return "Post Create Fetch 요청 실패";
      return res.json()
    })
    .then((res) => {
      alert(`${res.message}`)
      console.log(res)
      const postId = res.newPost.id 
      navigate(`/post/read/${postId}`, {
        state: {
          post: res.newPost
        }
      })
    })
    .catch(console.error)
  })

  return (
    <div style={{
      width: "400px",
      margin: "0 auto",
    }}>
      <h1>게시판 생성</h1>
      <form onSubmit={handleSumbmitForm}>
        <label>
          <p>제목</p>
          <input
            type="text" placeholder='제목을 작성하세요.' name='postTitle'
            {...register("postTitle", { required: true })}
          />
        </label>
        <label>
          <p>내용</p>
          <input
            type="text" placeholder='게시글을 작성하세요.' name='postContent'
            {...register("postContent", { required: true })}
          />
        </label>
        <button disabled={isSubmitting}>로그인</button>
      </form>
    </div>
  );
};

export default PostCreate;
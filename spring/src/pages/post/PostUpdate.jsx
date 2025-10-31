import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const PostUpdate = () => {
  const {id} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [post, setPost] = useState(location.state.post)

  const {
    register, handleSubmit, getValues, reset, formState: {isSubmitting, isSubmitted, errors}
  } = useForm({
    mode: "onChange",
    defaultValues: {
      id: post.id,
      postTitle: post.postTitle,
      postContent: post.postContent,
    }
  })
 
   const handleSumbmitForm = handleSubmit(async (postVO) => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts/modify/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT", 
      body: JSON.stringify(postVO)
    })
    .then((res) => {
      if(!res.ok) return "Post Create Fetch 요청 실패";
      return res.json()
    })
    .then((res) => {
      alert(`${res.message}`)
      navigate(`/post/read/${id}`)
      console.log(res)
    })
    .catch(console.error)
   })
    
   return (
     <div style={{
       width : "400px",
       margin : "0 auto",
     }}>
       <h1>게시글 수정</h1>
       <form onSubmit={handleSumbmitForm}>
         <label>
           <p>게시글 제목</p>
           <input 
             type="text" placeholder='제목 입력' name='postTitle'
             {...register("postTitle", { required : true })}
           />
         </label>
         <label>
           <p>게시글 내용</p>
           <input 
             type="text" placeholder='제목 입력' name='postContent'
             {...register("postContent", { required : true })}
           />
         </label>
 
         <button disabled={isSubmitting}>정보 수정</button>
       </form>
     </div>
   );
};

export default PostUpdate;
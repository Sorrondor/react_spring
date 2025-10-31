import React from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserStatus } from '../../../modules/user';

const SignIn = () => {
  const navigate = useNavigate()
  const { isLogin } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const {
    register, handleSubmit, getValues, formState: {isSubmitting, isSubmitted, errors}
  } = useForm({mode: "onChange"})

  const handleSumbmitForm = handleSubmit(async (data) => {
    const {memberPasswordConfirm, ...memberVO} = data; 

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(memberVO)
    })
    .then(res => res.json())
    .then(({message, data}) => {
      let accessToken = data.accessToken
      localStorage.setItem("accessToken", accessToken)
      dispatch(setUserStatus(true))
      navigate("/")
    })

  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

  return (
    <div style={{
      width : "400px",
      margin : "0 auto",
    }}>
      <h1>로그인</h1>
      <form onSubmit={handleSumbmitForm}>
        <label>
          <p>이메일</p>
          <input 
            type="text" placeholder='이메일 입력' name='memberEmail' 
            {...register("memberEmail", {
              required : true,
              pattern : {
                value : emailRegex
              }
            })}
          />
          {errors && errors?.memberEmail?.type === "required" && (
            <p>이메일을 입력하세요.</p>
          )}
          {errors && errors?.memberEmail?.type === "pattern" && (
            <p>이메일 양식에 맞게 입력해주세요.</p>
          )}
        </label>
        <label>
          <p>비밀번호</p>
          <input 
            type="text" placeholder='비밀번호 입력' name='memberPassword'
            {...register("memberPassword", {
              required : true,
              pattern : {
                value : passwordRegex
              }
            })}
          />
          {errors && errors?.memberPassword?.type === "required" && (
            <p>비밀번호를 입력하세요.</p>
          )}
          {errors && errors?.memberPassword?.type === "pattern" && (
            <p>소문자, 숫자, 특수문자를 각 하나 포함한 8자리 이상이여야 합니다.</p>
          )}
        </label>
        <button disabled={isSubmitting}>로그인</button>
      </form>

      <div style={{
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
        margin: "20px 0"
      }}>
        <Link to={"http://localhost:10000/oauth2/authorization/google"}>
          <img src={process.env.PUBLIC_URL + "/assets/images/google.png"} />
        </Link>
        <Link to={"http://localhost:10000/oauth2/authorization/naver"}>
          <img src={process.env.PUBLIC_URL + "/assets/images/naver.png"} />
        </Link>
        <Link to={"http://localhost:10000/oauth2/authorization/kakao"}>
          <img src={process.env.PUBLIC_URL + "/assets/images/kakao.png"} />
        </Link>
      </div>

    </div>
  );
};

export default SignIn;
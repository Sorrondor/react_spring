import { RouterProvider, useNavigate } from 'react-router-dom';
import router from './routes/router';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser, setUserStatus } from './modules/user';

function App() {

  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null)
  const dispatch = useDispatch()
  
  // 최초 한 번
  useEffect(() => {
    if(accessToken){
      const getUser = async () => {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/private/members/me`, {
          method: "GET",
          headers: {
            "Authorization" : `Bearer ${accessToken}`
          }
        })
        
        if(!response.ok) {
          throw new Error('토큰 만료')
        }

        const data = await response.json()
        return data
      }
  
      getUser()
        .then((res) => {
          dispatch(setUser(res.data))
          dispatch(setUserStatus(true))
        })
        .catch(async (error) => {
           // 토큰 만료
          // accessToken과 cookie에 심어져있는 토큰 refresh 경로로 요청올 보내서 재발급
          const refreshResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/refresh`, {
            method: "Post",
            headers: {
              "Content-Type": "application/json"
            },
            credentials : 'include', // 쿠키 전송
            body: JSON.stringify({
              accessToken: accessToken
            })
          })
          
          // 토큰 만료 -> 로그아웃
          if(!refreshResponse.ok){
            dispatch(setUserStatus(false))
            dispatch(setUser({}))
            return
          }

          const newReponseData = await refreshResponse.json()
          let newAccessToken = newReponseData.data.accessToken
          localStorage.setItem("accessToken", newAccessToken)
          setAccessToken(newAccessToken)
        })
    }
    
  }, [accessToken])

  return (
    <RouterProvider router={router} />
  );
}

export default App;

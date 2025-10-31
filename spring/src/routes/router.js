import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/main/Main";
import SignIn from "../pages/member/sign_in/SignIn";
import Layout from "../pages/layout/Layout";
import BanLoginLayout from "../pages/layout/BanLoginLayout";
import LoginLayout from "../pages/layout/LoginLayout";
import MyPage from "../pages/mypage/MyPage";
import OauthSuccess from "../pages/oauth/OauthSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "/members/sign-in",
        element: <BanLoginLayout />,
        children: [
          {
            path: "",
            element: <SignIn />
          }
        ]
      },
      {
        path: "my-page",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <MyPage />
          }
        ]
      },
      {
        path: "/oauth2/success",
        element: <OauthSuccess />
      }
    ]
  },
])

export default router;
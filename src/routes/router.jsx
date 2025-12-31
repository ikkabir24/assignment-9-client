import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SkillDetailsPage from "../components/Header/HomeComponents/SkillDetails";
import LoginPage from "../components/Header/HomeComponents/LoginPage";
import RegisterPage from "../components/Header/HomeComponents/RegisterPage";
import PrivateRoute from "../provider/PrivateRoute";
import LoadingPage from "../pages/LoadingPage";
import UpdateProfile from "../pages/UpdateProfile";
import ForgotPass from "../components/Header/HomeComponents/ForgotPass";


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '/',
                    loader: ()=> fetch('/data.json'),
                    hydrateFallbackElement: <LoadingPage></LoadingPage>,
                    element: <Home></Home>,
                },
                {
                    path: '/profile',
                    element: <Profile></Profile>,
                },
                {
                    path: '/updateProfile',
                    element: <UpdateProfile></UpdateProfile>,
                },
                {
                    path: '/details/:id',
                    loader: ()=> fetch('/data.json'),
                    hydrateFallbackElement: <LoadingPage></LoadingPage>,
                    element: <PrivateRoute>
                        <SkillDetailsPage></SkillDetailsPage>
                    </PrivateRoute>
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/register',
                    element: <RegisterPage></RegisterPage>
                },
                {
                    path: '/forgotPass',
                    element: <ForgotPass></ForgotPass>,
                },
            ]
        } ,
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>
        },
    ]
)

export default router;
import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Profile from '../pages/profile/Profile'
import Register from '../pages/register/Register'
import Watch from '../pages/watch/Watch'
import AuthLayout from './layout/AuthLayout'
import ProtectedLayout from './layout/ProtectedLayout'

export const router = createBrowserRouter([
    {
        path:'/',
        element: <ProtectedLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/profile/:username/:userID',
                element:<Profile/>
            },
            {
                path:'watch',
                element:<Watch/>
            },
        ]
    },
    {
        path:'/',
        element: <AuthLayout/>,
        children:[
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
    },
])
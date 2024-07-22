import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Category from '../pages/category/Category';
import SingleProduct from '../pages/single/SingleProduct';
import ProtectedLayout from './layout/ProtectedLayout';
import AccountLayout from './layout/AccountLayout';
import Account from '../pages/account/Account';
import Messeger from '../pages/inbox/Messeger';
import SavedPrdouct from '../pages/saved/SavedPrdouct';
import Recent from '../pages/recent/Recent';
import Orders from '../pages/orders/Orders';
import Cart from '../pages/cart/Cart';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/category', element: <Category /> },
      { path: '/category/:category/:productID', element: <SingleProduct /> },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/',
        element: <Layout />,
        children: [{ path: '/cart', element: <Cart /> }],
      },
      {
        path: '',
        element: <Layout />,
        children: [
          {
            path: '/account',
            element: <AccountLayout />,
            children: [
              { path: '/account', element: <Account /> },
              { path: '/account/inbox', element: <Messeger /> },
              { path: '/account/saved', element: <SavedPrdouct /> },
              { path: '/account/recently-viewed', element: <Recent /> },
              { path: '/account/orders', element: <Orders /> },
            ],
          },
        ],
      },
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
]);

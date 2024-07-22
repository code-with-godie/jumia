import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './context/userSlice';
import { getCartTotal, setCartItems } from './context/cartSlice';

const App = () => {
  const [dark, setDark] = useState(false);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('jumia-cart'));
    // console.log();
    dispatch(setCartItems(cartItems));
    dispatch(getUser());
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('jumia-cart', JSON.stringify(cart));
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  useEffect(() => {
    localStorage.setItem('jumia-cart', JSON.stringify(cart));
  }, []);
  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;

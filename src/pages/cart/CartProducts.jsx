import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CartItem from './CartItem';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;
const CartProducts = () => {
  const cart = useSelector(state => state.cart.cartItems);

  return (
    <Container>
      {cart?.map((item, index) => (
        <CartItem
          key={index}
          {...item}
        />
      ))}
    </Container>
  );
};

export default CartProducts;

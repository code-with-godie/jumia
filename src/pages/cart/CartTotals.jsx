import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
const Container = styled.div`
  flex: 1;
  max-width: 200px;
  background-color: ${props => props.theme.bg_white};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Button = styled.button`
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: black;
  border: none;
  color: white;
`;
const CartTotals = () => {
  const { cartItems } = useSelector(state => state.cart);
  const { currentUser: user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleCheckout = async () => {
    try {
      setLoading(true);
      const tempCart = cartItems.map(item => {
        const { amount, description, title, price, $id, images } = item;
        return { amount, description, title, price, $id, image: images[0] };
      });
      console.log(tempCart);

      const response = await axios.post(
        'https://jumia-payment.onrender.com/api/v1/pay/create-stripe-intent',
        {
          cartItems: tempCart,
          userId: user.$id,
        }
      );
      console.log('reponse', response);

      if (response.data.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log('error', error);

      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      CartTotals
      {error && <p> {error} </p>}
      <Button onClick={handleCheckout}>
        {loading ? (
          <>
            <LoadingAnimation /> processing
          </>
        ) : (
          'checkout'
        )}
      </Button>
    </Container>
  );
};

export default CartTotals;

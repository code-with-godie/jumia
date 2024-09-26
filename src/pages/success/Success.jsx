import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useWindowSize from '../../hooks';
import source from '../../assets/success.png';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  object-fit: contain;
`;
const Description = styled.p`
  color: #a8a7a7;
  font-weight: 100;
`;
const SuccesPage = () => {
  const { width, height } = useWindowSize();
  const navigate = useNavigate();
  //retrieve the order from the stripe
  //save it to the database
  //empty that user cart
  //decrese those items stock
  useEffect(() => {
    setTimeout(() => {
      navigate('/orders');
    }, 5000);
  }, [navigate]);
  return (
    <Container>
      <Image
        width={200}
        height={200}
        className=' object-contain'
        alt='success image'
        src={source}
      />
      <Description>waiting for a redirect...</Description>
      <Description>Thank you for shopping with us.</Description>
      <Description>Your order is being prepared for delivery</Description>
      <Confetti
        width={width}
        height={height}
      />
    </Container>
  );
};

export default SuccesPage;

import React, { useState } from 'react';
import styled from 'styled-components';
import source from '../../assets/emptyOrdes.png';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 100%;
  background-color: white;
`;
const Title = styled.h2`
  padding: 0.5rem;
  font-weight: 400;
  border-bottom: 1px solid #f1f1f2;
  /* padding-bottom:.5rem; */
`;
const ImageContainer = styled.div`
  display: grid;
  flex: 1;
  place-content: center;
  gap: 0.5rem;
`;
const Image = styled.img``;
const ShopNow = styled.button`
  padding: 1rem;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  text-transform: uppercase;
  border: none;
  font-size: 0.9rem;
  box-shadow: 0 0 5px 2px #cfcfcf;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;
`;
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  if (orders.length === 0) {
    return (
      <Container>
        <ImageContainer>
          <Image src={source} />
          <ShopNow onClick={() => navigate('/')}>shop now</ShopNow>
        </ImageContainer>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Orders</Title>
    </Container>
  );
};

export default Orders;

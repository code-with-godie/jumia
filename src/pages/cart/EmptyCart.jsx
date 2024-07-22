import React from 'react';
import styled from 'styled-components';
import emptyCart from '../../assets/emptyCart.png';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 1150px;
  background-color: ${props => props.theme.bg_white};
  min-height: 45vh;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`;
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
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Image src={emptyCart} />
      <ShopNow onClick={() => navigate('/')}>start shopping</ShopNow>
    </Wrapper>
  );
};

export default EmptyCart;

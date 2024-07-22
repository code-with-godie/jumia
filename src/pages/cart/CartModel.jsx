import {
  Close,
  DeleteOutline,
  FavoriteBorderOutlined,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeCartItem } from '../../context/cartSlice';

const Container = styled.div`
  padding: 2rem 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 450px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  font-style: 300;
  flex: 1;
`;
const Description = styled.p``;
const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Button = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 0.9rem;
  flex: 1;
  border: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  justify-content: center;
  border-radius: 0.5rem;
  :nth-child(1) {
    color: #f68b1e;
    border: 1px solid #f68b1e;
  }
  :nth-child(2) {
    background-color: #f68b1e;
    color: #ffffff;
  }
`;
const CartModel = ({ closeModel, id, addToFavourite }) => {
  const dispatch = useDispatch();

  const handleAddToFavourite = async () => {
    try {
      await addToFavourite();
      dispatch(removeCartItem(id));
      closeModel();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Remove from cart</Title>
        <IconButton onClick={() => closeModel(false)}>
          <Close />
        </IconButton>
      </TitleContainer>
      <Description>do you realy want to remove thi item from cart?</Description>
      <ControlContainer>
        <Button onClick={handleAddToFavourite}>
          {' '}
          <FavoriteBorderOutlined /> save for later
        </Button>
        <Button onClick={() => dispatch(removeCartItem(id))}>
          {' '}
          <DeleteOutline /> remove item
        </Button>
      </ControlContainer>
    </Container>
  );
};

export default CartModel;

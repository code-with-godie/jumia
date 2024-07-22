import { DeleteOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { decrease, increase, removeCartItem } from '../../context/cartSlice';
import { useState } from 'react';
import Model from '../../components/models/Model';
import CartModel from './CartModel';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .icon {
    color: ${props => props.theme.btn_primary};
    font-size: 1.7rem;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  flex: 1;
`;
const Right = styled(Left)`
  justify-content: center;
  .btn {
    border-radius: 0.2rem;
    background-color: ${props => props.theme.btn_primary};
    color: ${props => props.theme.text_white};
    padding: 0.3rem;
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    :hover {
      opacity: 0.8;
      background-color: ${props => props.theme.btn_primary};
    }
    :disabled {
      opacity: 0.4;
      cursor: not-allowed;
      background-color: ${props => props.theme.btn_primary};
    }
  }
  gap: 2rem;
`;
const Label = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  color: ${props => props.theme.btn_primary};
`;
const Amount = styled.p`
  font-weight: bold;
  color: ${props => props.theme.text_black};
  color: ${props => props.theme.text_black};
`;
const CartControls = ({ id, amount, saved, addToFavourite }) => {
  const [showModel, setShowModel] = useState(false);
  const dispatch = useDispatch();
  const increaseAmount = () => {
    dispatch(increase(id));
  };
  const decreseAmount = () => {
    dispatch(decrease(id));
  };
  const removeProduct = async () => {
    if (!saved) {
      setShowModel(true);
      // await addToFavourite();
    } else {
      dispatch(removeCartItem(id));
    }
  };
  return (
    <Container>
      <Left onClick={removeProduct}>
        <IconButton>
          <DeleteOutline className='icon' />
        </IconButton>
        <Label>remove</Label>
      </Left>
      <Right>
        <IconButton
          disabled={amount <= 1}
          onClick={decreseAmount}
          className='btn'
        >
          -
        </IconButton>
        <Amount> {amount} </Amount>
        <IconButton
          onClick={increaseAmount}
          className='btn'
        >
          +
        </IconButton>
      </Right>
      {showModel && (
        <Model
          center
          bg=' #00000016'
        >
          <CartModel
            id={id}
            addToFavourite={addToFavourite}
            closeModel={setShowModel}
          />
        </Model>
      )}
    </Container>
  );
};

export default CartControls;

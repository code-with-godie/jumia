import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CartControls from './CartControls';
import { useDispatch, useSelector } from 'react-redux';
import { appwriteService } from '../../appWrite/appwriteService';
import { updateUser } from '../../context/userSlice';

const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.bg_white};
  flex-direction: column;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  min-height: 250px;
  @media screen and (min-width: 768px) {
    min-height: auto !important;
    max-width: 300px;
  }
`;
const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`;
const DescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.3rem;
`;
// const Title = styled.p``;
const Seller = styled.p``;
const Size = styled.p``;
const Instock = styled.p``;
const Description = styled.p``;
const Price = styled.p``;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const Label = styled.p``;
const CartItem = ({ images, title, size, price, stock, amount, $id }) => {
  const { currentUser: user } = useSelector(state => state.user);
  const [saved, setSaved] = useState(false);
  const dispatch = useDispatch();
  const addToFavourite = async () => {
    try {
      const newUser = await appwriteService.saveProduct(user?.email, $id);
      const { username, email, $id: userID, saved } = newUser;
      dispatch(updateUser({ name: username, email, $id: userID, saved }));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const saved = user?.saved?.includes($id);
    setSaved(saved);
  }, [$id, user]);
  return (
    <Container>
      <ImageContainer>
        <Image src={images[0]} />
      </ImageContainer>
      <DescriptionContainer>
        <Description>
          {title.length > 100 ? `${title.substring(0, 100)}...` : title}
        </Description>
        <LabelContainer>
          <Label>seller: </Label>
          <Seller>godie</Seller>
        </LabelContainer>
        <LabelContainer>
          {size && <Label>size</Label>}
          {size && <Size>40</Size>}
        </LabelContainer>
        <LabelContainer>
          <Label>Kshs.</Label>
          <Price> {price} </Price>
        </LabelContainer>
        <Instock> {stock > 0 ? 'instock' : 'out of stock'} </Instock>
        <CartControls
          saved={saved}
          addToFavourite={addToFavourite}
          id={$id}
          amount={amount}
        />
      </DescriptionContainer>
    </Container>
  );
};

export default CartItem;

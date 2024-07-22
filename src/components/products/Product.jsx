import { IconButton, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CartModel from '../cart/CartModel';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { appwriteService } from '../../appWrite/appwriteService';
import { updateUser } from '../../context/userSlice';
const AddToCart = styled.button`
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-self: stretch;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  border: none;
  outline: none;
  transition: visibility 100ms ease-in-out;
  visibility: hidden;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
`;
const Container = styled.div`
  background: ${({ bg }) => bg || 'white'};
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;

  transition: 100ms;
  position: relative;
  &.more {
    :hover {
      box-shadow: 0 0 5px 3px #eeeeee;
    }
    :hover .show.fav {
      visibility: visible;
    }
    :hover ${AddToCart} {
      visibility: visible;
    }
  }

  &.fixed {
    flex: 0 0 150px;
    :hover {
      transform: scale(1.01);
      box-shadow: 0 0 5px 3px #eeeeee;
    }
    @media screen and (min-width: 768px) {
      flex: 0 0 200px;
    }
  }
  .fav {
    position: absolute;
    z-index: 100;
    bottom: 40px;
    right: 5px;
    visibility: hidden;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
  padding: 0.5rem;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const DescriptionContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const Description = styled.p`
  overflow: hidden;
`;
const Price = styled.p``;
const OldPrice = styled.small`
  text-decoration: line-through;
  text-decoration-color: rgb(109, 106, 106);
  color: rgb(109, 106, 106);
  font-style: oblique;
`;
const Important = styled.strong``;

const MoreDescription = styled.div`
  display: none;
  &.more {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0.5rem;
  }
`;

const Discount = styled.p`
  color: ${props => props.theme.btn_primary};
  background-color: #f68a1e4f;
  padding: 0.2rem 0.5rem;
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  z-index: 10;
`;
const Product = ({
  sellingPrice,
  discount,
  title,
  single,
  images = [],
  to,
  fixed,
  category,
  showFav,
  $id,
}) => {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [saved, setSaved] = useState(false);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const addToFavourite = async e => {
    e.stopPropagation();
    try {
      const newUser = await appwriteService.saveProduct(user?.email, $id);
      const { username, email, $id: userID, saved } = newUser;
      dispatch(updateUser({ name: username, email, $id: userID, saved }));
    } catch (error) {
      console.log(error);
    }
  };
  const addProductToCart = e => {
    e.stopPropagation();
    if (!user) {
      navigate('/login');
      return;
    }
    setShowModel(true);
  };

  useEffect(() => {
    const saved = user?.saved?.includes($id);
    setSaved(saved);
  }, [$id, user]);
  return (
    <Container
      onClick={() => navigate(to, { state: { category } })}
      className={fixed ? 'fixed' : 'more'}
    >
      {discount > 0 && single && (
        <Discount>
          {' '}
          {`-${parseFloat((discount / sellingPrice) * 100).toFixed(2)}%`}
        </Discount>
      )}
      <ImageContainer>
        <Image
          src={images[0]}
          alt='product image'
        />
      </ImageContainer>
      <DescriptionContainer>
        <Description>
          {' '}
          {title?.length > 20 ? `${title?.substring(0, 20)}...` : title}{' '}
        </Description>
        <Price>
          <Important>Ksh.</Important> {sellingPrice - discount}
        </Price>
        {discount !== 0 && <OldPrice>Ksh.{sellingPrice}</OldPrice>}
      </DescriptionContainer>
      <MoreDescription className={!fixed && 'more'}>
        <Rating
          readOnly
          value={3.5}
        />
        <AddToCart onClick={addProductToCart}>add to cart</AddToCart>
      </MoreDescription>
      {showModel && <CartModel />}
      <IconButton
        onClick={addToFavourite}
        className={showFav ? 'show fav' : 'fav'}
      >
        {saved ? (
          <Favorite style={{ color: '#FF9900' }} />
        ) : (
          <FavoriteBorderOutlined />
        )}
      </IconButton>
    </Container>
  );
};

export default Product;

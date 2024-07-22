import React, { useCallback, useEffect, useState } from 'react';
import { appwriteService } from '../../appWrite/appwriteService';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IconButton, Rating } from '@mui/material';
import FileViewer from '../../components/fileViewer/FileViewer';
import DescriptionIformation from '../../components/single/DescriptionInformation';
import {
  FavoriteBorderOutlined,
  Favorite,
  ShoppingCart,
} from '@mui/icons-material';
import { addToCart, decrease, increase } from '../../context/cartSlice';
import { updateUser } from '../../context/userSlice';
const Wrapper = styled.div`
  padding: 0.5rem;
  color: ${props => props.theme.text_black};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  background-color: ${props => props.theme.bg_primary_2};
  overflow: auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 1100px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.bg_white};
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
const Right = styled.div`
  display: flex;
  flex: 1;
  background-color: ${props => props.theme.bg_white};
  @media screen and (min-width: 768px) {
    max-width: 250px;
  }
`;
const ImageContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.loading {
    background-color: #d4d4d6;
  }
`;
const ImageWrapper = styled.div`
  height: 250px;
  display: grid;
  place-content: center;
  width: 100%;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  cursor: pointer;
`;
const DescriptionContainer = styled.div`
  flex: 1;
  padding: 0.5rem;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.bg_primary_2};
`;
const TitleWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  .icon {
    color: ${props => props.theme.btn_primary};
    padding: 0;
  }
`;
const Title = styled.h3`
  color: ${props => props.theme.text_black};
  font-weight: 400;
  font-size: 1.2rem;
  text-transform: capitalize;
`;
const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Label = styled.p`
  text-transform: capitalize;
  &.large {
    font-weight: bold;
    font-size: 1.7rem;
  }
  &.previous {
    color: ${props => props.theme.gray_1};
    text-decoration: line-through;
    font-weight: 200;
  }
  &.instock {
    font-weight: 200;
    color: ${props => props.theme.gray_1};
  }
  &.outofstock {
    font-weight: 200;
    color: tomato;
    text-decoration: line-through;
  }
  &.discount {
    color: ${props => props.theme.btn_primary};
    background-color: #f68a1e4f;
    padding: 0.2rem 0.5rem;
  }
  &.cart {
    flex: 1;
    text-align: center;
    color: ${props => props.theme.text_white};
    text-transform: uppercase;
  }
  &.size {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid ${props => props.theme.bg_primary_2};
  }
`;
const Brand = styled.p`
  color: #264996;
  font-weight: 200;
  cursor: pointer;
`;
const Row = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
`;
const CartButton = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  text-transform: uppercase;
  border: none;
  font-size: 1rem;
  box-shadow: 0 0 5px 2px #cfcfcf;
  border-radius: 0.2rem;
  flex: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const ProductDescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${props => props.theme.bg_white};
`;
const ProductDescription = styled.p`
  font-weight: 100;
`;
const ProductSpecificationContainer = styled.ul`
  padding-left: 1rem;
`;
const ProductSpecification = styled.li`
  font-weight: 100;
`;
const Amount = styled.p`
  font-weight: bold;
  color: ${props => props.theme.text_black};
  color: ${props => props.theme.text_black};
`;

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [saved, setSaved] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const increaseAmount = () => {
    dispatch(increase(product?.$id));
  };
  const decreaseAmount = () => {
    dispatch(decrease(product?.$id));
  };
  const addProductToCart = () => {
    dispatch(
      addToCart({
        $id: product?.$id,
        title: product?.title,
        amount: 1,
        price: product?.sellingPrice,
        stock: product?.stock,
        size: null,
        images: product?.images,
      })
    );
  };
  const cart = useSelector(state => state.cart);
  const params = useParams();
  const user = useSelector(state => state.user.currentUser);
  const addToFavourite = async e => {
    e.stopPropagation();
    try {
      const newUser = await appwriteService.saveProduct(
        user?.email,
        product?.$id
      );
      const { username, email, $id: userID, saved } = newUser;
      dispatch(updateUser({ name: username, email, $id: userID, saved }));
    } catch (error) {
      console.log(error);
    }
  };
  const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      const product = await appwriteService.getSingleProduct(params?.productID);
      setProduct(product);
      setCurrentImage(product?.images[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [params]);
  useEffect(() => {
    appwriteService.addToRecentlyViewed(user.email, params?.productID);
    getProduct();
  }, [user, params, getProduct]);
  useEffect(() => {
    const item = cart?.cartItems?.find(item => item.$id === product?.$id);
    if (item) {
      setInCart(true);
      setCartItem(item);
    }
  }, [cart, product]);
  useEffect(() => {
    const saved = user?.saved?.includes(params?.productID);
    setSaved(saved);
  }, [params, user]);
  return (
    <Wrapper>
      <Container>
        <Left>
          <ImageContainer>
            <ImageWrapper>
              {currentImage && <Image src={currentImage} />}
            </ImageWrapper>
            <FileViewer
              setCurrentImage={setCurrentImage}
              images={product?.images}
            />
          </ImageContainer>
          <DescriptionContainer>
            <TitleContainer>
              <TitleWrapper>
                <Title>{product?.title}</Title>
                <IconButton
                  className='icon'
                  onClick={addToFavourite}
                >
                  {saved ? <Favorite /> : <FavoriteBorderOutlined />}
                </IconButton>
              </TitleWrapper>
              <Row>
                <LabelContainer>
                  <Label>brand :</Label>
                  <Brand>
                    {product?.brand} | similar products from {product?.brand}{' '}
                  </Brand>
                </LabelContainer>
              </Row>
            </TitleContainer>
            <Row>
              <LabelContainer>
                <Label className='large'>
                  Kshs . {product?.sellingPrice - product?.discount}{' '}
                </Label>
                {product?.discount > 0 && (
                  <>
                    <Label className='previous'>
                      {' '}
                      {product?.sellingPrice}{' '}
                    </Label>
                    <Label className='discount'>
                      {`-${parseFloat(
                        (product?.discount / product?.sellingPrice) * 100
                      ).toFixed(2)}%`}
                    </Label>
                  </>
                )}
              </LabelContainer>
            </Row>
            <Row>
              {product?.stock > 0 ? (
                <Label className='instock'> instock </Label>
              ) : (
                <Label className='outofstock'> out of stock </Label>
              )}
            </Row>
            <Row>
              <Rating
                readOnly
                value={4}
              />
            </Row>
            {product?.size?.length > 0 && (
              <Row>
                <Label className='size'>XL</Label>
                <Label className='size'>2XL</Label>
                <Label className='size'>XXL</Label>
              </Row>
            )}
            {!inCart ? (
              <Row>
                <CartButton>
                  {' '}
                  <ShoppingCart />
                  <Label
                    onClick={addProductToCart}
                    className='cart'
                  >
                    add to cart
                  </Label>
                </CartButton>
              </Row>
            ) : (
              <Row>
                <IconButton
                  disabled={cartItem?.amount <= 1}
                  className='btn'
                  onClick={decreaseAmount}
                >
                  -
                </IconButton>
                <Amount> {cartItem?.amount} </Amount>
                <IconButton
                  onClick={increaseAmount}
                  className='btn'
                >
                  +
                </IconButton>
              </Row>
            )}
          </DescriptionContainer>
        </Left>
        <Right>
          <DescriptionIformation />
        </Right>
      </Container>
      <Container>
        <ProductDescriptionContainer>
          <Title>product details</Title>
          <ProductDescription>{product?.description}</ProductDescription>
        </ProductDescriptionContainer>
      </Container>
      <Container>
        {product?.specifications?.length > 0 && (
          <ProductDescriptionContainer>
            <Title>specifications</Title>
            <ProductSpecificationContainer>
              {product?.specifications?.map(item => (
                <ProductSpecification key={item}> {item} </ProductSpecification>
              ))}
            </ProductSpecificationContainer>
          </ProductDescriptionContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default SingleProduct;

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { KeyboardArrowRight } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import HomeProductSkeleton from '../skeleton/HomeProductSkeleton';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSelector } from 'react-redux';
import icon from '../../assets/flash.png';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.bg ? props.bg || 'white' : props.theme.bg_primary};
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  .link {
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    color: black;
    :hover {
      text-decoration: underline;
    }
  }
`;
const Image = styled.img`
  object-fit: contain;
  max-height: 30px;
`;
const ProductContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.bg_white};
  overflow: auto;
  gap: 0.5rem;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  /* height: 200px; */
  /* @media screen and (min-width: 768px) {
    height: 230px;
  } */
  ::-webkit-scrollbar {
    height: 0;
  }
`;
const Title = styled.h3`
  text-transform: capitalize;
`;
const ProductList = ({
  noTitleBg,
  showless,
  title,
  flash,
  single,
  category,
  showScroll,
  showFav,
}) => {
  const [products, setProducts] = useState([]);
  const user = useSelector(state => state.user.currentUser);
  const getProducts = useCallback(async () => {
    try {
      const products = await appwriteService.filterProducts(
        { category },
        user?.email
      );
      setProducts(products);
    } catch (error) {
      console.log(error);
    }
  }, [category, user]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Wrapper>
      <HeaderContainer bg={noTitleBg}>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          {flash && <Image src={icon} />}
          <Title>{title || 'default title'}</Title>
        </div>
        {!showless && (
          <Link className='link'>
            see all
            <KeyboardArrowRight />
          </Link>
        )}
      </HeaderContainer>

      {products.length === 0 ? (
        <HomeProductSkeleton />
      ) : (
        <ProductContainer className={`${showScroll && 'scroll'}`}>
          {products.map(item => (
            <Product
              key={item.$id}
              {...item}
              showFav={showFav}
              fixed
              single={single}
              category={category}
              to={
                single
                  ? `/category/${item.category}/${item.$id}`
                  : `/category?category=${category}`
              }
            />
          ))}
        </ProductContainer>
      )}
    </Wrapper>
  );
};

export default ProductList;

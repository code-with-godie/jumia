import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Product from '../../components/products/Product';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSelector } from 'react-redux';
import HomeProductSkeleton from '../../components/skeleton/HomeProductSkeleton';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 100%;
  background-color: white;
`;
const Title = styled.h3`
  padding: 0.5rem;
  font-weight: 300;
  &.small {
    font-size: 1rem;
    font-weight: 100;
  }
`;
const Empty = styled.div`
  display: grid;
  flex: 1;
  place-content: center;
  gap: 0.5rem;
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

const Wrapper = styled.div`
  height: 100%;
  flex: 3;
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  align-content: flex-start;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
const Recent = () => {
  const [viewed, setViewed] = useState([]);
  const { currentUser: user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const getProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await appwriteService.getRecentProducts(user?.email);
      setViewed(data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, [user]);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading)
    return (
      <Container>
        <HomeProductSkeleton />
      </Container>
    );
  if (error)
    return (
      <Container>
        <p> {error} </p>
      </Container>
    );

  if (viewed.length === 0) {
    return (
      <Container>
        <Empty>
          <Title>you have not viewed any products yet</Title>
          <Title className='small'>products you view shall be shown here</Title>
          <ShopNow onClick={() => navigate('/')}>view products</ShopNow>
        </Empty>
      </Container>
    );
  }
  return (
    <Container>
      <Wrapper>
        {viewed.map(item => (
          <Product
            key={item.$id}
            {...item}
            category={item.category}
            showFav
            to={`/category/${item.category}/${item.$id}`}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Recent;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex: 0 0 120px;
  cursor: pointer;
  height: 100%;
  background: url(${props => props.url}) no-repeat center;
  background-size: cover;
  display: flex;
  border-radius: 0.5rem;
  align-items: flex-end;
  transition: 50ms;
  :hover {
    transform: scale(1.05);
  }
`;
const TitleContainer = styled.div`
  background: #0000006a;
  padding: 0.3rem;
  border-radius: 0 0 0.5rem 0.5rem;
  flex: 1;
`;
const Title = styled.p`
  color: white;
  text-align: center;
  font-size: 0.9rem;
`;
const CategoryProduct = ({ images, category }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => navigate(`/category?category=${category}`)}
      url={images[0]}
    >
      <TitleContainer>
        <Title>
          {' '}
          {category.length > 15
            ? `${category.substring(0, 15)}...`
            : category}{' '}
        </Title>
      </TitleContainer>
    </Container>
  );
};

export default CategoryProduct;

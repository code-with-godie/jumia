import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSearchParams } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 1200px;
  }
`;
const ProductContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.bg_white};
  overflow: auto;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  display: flex;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    height: 0;
  }
`;
const Title = styled.h3`
  text-transform: capitalize;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fee2cc;
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
`;
const ProductWrapper = styled.div`
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 100ms;
  position: relative;
  flex-shrink: 0;
  gap: 0.5rem;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  background-color: #f5f5f5;
  width: 200px;
  height: 100px;
  border-radius: 0.5rem;
`;
const Image = styled.img`
  max-width: 100%;
  height: 100%;
`;
const Description = styled.p`
  overflow: hidden;
`;
const CategoryTitles = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = category => {
    setSearchParams({ category });
  };
  const getTitles = async () => {
    try {
      setLoading(true);
      const titles = await appwriteService.getUniqueCategory();
      console.log(titles);
      setCategories(titles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTitles();
  }, []);
  if (loading) {
    return (
      <Wrapper>
        <p>loading</p>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <HeaderContainer>
        <Title>shop by category</Title>
      </HeaderContainer>
      <ProductContainer>
        {categories.map(item => (
          <Product
            handleClick={handleClick}
            key={item.$id}
            {...item}
          />
        ))}
      </ProductContainer>
    </Wrapper>
  );
};
const Product = ({ images, category, handleClick }) => {
  return (
    <ProductWrapper onClick={() => handleClick(category)}>
      <ImageContainer>
        <Image src={images[0]} />
      </ImageContainer>
      <Description> {category} </Description>
    </ProductWrapper>
  );
};

export default CategoryTitles;

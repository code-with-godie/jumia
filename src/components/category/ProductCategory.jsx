import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryProduct from './CategoryProduct';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { appwriteService } from '../../appWrite/appwriteService';

const Wrapper = styled.div`
  width: 100%;
  flex: 0 0 200px;
  background-color: white;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  overflow: auto;
  height: 100%;
  ::-webkit-scrollbar {
    height: 0;
  }
`;
const Arrow = styled.div`
  padding: 0.3rem;
  background-color: #80808064;
  display: flex;
  align-items: center;
  padding: 0.3rem;
  border-radius: 50%;
  margin: 0.5rem;
  cursor: pointer;
  .icon {
    font-size: 2rem;
  }
`;
const ProductCategory = () => {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const products = await appwriteService.getUniqueCategory();
      setCategories(products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <Wrapper>
      <Arrow>
        <KeyboardArrowLeft className='icon' />
      </Arrow>
      <Container>
        {categories?.map(item => (
          <CategoryProduct
            {...item}
            key={item.$id}
          />
        ))}
      </Container>
      <Arrow>
        <KeyboardArrowRight className='icon' />
      </Arrow>
    </Wrapper>
  );
};

export default ProductCategory;

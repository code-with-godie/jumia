import { ChevronRight } from '@mui/icons-material';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Product from '../products/Product';
import CategoryFilters from './CategoryFilters';
import { appwriteService } from '../../appWrite/appwriteService';
const Wrapper = styled.section`
  flex: 1;
  width: 100%;
  overflow: auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: flex-start;
  .link {
    text-decoration: none;
    color: ${props => props.theme.gray_1};
  }
  .icon {
    color: ${props => props.theme.gray_1};
  }
`;
const ProductContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow: auto;
  flex: 1;
`;
const Container = styled.div`
  height: 100%;
  flex: 3;
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
const CategoryList = () => {
  const [category, setCategory] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getCategoryProducts = useCallback(async () => {
    try {
      setLoading(true);
      const products = await appwriteService.getCategoryProducts(category);
      setProducts(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [category]);
  useEffect(() => {
    setCategory(searchParams.get('category'));
  }, [searchParams]);
  useEffect(() => {
    category && getCategoryProducts();
  }, [category, getCategoryProducts]);
  return (
    <Wrapper>
      <Header>
        <Link
          className='link'
          to='/'
        >
          Home
        </Link>
        <ChevronRight className='icon' />
        <Link
          to={`/category?category=${category}`}
          className='link'
        >
          {' '}
          {category}{' '}
        </Link>
      </Header>
      <ProductContainer>
        <CategoryFilters />
        {loading ? (
          <p>loading</p>
        ) : (
          <Container>
            {products.map(item => (
              <Product
                key={item.$id}
                {...item}
                category={category}
                showFav
                to={`/category/${category}/${item.$id}`}
              />
            ))}
          </Container>
        )}
      </ProductContainer>
    </Wrapper>
  );
};

export default CategoryList;

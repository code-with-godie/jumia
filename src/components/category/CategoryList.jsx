import React from 'react';
import styled from 'styled-components';
import Product from '../products/Product';
const Wrapper = styled.section`
  flex: 3;
  width: 100%;
`;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  align-content: flex-start;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
const CategoryList = ({ products, category }) => {
  return (
    <Wrapper>
      <Container>
        {products.map(item => (
          <Product
            key={item.$id}
            {...item}
            category={category}
            showFav
            to={`/category/${category || item.category}/${item.$id}`}
          />
        ))}
      </Container>
    </Wrapper>
  );
};

export default CategoryList;

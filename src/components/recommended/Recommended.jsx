import React from 'react';
import styled from 'styled-components';
import ProductList from '../products/ProductList';
const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  background-color: ${props => props.theme.bg_white};
`;
const Recommended = ({ noTitleBg }) => {
  return (
    <Wrapper>
      <ProductList
        showFav
        noTitleBg={noTitleBg}
        category='recommended'
        title='recommended for you'
      />
    </Wrapper>
  );
};

export default Recommended;

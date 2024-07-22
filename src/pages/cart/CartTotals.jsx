import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  max-width: 200px;
  background-color: ${props => props.theme.bg_white};
`;
const CartTotals = () => {
  return <Container>CartTotals</Container>;
};

export default CartTotals;

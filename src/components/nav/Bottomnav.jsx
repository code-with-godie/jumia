import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: fixed;
  z-index: 100000000;
  bottom: 0;
  width: 100vw;
  padding: 0.5rem;
  background-color: red;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Bottomnav = () => {
  return <Container>Bottomnav</Container>;
};

export default Bottomnav;

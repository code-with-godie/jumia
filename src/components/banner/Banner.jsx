import React from 'react';
import styled from 'styled-components';
import url from '../../assets/banner.gif';
const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg_primary};
`;
const Image = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: contain;
  @media screen and (max-width: 768px) {
    min-height: 50px;
  }
`;
const Banner = () => {
  return (
    <Container>
      <Image
        src={url}
        alt='banner image'
      />
    </Container>
  );
};

export default Banner;

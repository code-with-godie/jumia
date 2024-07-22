import React from 'react';
import image from '../../assets/loading.png';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 150px;
  width: 100% !important;
  overflow: auto;
  align-self: stretch;
  ::-webkit-scrollbar {
    height: 0;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`;
const ImageContainer = styled.div`
  flex: 0 0 150px;
  display: grid;
  place-content: center;
  background-color: #d4d4d6;
  @media screen and (min-width: 768px) {
    flex: 0 0 200px;
  }
`;
const Image = styled.img``;
const HomeProductSkeleton = () => {
  return (
    <Container>
      {Array(10).fill(
        <ImageContainer>
          {' '}
          <Image src={image} />{' '}
        </ImageContainer>
      )}
    </Container>
  );
};

export default HomeProductSkeleton;

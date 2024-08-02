import React from 'react';
import image from '../../assets/loading.png';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 0.5rem;
  height: 100%;
  flex: 3;
  overflow: auto;
  ::-webkit-scrollbar {
    height: 0;
  }
  @media screen and (min-width: 768px) {
    height: 200px;
  }
`;
const ImageContainer = styled.div`
  display: grid;
  background-color: #d4d4d6;
  place-content: center;
  width: 150px;
  height: 200px;
  animation: animate ease-in-out 300ms alternate-reverse;
`;
const Image = styled.img``;
const HomeProductSkeleton = () => {
  return (
    <Container>
      {Array(20).fill(
        <ImageContainer>
          {' '}
          <Image src={image} />{' '}
        </ImageContainer>
      )}
    </Container>
  );
};

export default HomeProductSkeleton;

import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
  width: 100%;
  height: 100%;
  /* min-height: 300px; */
  object-fit: cover;
`;
const BannerSlide = ({ url }) => {
  return <Container src={url}></Container>;
};

export default BannerSlide;

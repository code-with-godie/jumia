import React, { useState } from 'react';
import styled from 'styled-components';
import BannerLinks from './BannerLinks';
import BannerAdvert from './BannerAdvert';
import BannerSales from './BannerSales';

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    height: 470px;
  }
`;
const HomeBanner = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <Container>
      <BannerLinks setShowOverlay={setShowOverlay} />
      <BannerSales showOverlay={showOverlay} />
      <BannerAdvert />
    </Container>
  );
};

export default HomeBanner;

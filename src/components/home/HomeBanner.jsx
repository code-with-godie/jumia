import React, { useState } from 'react';
import styled from 'styled-components';
import BannerLinks from './BannerLinks';
import BannerAdvert from './BannerAdvert';
import BannerSales from './BannerSales';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 0.5rem;
  @media screen and (min-width: 768px) {
    height: 420px;
  }
`;
const HomeBanner = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <Wrapper>
      <Container>
        <BannerLinks setShowOverlay={setShowOverlay} />
        <BannerSales showOverlay={showOverlay} />
        <BannerAdvert />
      </Container>
    </Wrapper>
  );
};

export default HomeBanner;

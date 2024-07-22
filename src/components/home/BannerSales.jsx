import React from 'react';
import styled from 'styled-components';
import BannerOverlay from './BannerOverlay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../../assets/slide1.gif';
import slide2 from '../../assets/slide2.gif';
import slide3 from '../../assets/slide3.png';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.gif';
import slide7 from '../../assets/slide7.gif';
import slide8 from '../../assets/slide8.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import BannerSlide from './BannerSlide';
import BannerSlideControl from './BannerSlideControl';

const Container = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  .swiper {
    width: 100%;
    max-width: 800px;
    height: 100%;
    position: relative;
  }
  /* change the color of the swiper pagination dots */
  .swiper-pagination-bullet-active {
    background-color: #ff9900 !important;
  }
`;

const BannerSales = ({ showOverlay }) => {
  return (
    <Container>
      <Carousel
        infiniteLoop
        autoPlay
      >
        <BannerSlide url={slide1} />
        <BannerSlide url={slide2} />
        <BannerSlide url={slide3} />
        <BannerSlide url={slide4} />
        <BannerSlide url={slide5} />
        <BannerSlide url={slide6} />
        <BannerSlide url={slide8} />
        <BannerSlide url={slide7} />
      </Carousel>
      {showOverlay && <BannerOverlay />}
    </Container>
  );
};

export default BannerSales;

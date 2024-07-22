import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Toplink from '../../components/nav/Toplink';
import Topnav from '../../components/nav/Topnav';
import Footer from '../../components/footer/Footer';
import Bottomnav from '../../components/nav/Bottomnav';
import Drawer from '../../components/nav/Drawer';
import { useSelector } from 'react-redux';
const Wrapper = styled.main`
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
`;
const Container = styled.section`
  overflow: auto;
  width: 100%;
  max-width: 1200px;
`;
const Layout = () => {
  const blackList = ['/account', '/cart'];
  const [showBanner, setShowBanner] = useState(true);
  const location = useLocation();
  const { showDrawer } = useSelector(state => state.app);

  useEffect(() => {
    blackList?.forEach(item => {
      if (location.pathname.startsWith(item)) {
        setShowBanner(false);
      }
    });
  }, [location, blackList]);
  return (
    <Wrapper>
      <Container>
        {showBanner && <Banner />}
        <Toplink />
        <Topnav />
        <Outlet />
        <Footer />
      </Container>
      <Bottomnav />
      {showDrawer && <Drawer />}
    </Wrapper>
  );
};

export default Layout;

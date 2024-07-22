import React from 'react';
import styled from 'styled-components';
import AccountSidenav from '../../components/account/AccountSidenav';
import { Outlet } from 'react-router-dom';

const Container = styled.section`
  /* height: 100%; */
  overflow: auto;
  background-color: ${props => props.theme.bg_primary_2};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  max-width: 1150px;
  flex: 1;
  height: 83vh;
  overflow: auto;
  display: flex;
  gap: 0.5rem;
`;
const Content = styled.div`
  flex: 1;
`;
const AccountLayout = () => {
  return (
    <Container>
      <Wrapper>
        <AccountSidenav />
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default AccountLayout;

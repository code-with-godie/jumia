import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.main`
  height: 100vh;
  overflow: auto;
`;
const ProtectedLayout = () => {
  const user = useSelector(state => state.user.currentUser);
  return <Container>{user ? <Outlet /> : <Navigate to='/login' />}</Container>;
};

export default ProtectedLayout;

import { Close, Dialpad } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { accountsLinks, categoriesLink } from '../../data/data';
import { useNavigate } from 'react-router-dom';
import { closeDrawer } from '../../context/appSlice';
import { authService } from '../../appWrite/auth';
import { logout } from '../../context/userSlice';
const Container = styled.div`
  position: fixed;
  z-index: 100000000;
  left: 0;
  width: 100vw;
  max-width: 300px;
  padding: 0.5rem;
  height: 100vh;
  background-color: white;
  transform: translateX(-100%);
  transition: transform 300ms ease-in-out;
  overflow: auto;
  &.show {
    transform: translateX(0);
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 0.5rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  :hover {
    background-color: ${props => props.theme.bg_primary_2};
  }
`;
const Title = styled.h2`
  flex: 1;
`;
const Label = styled.p`
  flex: 1;
`;
const CategoryTitle = styled.p`
  flex: 1;
  text-transform: uppercase;
  color: #bcbcbc;
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  text-transform: uppercase;
  border: none;
  flex: 1;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.2rem;
`;
const Drawer = () => {
  const { showDrawer } = useSelector(state => state.app);
  const { currentUser: user } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = to => {
    navigate(to);
    dispatch(closeDrawer());
  };
  const handleLogout = () => {
    authService.logout().then(res => {
      dispatch(logout());
    });
    dispatch(closeDrawer());
  };
  return (
    <Container className={showDrawer && 'show'}>
      <ItemWrapper>
        <Item>
          <IconButton onClick={() => dispatch(closeDrawer())}>
            {' '}
            <Close />{' '}
          </IconButton>
          <Title>JUMIA</Title>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <CategoryTitle>NEED HELP</CategoryTitle>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <CategoryTitle>my jumia account</CategoryTitle>
        </Item>
        {accountsLinks.map((item, index) => (
          <Item
            key={index}
            onClick={() => handleNavigate(item?.to)}
          >
            <IconButton>{item?.icon}</IconButton> <Label> {item?.lable} </Label>{' '}
          </Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <CategoryTitle>our categories</CategoryTitle>
        </Item>
        {categoriesLink.map((item, index) => (
          <Item
            key={index}
            onClick={() => handleNavigate(item?.to)}
          >
            <IconButton>{item?.icon}</IconButton> <Label> {item?.lable} </Label>{' '}
          </Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        {user ? (
          <Item onClick={handleLogout}>
            <Button>logout</Button>
          </Item>
        ) : (
          <Item onClick={() => handleNavigate('/login')}>
            <Button>login</Button>
          </Item>
        )}
      </ItemWrapper>
    </Container>
  );
};

export default Drawer;

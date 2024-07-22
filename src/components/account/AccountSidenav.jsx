import {
  FavoriteBorderOutlined,
  Person2Outlined,
  Reviews,
} from '@mui/icons-material';
import React from 'react';
import { BiEnvelope } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { authService } from '../../appWrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../../context/userSlice';
const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    max-width: 300px;
    background-color: ${props => props.theme.bg_white};
    display: flex;
    flex-direction: column;
    overflow: auto;
    &.wrapper {
      border-bottom: 1px solid ${props => props.theme.gray_1};
    }
    &.container {
      flex: 1;
    }
  }
`;
const Item = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  .icon {
    font-size: 1.7rem;
  }
  :hover {
    background-color: ${props => props.theme.bg_primary_2};
  }
`;
const ItemLabel = styled.p`
  color: ${props => props.theme.text_black};
  flex: 1;
  font-weight: 100;
  text-transform: capitalize;
  font-size: 1rem;
`;
const Logout = styled.button`
  color: ${props => props.theme.text_primary};
  background: transparent;
  border: none;
  outline: none;
  justify-content: flex-end;
  padding: 0.5rem;
  cursor: pointer;
  font-size: large;
  text-transform: capitalize;
`;
const AccountSidenav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    authService.logout().then(res => {
      dispatch(logout());
    });
  };
  return (
    <Container className='container'>
      <Container className='wrapper'>
        <Item onClick={() => navigate('/account')}>
          <Person2Outlined className='icon' />
          <ItemLabel>jumia account</ItemLabel>
        </Item>
        <Item onClick={() => navigate('/account/orders')}>
          <Person2Outlined className='icon' />

          <ItemLabel>orders</ItemLabel>
        </Item>
        <Item onClick={() => navigate('/account/inbox')}>
          <BiEnvelope className='icon' />
          <ItemLabel>inbox</ItemLabel>
        </Item>
        <Item onClick={() => navigate('/account/saved')}>
          <FavoriteBorderOutlined className='icon' />
          <ItemLabel>saved items</ItemLabel>
        </Item>
        <Item onClick={() => navigate('/account/recently-viewed')}>
          <FavoriteBorderOutlined className='icon' />
          <ItemLabel>recently viewed</ItemLabel>
        </Item>
        <Item>
          <Reviews className='icon' />
          <ItemLabel>pending reviews</ItemLabel>
        </Item>
        <Item>
          <Reviews className='icon' />

          <ItemLabel>vouchers</ItemLabel>
        </Item>
        <Item>
          <FavoriteBorderOutlined className='icon' />

          <ItemLabel>followed sellers</ItemLabel>
        </Item>
      </Container>
      <Container className='wrapper'>
        <Item>
          <FavoriteBorderOutlined className='icon' />
          <ItemLabel>address management</ItemLabel>
        </Item>
        <Item>
          <FavoriteBorderOutlined className='icon' />
          <ItemLabel>address book</ItemLabel>
        </Item>
        <Item>
          <FavoriteBorderOutlined className='icon' />
          <ItemLabel>newsLetter prefenrences</ItemLabel>
        </Item>
      </Container>
      <Logout onClick={handleLogout}>logout</Logout>
    </Container>
  );
};

export default AccountSidenav;

import { FavoriteBorderOutlined, Person2Outlined } from '@mui/icons-material';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../../context/userSlice';
import { authService } from '../../appWrite/auth';
import { closeAccountModel } from '../../context/appSlice';

const Container = styled.div`
  position: absolute;
  z-index: 100000;
  top: 200%;
  border-radius: 0.3rem;
  background-color: ${props => props.theme.bg_white};
  width: 200px;
  box-shadow: 0 0 5px 2px #f4f4f4;
  display: none;
  transition: visibility 100ms ease-in-out;
  &.show {
    display: block;
  }
  @media screen and (max-width: 768px) {
    display: none;
    &.show {
      display: none;
    }
  }
`;
const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  text-transform: uppercase;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 0.2rem;
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
  &:first-child {
    padding: 1rem 0.5rem;
    display: grid;
    place-content: center;
    :hover {
      background: none;
    }
  }
`;
const ItemLabel = styled.p`
  color: ${props => props.theme.text_black};
  flex: 1;
  font-weight: 100;
  text-transform: capitalize;
  font-size: 1rem;
`;

const AccountModel = () => {
  const ref = useRef();
  const currentUser = useSelector(state => state.user.currentUser);
  const showModel = useSelector(state => state.app.showModel);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = to => {
    dispatch(closeAccountModel());
    navigate(to);
  };
  const handleButton = () => {
    if (currentUser) {
      authService.logout().then(() => {
        dispatch(logout());
      });
      return;
    }
    navigate('/login');
  };
  useEffect(() => {
    if (showModel) {
      ref.current?.classList.add('show');
    } else {
      ref.current?.classList.remove('show');
    }
    console.log('show', showModel);
  }, [showModel]);
  return (
    <Container ref={ref}>
      <Item>
        <Button onClick={handleButton}>
          {' '}
          {currentUser ? 'sign out' : 'sign in'}{' '}
        </Button>
      </Item>
      <Item onClick={() => handleNavigate('/account')}>
        <Person2Outlined className='icon' />
        <ItemLabel>my account</ItemLabel>
      </Item>
      <Item onClick={() => handleNavigate('/account/orders')}>
        <FavoriteBorderOutlined className='icon' />
        <ItemLabel>orders</ItemLabel>
      </Item>
      <Item onClick={() => handleNavigate('/account/saved')}>
        <FavoriteBorderOutlined className='icon' />
        <ItemLabel>saved items</ItemLabel>
      </Item>
    </Container>
  );
};

export default AccountModel;

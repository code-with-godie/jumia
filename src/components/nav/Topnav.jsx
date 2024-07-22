import styled from 'styled-components';
import url from '../../assets/logo.png';
import { BsPerson } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Badge, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { BsPersonFillCheck } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import AccountModel from './AccountModel';
import { openDrawer, toggleAccountModel } from '../../context/appSlice';
const Wrapper = styled.nav`
  background-color: ${props => props.theme.bg_white};

  display: flex;
  padding: 1rem;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  .bars {
    display: none;
  }
  @media screen and (max-width: 768px) {
    flex: 1;
    .bars {
      display: block;
      color: black;
    }
  }
`;
const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 1.5rem;
  &.mobile {
    display: none;
  }
  @media screen and (max-width: 768px) {
    display: none;
    &.mobile {
      display: flex;
      border-radius: 1rem;
    }
  }
`;
const ControlsContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.5rem;
`;
const LogoTitle = styled.h1`
  text-transform: uppercase;
  font-size: 2rem;
  color: ${props => props.theme.text_black};
  cursor: pointer;
`;
const Logo = styled.img`
  max-width: 20px;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    max-width: 30px;
  }
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: 0.5rem;
  .icon {
    font-size: 1.7rem;
    color: ${props => props.theme.text_black};
    @media screen and (max-width: 768px) {
      &.arrow,
      &.help {
        display: none;
      }
    }
  }
`;
const ControlLabel = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.text_black};
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const SearchInput = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  min-width: 0 !important;
  font-weight: 100 !important;
  background: transparent;
  flex: 1;
  ::placeholder {
    color: ${props => props.theme.gray_1};
  }
`;
const SearchWrapper = styled.div`
  flex: 1;
  border: 1px solid ${props => props.theme.gray_1};
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    border-radius: 2rem;
  }
`;
const SearchButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  text-transform: uppercase;
  border: none;
  font-size: 1rem;
  box-shadow: 0 0 5px 2px #cfcfcf;
  border-radius: 0.2rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Counter = styled.span`
  font-size: 1rem;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
  background-color: ${props => props.theme.btn_primary};
  display: grid;
  place-content: center;
  position: absolute;
  top: 4px;
  right: 4px;
  color: white;
`;
const Topnav = () => {
  const user = useSelector(state => state.user.currentUser);
  const { amount } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <IconButton
            className='bars'
            onClick={() => dispatch(openDrawer())}
          >
            <FaBars />
          </IconButton>
          <LogoTitle onClick={() => navigate('/')}>jumia</LogoTitle>
          <Logo
            onClick={() => navigate('/')}
            src={url}
            alt='logo'
          />
        </LogoContainer>
        <SearchContainer>
          <SearchWrapper>
            <IconButton>
              <Search />
            </IconButton>
            <SearchInput placeholder='search products, brand and categories' />
          </SearchWrapper>
          <SearchButton>search</SearchButton>
        </SearchContainer>
        <ControlsContainer>
          <Control onClick={() => dispatch(toggleAccountModel())}>
            {user ? (
              <>
                <BsPersonFillCheck className='icon' />
                <ControlLabel> Hi, {user.name} </ControlLabel>
              </>
            ) : (
              <>
                <BsPerson className='icon' />
                <ControlLabel> Account </ControlLabel>
              </>
            )}
            <KeyboardArrowDown className='icon arrow' />
            <AccountModel />
          </Control>
          <Control>
            <BiHelpCircle className='icon help' />
            <ControlLabel>Help</ControlLabel>
            <KeyboardArrowDown className='icon arrow' />
          </Control>
          <Control onClick={() => navigate('/cart')}>
            <Badge badgeContent={<Counter> {amount} </Counter>}>
              <FiShoppingCart className='icon' />
            </Badge>
            <ControlLabel>Cart</ControlLabel>
          </Control>
        </ControlsContainer>
      </Container>
      <SearchContainer className='mobile'>
        <SearchWrapper>
          <IconButton>
            <Search />
          </IconButton>
          <SearchInput placeholder='search products, brand and cateofries' />
        </SearchWrapper>
      </SearchContainer>
    </Wrapper>
  );
};

export default Topnav;

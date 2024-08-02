import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CiApple } from 'react-icons/ci';
const Container = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    height: 100%;
    flex: 0 0 200px;
    background-color: ${props => props.theme.bg_white};
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.3rem;
    .link {
      display: flex;
      gap: 0.3rem;
      align-items: center;
      text-decoration: none;
      color: ${props => props.theme.text_black};

      :hover {
        text-decoration: underline;
      }
      .icon {
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
`;
const Label = styled.p`
  font-size: 0.8rem;
  font-weight: 200;
  text-transform: capitalize;
`;
const BannerLinks = () => {
  // const showOverlay = () => {
  //   setShowOverlay(true);
  // };
  // const hideOverlay = () => {
  //   setShowOverlay(false);
  // };
  return (
    <Container>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>supermarket</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>health and beauty</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>home and office</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>appliances</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>phone and tablet</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>computing</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>Tv and audio</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>Fashion</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>gaming</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>baby products</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>sporting products</Label>
      </Link>
      <Link className='link'>
        <CiApple className='icon' />
        <Label>other categories</Label>
      </Link>
    </Container>
  );
};

export default BannerLinks;

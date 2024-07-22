import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg_primary_2};
  padding: 0.3rem;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  max-width: 1200px;
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.5rem;
`;
const LinksContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;
const Image = styled.img`
  width: 15px;
  height: auto;
  object-fit: contain;
  &.big {
    width: 50px;
  }
`;
const LogoLabel = styled.p`
  font-size: 0.7rem;
  color: ${props => props.theme.text_primary};
`;

const Toplink = () => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <Link>
            {' '}
            <Image src={logo} />{' '}
          </Link>
          <LogoLabel>Sell on jumia</LogoLabel>
        </LogoContainer>
        <LinksContainer>
          <Link>
            {' '}
            <Image src={logo} />{' '}
          </Link>
          <LogoLabel>FOOD</LogoLabel>
          <Link>
            {' '}
            <Image src={logo} />{' '}
          </Link>
          <LogoLabel>PAY</LogoLabel>
        </LinksContainer>
      </Container>
    </Wrapper>
  );
};

export default Toplink;

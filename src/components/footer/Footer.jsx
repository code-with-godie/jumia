import React from 'react';
import styled from 'styled-components';
const Container = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.5rem;
  background-color: #535357;
`;
const FooterItem = styled.div`
  padding: 1rem;
`;
const TextWrapper = styled.div`
  color: white;
`;
const TextTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 1.2rem;
`;
const Text = styled.p`
  color: white;
  text-transform: capitalize;
  padding: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <Container>
      <FooterItem>
        <TextTitle>Need Help?</TextTitle>
        <TextWrapper>
          <Text>Chat with us</Text>
          <Text>Help center</Text>
          <Text>Contact us</Text>
        </TextWrapper>
      </FooterItem>
      <FooterItem>
        <TextTitle>About jumia</TextTitle>
        <TextWrapper>
          <Text>About us</Text>
          <Text>return and refund policy</Text>
          <Text>jumia career</Text>
          <Text>jumia express</Text>
          <Text>terms and conditions</Text>
          <Text>store credit terms and conditions</Text>
          <Text>privacy policy</Text>
          <Text>cookies policy</Text>
          <Text>flash sales</Text>
          <Text>jumia globals</Text>
        </TextWrapper>
      </FooterItem>
      <FooterItem>
        <TextTitle>make money with junia</TextTitle>
        <TextWrapper>
          <Text>sell on jumia</Text>
          <Text>vender hub</Text>
          <Text>become a sales consultant</Text>
          <Text>become a logistic service partner</Text>
          <Text>jumia city partner program</Text>
        </TextWrapper>
      </FooterItem>
      <FooterItem>
        <TextTitle>jumia international</TextTitle>
        <TextWrapper>
          <Text>algeria</Text>
          <Text>ivory coast</Text>
          <Text>eqypt</Text>
          <Text>ghana</Text>
          <Text>morocco</Text>
          <Text>nigeria</Text>
          <Text>senegal</Text>
          <Text>tunisia</Text>
          <Text>uganda</Text>
          <Text>zando</Text>
        </TextWrapper>
      </FooterItem>
    </Container>
  );
};

export default Footer;

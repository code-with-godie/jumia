import React from 'react';
import styled from 'styled-components';
import seller from '../../assets/sellerIfo.png';
import desc from '../../assets/sellerDesc.png';
import chat from '../../assets/chat.png';
const Container = styled.div``;
const ItemWrapper = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 0.5rem;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
`;
const Title = styled.h3`
  flex: 1;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1rem;
`;
const Company = styled.p`
  flex: 1;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 0.9rem;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;
const DescriptionInformation = () => {
  return (
    <Container>
      <ItemWrapper>
        <Item>
          <Title>seller information</Title>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <Company>waazilishi</Company>
        </Item>
        <Item>
          <Title>
            <Image src={seller} />
          </Title>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <Title>
            <Image src={desc} />
          </Title>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <Title>
            <Image src={chat} />
          </Title>
        </Item>
      </ItemWrapper>
    </Container>
  );
};

export default DescriptionInformation;

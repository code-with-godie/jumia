import React from 'react';
import styled from 'styled-components';
import ad from '../../assets/ad.gif';
import payment from '../../assets/payment.png';
import quiz from '../../assets/quiz.png';
import returns from '../../assets/return.png';
import { TbHelp } from 'react-icons/tb';
const Container = styled.div`
  display: none;
  @media screen and (min-width: 1024px) {
    height: 100%;
    flex: 0 0 200px;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;
const Top = styled.div`
  flex: 1;
  background-color: ${props => props.theme.bg_white};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Bottom = styled.div`
  flex: 1;
`;
const Advert = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  .icon {
    font-size: 2rem;
    color: ${props => props.theme.bg_primary};
    font-weight: 600;
  }
`;
const ControlImage = styled.img`
  max-width: 30px;
  height: auto;
  object-fit: contain;
`;
const ControlLabel = styled.p`
  color: ${props => props.theme.text_black};
  text-transform: uppercase;
`;
const ControlLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const ControlDescription = styled.p`
  text-transform: capitalize;
  color: ${props => props.theme.text_black};
  font-size: 0.7rem;
`;
const BannerAdvert = () => {
  return (
    <Container>
      <Top>
        <Control>
          <ControlImage src={quiz} />
          <ControlLabelWrapper>
            <ControlLabel>help center</ControlLabel>
            <ControlDescription>guide to customer care</ControlDescription>
          </ControlLabelWrapper>
        </Control>
        <Control>
          <ControlImage src={returns} />
          <ControlLabelWrapper>
            <ControlLabel>easy return</ControlLabel>
            <ControlDescription>quick refund</ControlDescription>
          </ControlLabelWrapper>
        </Control>
        <Control>
          <ControlImage src={payment} />
          <ControlLabelWrapper>
            <ControlLabel>sell on jumia</ControlLabel>
            <ControlDescription>millions of visitors</ControlDescription>
          </ControlLabelWrapper>
        </Control>
      </Top>
      <Bottom>
        <Advert
          src={ad}
          alt='advert'
        />
      </Bottom>
    </Container>
  );
};

export default BannerAdvert;

import React from 'react';
import styled from 'styled-components';
import seller from '../../assets/sellerIfo.png';
import desc from '../../assets/sellerDesc.png';
import chat from '../../assets/chat.png';
import { useSelector } from 'react-redux';
import { appwriteService } from '../../appWrite/appwriteService';
import { useNavigate } from 'react-router-dom';
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
const DescriptionInformation = ({ user: postUser, brand }) => {
  const { currentUser: user } = useSelector(state => state.user);
  const navigate = useNavigate();
  const createRoom = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      await appwriteService.createRoom([user?.$id, postUser?.$id]);
      navigate('/account/inbox');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <ItemWrapper>
        <Item>
          <Title>seller information</Title>
        </Item>
      </ItemWrapper>
      <ItemWrapper>
        <Item>
          <Company> {brand} </Company>
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
      {user?.$id !== postUser?.$id && (
        <ItemWrapper>
          <Item onClick={createRoom}>
            <Title>
              <Image src={chat} />
            </Title>
          </Item>
        </ItemWrapper>
      )}
    </Container>
  );
};

export default DescriptionInformation;

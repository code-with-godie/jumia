import React, { useState } from 'react';
import styled from 'styled-components';
import Rooms from './Rooms';
import Chats from './Chats';
const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  height: 100%;
`;
const Left = styled.div`
  flex: 1;
  overflow: auto;
  @media screen and (max-width: 768px) {
    &.show {
      display: none;
    }
  }
`;
const Right = styled.div`
  flex: 1;
  overflow: auto;
`;
const NoConversation = styled.div`
  flex: 1;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
const Messeger = ({ rooms }) => {
  const [conversation, setConversation] = useState(false);
  return (
    <Container>
      <Left className={conversation && 'show'}>
        <Rooms
          rooms={rooms}
          setConversation={setConversation}
        />
      </Left>
      {conversation ? (
        <Right>
          <Chats
            conversation={conversation}
            setConversation={setConversation}
          />
        </Right>
      ) : (
        <NoConversation>no chats yet</NoConversation>
      )}
    </Container>
  );
};

export default Messeger;

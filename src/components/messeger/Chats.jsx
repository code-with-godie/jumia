import { Close, Send } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSelector } from 'react-redux';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  background-color: #aaaaaa1b;
`;
const ChatsContainer = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 0.5rem;
`;
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;
const UserName = styled.h4``;
const Footer = styled.form`
  background-color: #aaaaaa1b;
  padding: 0.5rem;
`;
const Messege = styled.p`
  padding: 0.5rem;
  border-radius: 0.3rem;
  max-width: 50%;
  align-self: flex-start;
  background-color: #aaaaaa1b;
  &.mine {
    background-color: #0d0d0d60;
    align-self: flex-end;
    color: white;
  }
`;
const InputContainer = styled.div`
  background-color: #aaaaaa1b;
  display: flex;
  padding: 0.5rem;
  gap: 0.5rem;
`;
const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  flex: 1;
  color: inherit;
`;
const Button = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  :disabled {
    cursor: not-allowed;
    visibility: hidden;
  }
`;
const Chats = ({ setConversation, conversation }) => {
  const [disabled, setDisabled] = useState(true);
  const incomingChats = [...conversation?.messeges];
  const [chats, setChats] = useState(incomingChats);
  const { currentUser: user } = useSelector(state => state.user);
  const [text, setText] = useState('');
  const sendMessege = async () => {
    try {
      const msg = {
        body: text,
        senderID: user?.$id,
        receiverID: conversation?.receiverID,
        room: conversation?.roomID,
        roomID: conversation?.roomID,
      };
      const res = await appwriteService.sendMessage(msg);
      setChats(prev => [...prev, res]);
      setText('');
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    sendMessege();
  };

  useEffect(() => {
    if (text) setDisabled(false);
    else {
      setDisabled(true);
    }
  }, [text]);
  return (
    <Container>
      <Header>
        <ProfileContainer onClick={() => setConversation(false)}>
          <Avatar
            src={conversation?.avatar}
            alt={conversation?.username}
          />
          <UserName> {conversation?.username} </UserName>
        </ProfileContainer>
        <IconButton onClick={() => setConversation(null)}>
          <Close />
        </IconButton>
      </Header>
      {chats.length > 0 ? (
        <ChatsContainer>
          {chats.map(item => (
            <Messege
              className={item?.senderID === user?.$id && 'mine'}
              key={item?.$id}
            >
              {' '}
              {item?.body}{' '}
            </Messege>
          ))}
        </ChatsContainer>
      ) : (
        <ChatsContainer>
          <p>no messeges yet for this chat</p>
        </ChatsContainer>
      )}
      <Footer onSubmit={handleSubmit}>
        <InputContainer>
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder='write messege'
          />
          <Button disabled={disabled}>
            <Send />
          </Button>
        </InputContainer>
      </Footer>
    </Container>
  );
};

export default Chats;

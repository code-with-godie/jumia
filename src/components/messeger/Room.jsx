import { Avatar } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LoadingAnimation from '../loading/LoadingAnimation';
import { appwriteService } from '../../appWrite/appwriteService';
const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #aaaaaa28;
  cursor: pointer;
`;
const UserName = styled.h4``;
const Messege = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Room = ({ setConversation, members, last_messege, $id }) => {
  const { currentUser: user } = useSelector(state => state.user);
  const [room, setRoom] = useState(null);
  const [displayMessage, setDisplayMessage] = useState(last_messege);
  const otherUserID = members?.find(item => item !== user?.$id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getRooms = useCallback(
    async otherUserID => {
      try {
        setLoading(true);
        const data = await appwriteService.getUserByID(otherUserID);
        setRoom({
          username: data?.username,
          $id: data?.$id,
          avatar: user?.avatar,
        });
      } catch (error) {
        console.log(error);
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {
    getRooms(otherUserID);
  }, [getRooms, otherUserID]);
  if (loading)
    return (
      <Container>
        {' '}
        <LoadingAnimation />{' '}
      </Container>
    );
  if (loading)
    return (
      <Container>
        {' '}
        <p> {error} </p>{' '}
      </Container>
    );

  return (
    <Container
      onClick={() =>
        setConversation({
          ...room,
          roomID: $id,
          receiverID: otherUserID,
          setDisplayMessage,
        })
      }
    >
      <Avatar
        src={room?.avatar}
        alt={room?.username}
      />
      <UserName> {room?.username} </UserName>
      {displayMessage && <Messege> {displayMessage} </Messege>}
    </Container>
  );
};

export default Room;

import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import MessegerApp from '../../components/messeger/Messeger';
import source from '../../assets/emptyOrdes.png';
import { appwriteService } from '../../appWrite/appwriteService';
import { useSelector } from 'react-redux';
import LoadingAnimation from '../../components/loading/LoadingAnimation';
import { appwriteConfig } from '../../appWrite/appConfig';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 100%;
  background-color: white;
  overflow: auto;
`;
const Title = styled.h2`
  padding: 0.5rem;
  font-weight: 400;
  border-bottom: 1px solid #f1f1f2;
  /* padding-bottom:.5rem; */
`;
const ImageContainer = styled.div`
  display: grid;
  flex: 1;
  place-content: center;
  gap: 0.5rem;
`;
const Empty = styled.div`
  display: grid;
  flex: 1;
  place-content: center;
  gap: 0.5rem;
`;
const Messeger = () => {
  const [rooms, setRooms] = useState([]);
  const { currentUser: user } = useSelector(state => state.user);
  const [conversation, setConversation] = useState(false);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getRooms = useCallback(async () => {
    try {
      setLoading(true);
      const rooms = await appwriteService.getUserRooms(user?.$id);
      setRooms(rooms);
    } catch (error) {
      console.log(error);
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  const realTime = useCallback(() => {
    try {
      return appwriteService.client.subscribe(
        `databases.${appwriteConfig.appWriteDatabase}.collections.${appwriteConfig.appWriteMessegesCollectionID}.documents`,
        response => {
          if (
            response.events.includes(
              'databases.*.collections.*.documents.*.create'
            )
          ) {
            const { payload } = response;
            //handle other user chats
            if (
              payload?.roomID === conversation?.roomID &&
              payload.receiverID === user?.$id
            ) {
              setChats(prev => [...prev, payload]);
              conversation?.setDisplayMessage(payload?.body);
            }
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [user, conversation]);
  useEffect(() => {
    const unsubscribe = realTime();
    return () => {
      unsubscribe();
    };
  }, [realTime]);
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
  if (rooms.length === 0) {
    return (
      <Container>
        <ImageContainer>
          <Empty>
            <Title>you have not conversation yet</Title>
            <Title className='small'>your chats will be shown here</Title>
          </Empty>
        </ImageContainer>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Inbox</Title>
      <MessegerApp
        conversation={conversation}
        setConversation={setConversation}
        rooms={rooms}
        chats={chats}
        setChats={setChats}
      />
    </Container>
  );
};

export default Messeger;

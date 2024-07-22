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
const Image = styled.img``;
const ShopNow = styled.button`
  padding: 1rem;
  color: black;
  background-color: transparent;
  border: none;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  outline: none;
  cursor: pointer;
`;
const Messeger = () => {
  const [rooms, setRooms] = useState([]);
  const { currentUser: user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getRooms = useCallback(async () => {
    try {
      setLoading(true);
      const rooms = await appwriteService.getUserRooms(user?.email);
      console.log(rooms);
      setRooms(rooms);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    getRooms();
  }, [getRooms]);

  const realTime = () => {
    try {
      return appwriteService.client.subscribe(
        `databases.${appwriteConfig.appWriteDatabase}.collections.${appwriteConfig.appWriteMessegesCollectionID}.documents`,
        response => {
          if (
            response.events.includes(
              'databases.*.collections.*.documents.*.create'
            )
          ) {
            console.log('a new messege arrived');
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = realTime();
    return () => {
      unsubscribe();
    };
  }, []);
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
          <Image src={source} />
          <ShopNow>you messeges will appear here</ShopNow>
        </ImageContainer>
      </Container>
    );
  }
  return (
    <Container>
      <Title>Inbox</Title>
      <MessegerApp rooms={rooms} />
    </Container>
  );
};

export default Messeger;

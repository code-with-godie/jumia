import React from 'react';
import styled from 'styled-components';
import Story from './story/Story';
import Share from './share/Share';
import PostsList from './post/PostsList';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap:.5rem;
  align-items: center;
  padding: 1rem;
  overflow: auto;
`
const Feeds = () => {
  const {posts} = useAppContext();
  return (
    <Container>
      <Story/>
      <Share/>
      <PostsList posts={posts} />
    </Container>
  )
}

export default Feeds

import React, { useEffect, useState } from 'react'
import { getData } from '../../routes/routes';
import { useAppContext } from '../../context/AppContext'
import styled from 'styled-components';
import PostsList from '../home/post/PostsList';
const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:.5rem;
align-items: center;
overflow: auto;
`
const VideoContainer = () => {
  const [videos,setVideos] = useState();
  const [loading,setLoading] = useState();
  const {posts} = useAppContext();
  const newPosts = posts.filter(post => post.postType === 'video');
  return (
    <Container>
      <PostsList posts={newPosts} mH='90%' />
    </Container>
  )
}

export default VideoContainer

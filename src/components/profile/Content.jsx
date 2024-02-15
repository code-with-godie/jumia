import React, { useState } from 'react'
import styled from 'styled-components'
import Share from '../home/share/Share';
import PostsList from '../home/post/PostsList';
import Introduction from './Introduction';
import Friends from './Friends';
import { useAppContext } from '../../context/AppContext';
const Container = styled.div`
    flex: 1;
    display: flex;
    max-width: 1000px;
    padding: 1rem;
    margin:0 auto;
    display: flex;
    min-height: 300px;
    gap:.5rem;
`
const Left = styled.div`
flex: 1;
display: flex;
gap: 1rem;
flex-direction: column;
align-self: flex-start;
@media screen and (max-width:768px) {
        display: none;
    }
`
const Right = styled.div`
flex: 1.5;
display: flex;
flex-direction: column;
gap:1rem;
justify-content: center;
align-self: flex-start;
`
const Content = () => {
  const {posts,user:{_id:userID}} = useAppContext();
  const newPosts = posts.filter(post => post.userID === userID)

  return (
    <Container>
        <Left>
          <Introduction/>
          <Friends/>
        </Left>
        <Right>
            <Share setPosts />
            <PostsList  posts = {newPosts} />
        </Right>
    </Container>
  )
}

export default Content

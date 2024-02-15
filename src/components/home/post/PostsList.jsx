import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Post from './Post';
import { useAppContext } from '../../../context/AppContext';
const Container = styled.div`
padding: .5rem;
display: flex;
flex-direction: column;
width: 100%;
max-width:${props => props.mH  || '500px'} ;;
border-radius:.5rem;
gap: 1rem;
`
const PostsList = ({posts=[],mH}) => {

  if(posts.length === 0) {
      return (
    <Container >
      <h1>there are no posts yet!!!</h1>
    </Container>
  )
  }
  return (
    <Container mH={mH} >
        {
          posts.map(post => <Post key={post._id}  {...post} />)
        }

    </Container>
  )
}

export default PostsList
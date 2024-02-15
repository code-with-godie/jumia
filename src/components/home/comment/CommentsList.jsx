import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
const Container = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
padding:.5rem;
`
const CommentsList = () => {
  return (
    <Container>
      <Comment  username ='godie' profile ='assets/person/me.jpg' comment='this is awesome  🤩😉' />
      <Comment  username ='eddie kibe' profile ='assets/person/2.jpeg' comment='this is dope'/>
      <Comment  username ='val_bobo' profile ='assets/person/5.jpeg' comment='🤩🤩🤩🤩' />
    </Container>
  )
}

export default CommentsList

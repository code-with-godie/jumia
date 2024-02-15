import React, { useState } from 'react'
import styled from 'styled-components';
import Sidebar from '../../components/watch/Sidebar'
import VideoContainer from '../../components/watch/VideoContainer'
const Container = styled.div`
    display: flex;
    flex: 1;
overflow: auto;
`
const Left = styled.div`
flex: 1;
background-color: white;
padding: 1rem;
`
const Right = styled.div`
flex: 3;
display: flex;
overflow: auto;
`
const Watch = () => {
  return (
    <Container>
      <Left>
        <Sidebar/>
      </Left>
      <Right>
        <VideoContainer />
      </Right>
    </Container>
  )
}

export default Watch

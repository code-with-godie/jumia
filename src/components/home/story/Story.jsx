import React from 'react'
import styled from 'styled-components'
import StoryHeading from './StoryHeading'
import StoryListContainer from './StoryListContainer'
const Container = styled.div`
box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
padding: .5rem;
display: flex;
gap: .5rem;
width: 100%;
max-width: 500px;
background-color: white;
border-radius:.5rem;
height: 300px;
flex-direction: column;
overflow: auto;
flex: 0 0 300px;
`
const Story = () => {
  return (
    <Container>
        <StoryHeading/>
        <StoryListContainer/>
    </Container>
  )
}

export default Story

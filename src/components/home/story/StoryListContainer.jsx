import React from 'react'
import styled from 'styled-components'
import CreatStory from './CreatStory'
import StoryItem from './StoryItem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Container = styled.div`
flex: 1;
display: flex;
gap:.5rem;
overflow: auto;
position: relative;
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
 }
`
const Arrow = styled.span`
padding:.5rem;
border-radius: 50%;
background-color: #ffffff7a;
position: absolute;
top: 50%;
right:5px;
z-index: 10;
cursor: pointer;
.icon{
    color: #00000082;
}
`
const StoryListContainer = () => {
  return (
    <Container>
        <CreatStory/>
        <StoryItem profile='assets/person/1.jpeg' />
        <StoryItem profile='assets/person/2.jpeg' />
        <StoryItem profile='assets/person/me.jpg' />
        <StoryItem profile='assets/person/3.jpeg' />
        <StoryItem profile='assets/person/4.jpeg' />
        <StoryItem profile='assets/person/5.jpeg' />
        <StoryItem profile='assets/person/6.jpeg' />
        <StoryItem profile='assets/person/7.jpeg' />
        <StoryItem profile='assets/person/8.jpeg' />
        <StoryItem profile='assets/person/9.jpeg' />
        <StoryItem profile='assets/person/10.jpeg' />
        <Arrow><ArrowForwardIosIcon className='icon' /></Arrow>
    </Container>
  )
}

export default StoryListContainer

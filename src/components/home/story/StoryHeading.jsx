import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import MovieIcon from '@mui/icons-material/Movie';
const Container = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.185);
`
const HeadingContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    transition: all 500ms;
    padding:.5rem;
    cursor: pointer;
    &.active{
    border-bottom: 2px solid blue;
    .icon{
    color: #3232c8cc;
  }
  }
  .icon{
    color: #0000005c;
  }
  &:hover:not(.active){
    background-color: #b2afaf8f;
    border-radius:.5rem;
  }
`
const HeadingLabel = styled.p`
    flex: 1;
    text-transform: capitalize;
    color: #0000005c;
`
const StoryHeading = () => {
    const [currentIndex,setIndex] = useState(0);
    useEffect(()=>{
        const links = document.querySelectorAll('.story');
        links.forEach((link,index) =>{
          if(link.classList.contains('active')){
            link.classList.remove('active');
          }
          link.addEventListener('click',e =>{
            setIndex(index);
          });
          if(currentIndex === index){
            link.classList.add('active');
          }
        })
      },[currentIndex])
  return (
    <Container>
        <HeadingContainer className='story' >
            <ImportContactsIcon className ='icon' />
            <HeadingLabel>stories</HeadingLabel>
        </HeadingContainer>
        <HeadingContainer className='story'>
            <MovieIcon className ='icon' />
            <HeadingLabel>reels</HeadingLabel>
        </HeadingContainer>
    </Container>
  )
}

export default StoryHeading

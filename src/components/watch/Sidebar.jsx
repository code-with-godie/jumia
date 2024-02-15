import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OndemandVideo, Search, Settings } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const HeadingContainer = styled.div`
    display: flex;
    align-items: center;
`
const Heading = styled.h1`
    text-transform: capitalize;
    padding:.5rem;
    flex: 1;
`
const SearchContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
background-color:var(--clr-primary-1);
padding: .5rem;
border-radius: 1.5rem;
.search{
    color: #747171ce;
    cursor: pointer;
}
`
const Input = styled.input`
flex: 1;
background-color: transparent;
border: none;
outline: none;
`
const LinkItem = styled.li`
 display:flex ;
 gap:.5rem;
 align-items: center;
border-radius: 1rem;
&.active{
        background-color: #e7e7e7;
  }
 &:hover{
    background-color: #e7e7e7;
}

`
const LinkItemLabel = styled.p`
    text-transform: capitalize;
    color: #000000e5;
`
const Sidebar = () => {
    const [currentIndex,setIndex] = useState(0);
    useEffect(()=>{
      const links = document.querySelectorAll('.link');
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
        <HeadingContainer>
            <Heading>watch</Heading>
            <IconButton>
                <Settings/>
            </IconButton>
        </HeadingContainer>
        <SearchContainer>
            <Search className='search' />
            <Input 
            placeholder='search...'
            />
        </SearchContainer>
        <LinkItem className='link' ><IconButton><OndemandVideo/> </IconButton><LinkItemLabel>watch</LinkItemLabel> </LinkItem>
        <LinkItem className='link' ><IconButton><BookmarkIcon/> </IconButton><LinkItemLabel>saved videos</LinkItemLabel> </LinkItem>
        <LinkItem className='link' ><IconButton><OndemandVideo/> </IconButton><LinkItemLabel>live</LinkItemLabel> </LinkItem>
        <LinkItem className='link' ><IconButton><MovieIcon/> </IconButton><LinkItemLabel>shows</LinkItemLabel> </LinkItem>
    </Container>
  )
}

export default Sidebar

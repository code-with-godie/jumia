import { MoreHoriz } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    flex: 1;
    display: flex;
`
const MoreContainer = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
`
const FiltersContainer = styled.div`
display: flex;
justify-content: space-evenly;
width: 70%;
align-items: flex-end;
`
const Filter = styled.p`
text-transform: capitalize;
color: #000000c9;
cursor: pointer;
padding: .5rem;
&.active{
    border-bottom: 3px solid #2a54ae;
    color:#2a54ae;
    font-size:1.1rem;
  }
`
const Filters = () => {
    const [currentIndex,setIndex] = useState(0);
    useEffect(()=>{
        const links = document.querySelectorAll('.filter');
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
        <FiltersContainer>
          <Tooltip title='posts' >
        <Filter className='filter'>posts</Filter>
          </Tooltip>
          <Tooltip title='about' >
        <Filter className='filter'>about</Filter>
          </Tooltip>
          <Tooltip title='friends' >
        <Filter className='filter'>friends</Filter>
          </Tooltip>
          <Tooltip title='photos' >
        <Filter className='filter'>photos</Filter>
          </Tooltip>
          <Tooltip title='videos' >
        <Filter className='filter'>videos</Filter>
          </Tooltip>
          <Tooltip title='check-ins' >
        <Filter className='filter'>check-ins</Filter>
          </Tooltip>
        </FiltersContainer>
        <MoreContainer>
          <Tooltip title='more' >
            <IconButton>
                <MoreHoriz/>
            </IconButton>

          </Tooltip>
        </MoreContainer>
    </Container>
  )
}

export default Filters

import React, { useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import styled from 'styled-components';
import { IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
const Container = styled.nav`
flex: 1;
display: flex;
justify-content: center;
gap:.5rem;
.navigate{
  display: flex;
}
`
const LinkItem = styled.div`
padding: 0 1rem;
display: flex;
align-items: center;
  &.active{
    border-bottom: 3px solid blue;
    .icon{
    color: blue;
    font-size: 2.5rem;
  }
  }
  .icon{
    font-size: 2rem;
    transition: color 500ms;

  }
`
const LinksContainer = () => {
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
    <Container className='link-container' >
      <Tooltip arrow title='home' >
      <Link to='/' className='navigate' >
      <LinkItem className='link'  ><IconButton> <HomeIcon className='icon' /></IconButton></LinkItem>
      </Link>
      </Tooltip>
      <Tooltip arrow title='watch' >
      <Link to='/watch' className='navigate' >
      <LinkItem className='link' ><IconButton> <OndemandVideoIcon className='icon' /></IconButton></LinkItem>
      </Link>
      </Tooltip>
      <Tooltip arrow title='market place' >
      <Link className='navigate'> 
      <LinkItem className='link' > <IconButton> <StorefrontIcon className='icon' /></IconButton></LinkItem>
      </Link>
      </Tooltip>
      <Tooltip arrow title='groups' >
      <Link className='navigate'>
      <LinkItem className='link' ><IconButton> <GroupsIcon className='icon' /></IconButton></LinkItem>
      </Link>
      </Tooltip>
      <Tooltip arrow title='games' >
      <Link className='navigate'>
      <LinkItem className='link' ><IconButton> <VideogameAssetIcon  className='icon'/></IconButton></LinkItem>
      </Link>
      </Tooltip>
    </Container>
  )
}

export default LinksContainer

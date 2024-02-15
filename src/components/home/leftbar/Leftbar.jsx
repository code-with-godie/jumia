import React from 'react'
import styled from 'styled-components';
import GradeIcon from '@mui/icons-material/Grade';
import { Avatar, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import {Link} from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import {RiCalendarEventFill} from 'react-icons/ri';
import {MdEventRepeat} from 'react-icons/md';
import {BsArrowRepeat} from 'react-icons/bs';
import { useAppContext } from '../../../context/AppContext';

const Container = styled.ul`
  flex: 1.5;
  @media screen and (max-width:768px) {
    display: none;
  }
  .link{
    text-decoration: none;

 }
  overflow: auto;
  list-style-type: none;
`
const LinkItem = styled.li`
 display:flex ;
 gap:.5rem;
 align-items: center;
border-radius: 1rem;
 &:hover{
    background-color: #e7e7e7;
 }
 .icon-blue{
  color: 	#3A5795;
  font-size: 1.5rem;
 }
 .icon-save{
  background-color: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(51,2,43,1) 0%, rgba(255,0,164,1) 100%, rgba(121,9,102,1) 100%);
 }
 .icon-fav{
  color: #a7a728;
 }
 .icon-event{
  color: tomato;
 }
`
const LinkItemLabel = styled.p`
    text-transform: capitalize;
    color: #000000e5;
`

const Leftbar = () => {
  const {user:{profilePic,username,_id:userID}} = useAppContext()

  return (
    <Container>
        <Link className='link' to={`/profile/${username}/${userID}`} >
        <LinkItem>
        <IconButton><Avatar src={profilePic} className='profile'/></IconButton>
         <LinkItemLabel> {username} </LinkItemLabel> 
         </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><PeopleIcon className='icon-blue' /></IconButton> <LinkItemLabel>friends</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><BsArrowRepeat className='icon-blue' /></IconButton> <LinkItemLabel>most recent</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><GroupsIcon className='icon-blue' /></IconButton> <LinkItemLabel>groups</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><StorefrontIcon className='icon-blue' /></IconButton> <LinkItemLabel>market place</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' to='/watch' >
        <LinkItem><IconButton><OndemandVideoIcon className='icon-blue' /></IconButton> <LinkItemLabel>watch</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><MdEventRepeat className='icon-blue' /></IconButton> <LinkItemLabel>memories</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><BookmarkIcon className='icon-save'  /></IconButton> <LinkItemLabel>saved</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><AssistantPhotoIcon/></IconButton> <LinkItemLabel>pages</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><RiCalendarEventFill className='icon-event'  /></IconButton> <LinkItemLabel>events</LinkItemLabel> </LinkItem>
        </Link>
        <Link className='link' >
        <LinkItem><IconButton><GradeIcon className='icon-fav' /></IconButton> <LinkItemLabel>favourites</LinkItemLabel> </LinkItem>
        </Link>
    </Container>
  )
}

export default Leftbar

import React from 'react'
import styled from 'styled-components';
import AppsIcon from '@mui/icons-material/Apps';
import { FaFacebookMessenger} from 'react-icons/fa';
import { IoMdNotifications} from 'react-icons/io';
import { Avatar, Badge, IconButton, Tooltip } from '@mui/material';
import { useAppContext } from '../../context/AppContext'
const Container = styled.div`
display: flex;
align-items: center;
gap:.5rem;
`
const IconContainer = styled.span`
.btn{
    /* background-color: #a8a8a8b4; */

}
`
const UserControl = () => {
  const {user:{profilePic}} = useAppContext();
  return (
    <Container className='user-controls' >
      <Tooltip title='menu' arrow >
        <IconContainer>
            <IconButton className ='btn' ><AppsIcon className='icon' />  </IconButton>
            </IconContainer>
        
      </Tooltip>
      <Tooltip title='messenger' arrow >
        <IconContainer>
            <IconButton className ='btn' ><Badge badgeContent='0'  color='error' ><FaFacebookMessenger className='icon' /> </Badge></IconButton>
            </IconContainer>

      </Tooltip>
      <Tooltip title='notifications' arrow >
            <IconContainer>
            <IconButton className ='btn' ><Badge badgeContent='0'  color='error' ><IoMdNotifications className='icon' /> </Badge></IconButton>
            </IconContainer>
      </Tooltip>
      <Tooltip title='profile'  arrow >
        <IconButton>
          <Avatar src={profilePic} className='profile' />
        </IconButton>
      </Tooltip>
           
    </Container>
  )
}

export default UserControl

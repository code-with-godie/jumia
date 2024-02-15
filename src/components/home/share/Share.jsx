import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ShareIconItem from './ShareIconItem';
import { useAppContext } from '../../../context/AppContext';
import { Link } from 'react-router-dom';
import NewPost from '../../new/NewPost';
const Container = styled.div`
box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
padding: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
max-width: 500px;
background-color: white;
border-radius:.5rem;
`
const InputContainer = styled.div`
    display: flex;
    gap:1rem;
    padding:.5rem;
`
const Input = styled.input`
    flex: 1;
    border: none;
    background: transparent;
    font-size:1rem;
    outline: none;
    ::placeholder{
        color: var(--clr-grey-primary-2);
        font-style: italic;
    }
`
const Horizontal = styled.hr``
const IconContainer = styled.div`
padding:.5rem;
display: flex;
justify-content: space-between;
align-items: center;
`
const Share = () => {
  const {user:{profilePic,username}} = useAppContext();
  const [showModel,setShowModel] = useState(false)
  return (
    <Container>
        <InputContainer>
        <Link>
        <Avatar  src={profilePic} />
        </Link>
        <Input
        placeholder= {`what is on your mind ${username} ?`}
        />
        </InputContainer>
        <Horizontal/>
        <IconContainer>
            <ShareIconItem 
            Icon = {VideoCameraBackIcon} 
            label='live video' 
            className='icon one ' />
            <ShareIconItem 
            onclickHandler={e => setShowModel(true)}
            Icon = {PermMediaIcon} 
            label='photo or video' 
            className='icon two ' />
            <ShareIconItem 
            Icon = {EmojiEmotionsIcon} 
            label='feelings/activity' 
            className='icon three' />
        </IconContainer>
        {
            showModel && <NewPost title='post' showModel={setShowModel} />
        }
    </Container>
  )
}

export default Share

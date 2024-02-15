import { Avatar, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { MoreHoriz } from '@mui/icons-material';
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'
const Container = styled.div`
   display :flex ;
   flex-direction: column;
   gap:1rem;
   padding:.5rem;
`
const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProfileContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap:.5rem;
`
const ProfileDecription = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const Username = styled.h4`
font-size: 1.1rem;
color: #000000d0;
text-transform: capitalize;
font-weight: 400;
`
const Time = styled.p`
    font-family: 'Poppins',sans-serif;
    font-size:.9rem;
`
const Caption = styled.p`
    font-family: 'Poppins',sans-serif;
`
const PostHeader = ({caption,username,profile,userID}) => {
  return (
    <Container>
        <HeaderContainer>
        <ProfileContainer>
            <Link to={`/profile/${username}/${userID}`}>
            <Avatar src={profile} />
            </Link>
            <ProfileDecription>
                <Username> {username} </Username>
                <Time> {format(Date.now())} </Time>
            </ProfileDecription>
        </ProfileContainer>
        <Tooltip arrow title='Tools' >
            <IconButton>
                <MoreHoriz/>
            </IconButton>
        </Tooltip>
        </HeaderContainer>
        <Caption> {caption} </Caption>
    </Container>
  )
}

export default PostHeader

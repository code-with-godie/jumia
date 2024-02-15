import { Avatar } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
flex: 1 0 150px;
background-color: white;
box-shadow: rgba(143, 144, 145, 0.2) 0px 8px 24px;
border-radius: .5rem;
overflow: hidden;
cursor: pointer;
position: relative;
.profile{
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 10;
    border: 3px solid skyblue;
}
`
const Profile = styled.img`
border-radius: .5rem ;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 500ms;
    &:hover{
        transform:scale(1.1)
    }
`
const StoryItem = ({profile}) => {
  return (
    <Container>
        <Profile src={profile} />
        <Avatar className='profile'/>
    </Container>
  )
}

export default StoryItem

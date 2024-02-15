import React from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useAppContext } from '../../../context/AppContext'
import noAvator from '../../../assets/no-profile.jpg';
const Container = styled.div`
flex: 1 0 150px;
background-color: white;
box-shadow: rgba(0, 0, 0, 0.838) 0px 8px 24px;
border-radius: .5rem;
display: flex;
flex-direction: column;
cursor: pointer;
`
const Profile = styled.img`
border-radius: .5rem .5rem 0 0;
    width: 100%;
    height: 80%;
    object-fit: cover;
`
const ShareContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
    .icon{
        position: absolute;
        width: 50px;
        height: 50px;
        /* border: 2px solid white; */
        color: skyblue;
        border-radius: 50%;
        top: -25px;
        background-origin:padding-box;
        z-index: 10;
    cursor: pointer;
    }
`
const ShareLabel = styled.p`
    flex: 1;
    align-self: flex-end;
    text-align: center;
    text-transform: capitalize;
    color: #00000081;
    padding:0;
`
const CreatStory = () => {
    const {user:{profilePic}} = useAppContext();
  return (
    <Container>
        <Profile src={profilePic || noAvator} />
        <ShareContainer>
            <AddCircleIcon className='icon'/>
            <ShareLabel>create story</ShareLabel>
        </ShareContainer>
    </Container>
  )
}

export default CreatStory

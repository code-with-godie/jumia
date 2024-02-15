import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import {BiMessage} from 'react-icons/bi'
import PostUserControls from './PostUserControls'
import { useAppContext } from '../../../context/AppContext'
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding:.5rem;
`
const LikesContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom:1px solid rgba(0, 0, 0, 0.276);
`
const LikedUsers = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    .like{
        width: 20px;
        height: 20px;
    }
`
const User = styled.div`
display: flex;
gap:.3rem;
align-items: center;
`
const Name = styled.p`
font-family: 'Poppins',sans-serif;
font-size:.9rem;
`
const PostFooter = ({postID,likes}) => {
    const {user:{_id:userID}} = useAppContext();
    const [postLikes,setPostLikes] = useState(likes.length);
  return (
    <Container>
        <LikesContainer>
            {/* <LikedUsers>
            </LikedUsers> */}
            <IconButton> <BiMessage/> </IconButton>
        </LikesContainer>
        <PostUserControls setPostLikes={setPostLikes} likes ={likes} postID={postID} />
    </Container>
  )
}

export default PostFooter

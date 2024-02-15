import { Avatar, IconButton } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
const Container = styled.div`
display: flex;
gap:.5rem;
align-items: center;
.profile{
  width: 30px;
  height: 30px;
}
`
const CommentUserName = styled.p`
white-space: nowrap;
display: inline;
color: #000000d5;
&:hover{
    cursor: pointer;
    text-decoration: underline;

}
`
const ShowMore = styled.span`
cursor: pointer;
padding:.5rem;
color: #0000005b;
font-size: .9rem;
text-transform: capitalize;
`
const CommentWrapper = styled.div`
display: flex;
flex-direction: column;
gap:.5rem;
background-color: #dcd9d990;
padding: .5rem;
border-radius:.5rem;
`
const CommentText = styled.p`
display:inline;
color: #000000a1;
font-size:.95rem;
`
const Comment = ({username,comment,profile}) => {
  const [showMore,setShowMore] = useState(comment.length > 100 ? true : false);
  return (
    <Container>
      <IconButton>
        <Avatar className='profile' src={profile} />
      </IconButton>
      <CommentWrapper>
        <CommentUserName> {username} </CommentUserName>
        <CommentText>
           { showMore ? `${comment.substring(0,100)}...` : comment}
           {
            comment.length > 100 && 
            <ShowMore onClick= {e => setShowMore(prev => !prev)} > {showMore ? 'show More' : 'show less'} </ShowMore>
           }
            </CommentText>
      </CommentWrapper>
    </Container>
  )
}

export default Comment

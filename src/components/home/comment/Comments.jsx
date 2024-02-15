import React,{useEffect,useRef,useState} from 'react'
import CommentsList from './CommentsList'
import {getComments,createComments, getData, updateData, postData} from '../../../routes/routes';
import {useAppContext} from '../../../context/AppContext';
import {Avatar, IconButton,} from '@mui/material';
import Picker from 'emoji-picker-react'
import styled from 'styled-components';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
const CommentsWrapper = styled.div`
padding:.5rem;
.hide{
    display: none;
}
`
const MoreComments = styled.h4`
font-size:1rem;
color: #808080bf;
font-family:'Lora',serif;
padding:.5rem 0;
&:hover{
    cursor: pointer;
    text-decoration: underline;
}
`
const InputContainer = styled.div`
display: flex;
gap:.3rem;
align-items: center;
position: relative;
padding:.2rem;
background-color: #18181814;
border-radius:1.5rem;
.emoji{
width: 20px;
height: 20px;
cursor: pointer;
}
`
const Input = styled.input`
flex: 1;
padding:.3rem;
outline: none;
font-family: Verdana, Geneva, Tahoma, sans-serif;
border: none;
background: transparent;
`
const PostButton = styled.p`
font-family: Verdana, Geneva, Tahoma, sans-serif;
color: #2f9dc8;
text-transform: capitalize;
cursor: pointer;
`
const LoadingContainer = styled.div`
  flex: 1;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Loading = styled.img`
width: 30px;
height: 30px;
object-fit: contain;
opacity:.2;
`
const EmojiPicker = styled.div`
    position: absolute;
    right: 0;
    height: 300px;
    width: 100%;
    border-radius:.5rem;
    background:rgb(255, 255, 255);
    max-width: 370px;
    z-index: 10000;
    bottom: 30px;
    overflow: auto;
    .emoji-picker{
        width: 100%;
        height: 100%;
    }
`
const Comments = ({postID}) => {
    const {user:{token,username,profilePic:profile}} = useAppContext();
    const [comments,setComments] = useState([]);
    const [comment,setComment] = useState('');
    const [loading,setLoading] = useState(false);
    const [showPicker,setShowPicker] = useState(false);
    const postComment = async ()=>{
        try {
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    const onEmojiClick = emojiObject =>{
        setComment(prev => prev + emojiObject.emoji);
    }
  return (
    <CommentsWrapper>
                {
                    comments.length > 1 &&
                 <MoreComments>view  more comments</MoreComments>
                }
            <CommentsList comments = {comments} />
             {
            loading  &&
                <LoadingContainer> 
                    <Loading src='assets/loading.gif' /> 
                </LoadingContainer>
              }
         <InputContainer>
                <Input 
                placeholder='Add a comment...'
                onFocus={e=> setShowPicker(false)}
                value={comment}
                onChange={e => setComment(e.target.value)}
                 />
                 {
                    comment !== '' && <PostButton onClick={postComment} >post</PostButton>
                 }
                 <IconButton>
                    <CameraAltIcon/>
                 </IconButton>
                 <Avatar className='emoji' src='assets/emoji.svg' onClick ={e => setShowPicker(prev => !prev)} />
                 {
                    showPicker && <EmojiPicker>
                        <Picker
                         searchDisabled 
                         className='emoji-picker' 
                         onEmojiClick={onEmojiClick}
                         />
                    </EmojiPicker>
                 }
            </InputContainer>
    </CommentsWrapper>
  )
}

export default Comments


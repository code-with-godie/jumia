import React, { useState } from 'react'
import Model from '../models/Model'
import styled from 'styled-components'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useAppContext } from '../../context/AppContext'
import emoji from '../../assets/emoji.svg';
import loadingAnimation from '../../assets/loading.gif';
import EditIcon from '@mui/icons-material/Edit';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Picker from 'emoji-picker-react'
const Container = styled.form`
    display: flex;
    flex-direction: column;
    min-height: 300px;
    padding:.5rem;
    gap: .5rem;
`
const ProfileContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`
const HeadingContainer = styled.div`
display: flex;
gap:.5rem;
align-items: center;
`
const Heading = styled.h3`
flex: 1;
text-align: center;
text-transform: capitalize;
color: #000000ca;
flex: 1;
`
const Name = styled.h3`
text-transform: capitalize;
color: #000000ca;
`
const CaptionContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    .emoji{
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`
const EmojiPickerContainer = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    background-color:white;
    z-index: 1000;
    border-radius:.5rem;
    height: 300px;
    overflow: auto;
    .emoji-picker{
        height: 100%;
    }
`
const Input = styled.input`
flex: 1;
padding:.5rem;
font-size: 1rem;
border: none;
outline: none;
`
const SubmitBtnContainer = styled.div`
    display: flex;
`
const ShareButton = styled.button`
  background-color: #070792c9;
  border: none;
  border-radius:.5rem;
  color: white;
  padding:.5rem;
  text-transform:capitalize;
  cursor: pointer;
  font-size: 1rem;
  flex: 1;
  &:disabled{
    cursor: not-allowed;
    background-color: #76767678;
  }
`
const LoadingAnimation = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
`
const ContentContainer = styled.div`
    flex: 1 1 150px;
    display: flex;

`
const FilePicker = styled.label`
flex: 1;
background-color: #ffffff;
border-radius:.5rem;
border: 1px dotted black;
display: flex;
gap:.5rem;
align-items: center;
justify-content: center;
cursor: pointer;
    color: #00000063;
    font-size:1.5rem;
    .icon{
    font-size: 3.5em;
}
&:hover{
    background-color: #e3e3e3;
}
`
const FilePreviewContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
`
const ImagePreview = styled.img`
width: 100%;
max-height: 400px;
object-fit: contain;
`
const ChangeImage = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    z-index: 11;
`
const ChangeImageLabel = styled.label`
`
const Description = styled.p``

const VideoPreview = styled.video`
max-width: 100%;
max-height: 300px;
object-fit: contain;
`

const NewPost = ({showModel,title,userUpdate}) => {
    const [caption,setCaption] = useState('');
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState(false);
    const [file,setFile] = useState(null);
    const [fileType,setFileType] = useState(null);
    const [showPicker,setShowPicker] = useState(false);
    const {user:{profilePic,username,_id:userID},setPosts} = useAppContext();
    const onEmojiClick = emojiObject =>{
        setCaption(prev => prev + emojiObject.emoji);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const post = {
            _id:Date.now(),
            caption,
            userID,
            url:file,
            postType:fileType,
            likes:[]
        }
        try {
            setLoading(true);
            setTimeout(()=>{
                  setPosts(prev => [post,...prev]);
                  showModel(false);
                  setFile(null);
                  setFileType(null);
                  setCaption('');
                  setLoading(false);

            },2000);
        } catch (error) {
            console.log(error);
        }
        finally{
            // setLoading(false);
        }
    }
    const handleChange = e =>{
        setCaption(e.target.value);
    }
        const handleFile = e =>{
        const file = e.target.files[0];
        setFileType(file.type.split('/')[0]);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
         fileReader.onload = () =>{
            setFile(fileReader.result);
         }
    }
  return (
    <Model >
        <Container encType='multipart/form-data' onSubmit={handleSubmit}>
            <HeadingContainer>
                <Heading>create post</Heading>
                <IconButton onClick={e => showModel(false)}  ><CloseIcon/></IconButton>
            </HeadingContainer>
             <ProfileContainer>
                <Avatar src={profilePic} /><Name> {username} </Name></ProfileContainer>
                {
                    !userUpdate &&
                        <CaptionContainer>
                            <Input
                            placeholder='what is in your mind?'
                            onChange={handleChange}
                            onFocus={e => setShowPicker(false)}
                            value = {caption}
                            />
                            <Avatar src={emoji} className='emoji'  onClick = {e => setShowPicker(prev => !prev)} />
                            {
                            showPicker &&
                                <EmojiPickerContainer>
                                    <Picker 
                                    searchDisabled 
                                    className='emoji-picker'
                                    onEmojiClick={onEmojiClick}
                                    />
                                </EmojiPickerContainer>
                            }
                        </CaptionContainer>
                }
            <ContentContainer>
                {
                    file ?
                           <FilePreviewContainer> 
                {
                    fileType === 'image' && <ImagePreview src={file}/>
                }
                {
                    fileType === 'video' && <VideoPreview src={file}/>
                }
                <ChangeImage>
                    <IconButton >
                    <ChangeImageLabel htmlFor='file' >
                        <EditIcon/>
                    </ChangeImageLabel>
                    </IconButton>
                 
                </ChangeImage>
            </FilePreviewContainer>:
            <>
               <FilePicker htmlFor='file' >
                <LibraryAddIcon className='icon' />
                <Description>add a photo/video</Description>
            </FilePicker>
            <Input id='file' type='file' hidden onChange={handleFile}  />
            </>
                }
            </ContentContainer>
            <SubmitBtnContainer>
             <ShareButton 
            type='submit' 
            disabled ={caption.length === 0 && !file}> 
            {loading ?<LoadingAnimation src= {loadingAnimation} />: title} 
            </ShareButton>
            </SubmitBtnContainer>
        </Container>
    </Model>
  )
}

export default NewPost

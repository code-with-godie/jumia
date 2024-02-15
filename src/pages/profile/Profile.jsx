import React, { useState } from 'react'
import styled from 'styled-components'
import { Avatar, IconButton, Tooltip } from '@mui/material'
import { Add, CameraAlt, Edit } from  '@mui/icons-material'
import Filters from '../../components/profile/Filters'
import Content from '../../components/profile/Content'
import { useAppContext } from '../../context/AppContext'
import Model from '../../components/models/Model'
import ConfirmModel from '../../components/models/ConfirmModel';
import { updateData } from '../../routes/routes'
import noAvator from '../../assets/no-avator.jpg';
import { useParams } from 'react-router-dom'
import NewPost from '../../components/new/NewPost'
const Container = styled.section`
background-color: rgba(203, 200, 200, 0.374);
`
const ProfileContainer = styled.div`
    background:linear-gradient(to bottom ,rgba(126, 126, 126, 0.4),rgba(200, 200, 200, 0.746),rgba(214, 214, 214, 0.819),rgba(255, 255, 255, 0.837),rgb(255, 255, 255));
    border-bottom: 1px solid rgba(126, 126, 126, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    
`
const CoverPictureContainer = styled.div`
height: 250px;
width: 100%;
max-width: 1000px;
display: flex;
position: relative;
`
const CoverPicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius:.5rem;
    object-fit: cover;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
`
const DescriptionContainer = styled.div`
width: 100%;
max-width: 1000px;
border-bottom: 1px solid rgba(126, 126, 126, 0.4);
flex: 1;
display: flex;
flex-direction: column;
`
const EditButton = styled.label`
position: absolute;
z-index: 10000;
padding:.5rem;
cursor: pointer;
 display: flex;
        align-items: center;
        gap:.5rem;
        color: #000000bb;
`
const ProfilePicPicker = styled(EditButton)`
        top: 100px;
        right:45px;
        background-color: #aaa7a7b3;
        border-radius: 50%;
`
const CoverPicPicker = styled(EditButton)`
        bottom: 10px;
        right: 10px;
        background-color:white; 
text-transform: capitalize;
border-radius:.5rem;


        .icon{
           color: #000000bb;
        }
`
const UserDescription = styled.div`
    display: flex;
    /* @media screen and (max-width:900px) {
        flex-direction: column;
    } */
`
const ProfilePictureContainer = styled.form`
    padding: 1rem;
    position: relative;
    .profile{
        width: 200px;
        height: 200px;
        border: 3px solid white;
        margin-top:-70px;
        z-index: 10;
        background-color: white;

    }
    .camera{
        position: absolute;
        right:45px;
        z-index: 30;
        top: 100px;
        background-color: #aaa7a7b3;
        border-radius: 50%;
    }
`
const ProfileDescription = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap:.5rem;
`
const ProfileControls = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
     align-items: center;
     gap: 1rem;
`
const UserName = styled.h4`
font-size: 2rem;
color: #000000da;
text-transform: capitalize;
`
const FollowersCounter = styled.span`
color: #00000099; 
`
const FriendsContainer= styled.h4`
    flex: 1;
    display: flex;
    align-items: center;
    .avatar{
        width: 35px;
        height: 35px;
        margin-left:-0.5rem;
    }
`
const Button = styled.button`
padding:.5rem;
border: none;
outline: none;
background-color: #2a54ae;
display: flex;
gap:.5rem;
align-items: center;
border-radius:.5rem;
text-transform: capitalize;
color: white;
cursor: pointer;
&:hover{

    background-color: #294d9a;
}
`
const ChangeButton = styled(Button)`
    background-color: #a19f9fc0;
    color: #000000be;
    &:hover{
        
        background-color: #8f8e8ec0;
    }
`
const Profile = () => {
    const {userID:tempUserID} = useParams();
    const userID = parseInt(tempUserID);
    const [coverPic,setCoverPic] = useState(null);
    const [profilePicture,setProfilePicture] = useState(null);
    const [showModel,setShowModel] = useState(false);
    const [showConfirmModel,setShowConfirmModel] = useState(false);
    const [modelDimensitions,setModelDimensitions] = useState({width:400,height:300});
    const {setUser,users,setUsers,user:{_id:loggedInUserID}} = useAppContext();
    const [title,setTitle] = useState('');
    const [pictureType,setPictureType] = useState(null);
    const [loading,setLoading] = useState(false);
    const user = users.find(user => user._id === userID);
    const userIndex = users.findIndex(user => user._id === userID);
    const owner = loggedInUserID === userID ;
    const handleFile = (e,type) =>{
        setPictureType(type);
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = ()=>{
            if(type === 'coverPic'){
                setCoverPic(fileReader.result);
            }else{
                setProfilePicture(fileReader.result);
            }
             setShowConfirmModel(true);
            //  console.log(fileReader.result);
        }
    }
    const cancelCoverPicture = () =>{
        setCoverPic(null);
        setShowConfirmModel(false);
        setPictureType(null)
        setLoading(false);
    }
    const savePicture = async () =>{
       try {
        setLoading(true);
        const tempUsers = [...users];
        const name = pictureType === 'coverPic' ? 'coverPic':'profilePic';
        const value = pictureType === 'coverPic' ? coverPic:profilePicture;
        tempUsers.splice(userIndex,1,{...user,[name]:value});
        setUsers(tempUsers);
        setUser({...user,[name]:value});
        setCoverPic(null);
        setShowConfirmModel(false);
       } catch (error) {
        console.log(error);
       }
       finally{
        setLoading(false);
       }
    }
  return (
    <Container>
        <ProfileContainer>
            <CoverPictureContainer>
                <CoverPicture src= { coverPic || user.coverPic || noAvator} />
                {
                    owner && 
                <CoverPicPicker htmlFor ='coverPic' >
                    <CameraAlt/>
                edit cover photo
            </CoverPicPicker>
                }
            <input 
            type="file" 
            hidden 
            id='coverPic' 
            onChange={e =>handleFile(e,'coverPic')}
            />
            </CoverPictureContainer>
            <DescriptionContainer>
                <UserDescription>
                    <ProfilePictureContainer>
                            <Avatar  src={profilePicture || user.profilePic} className='profile'/>
                               {
                                owner &&
                                <ProfilePicPicker htmlFor ='profilePic'  >
                                    <CameraAlt/>
                                </ProfilePicPicker>
                               }
                                <input 
                                type="file" 
                                hidden 
                                id='profilePic' 
                                onChange={e =>handleFile(e,'profilePic')}  />
                    </ProfilePictureContainer>
                    <ProfileDescription>
                        <UserName> {user.username} </UserName>
                        <FollowersCounter>10K followers</FollowersCounter>
                        <FriendsContainer>
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/1.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/2.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/3.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/4.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/5.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/3.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/4.jpeg' />
                            <Avatar className='avatar' src='http:localhost:3000/assets/person/5.jpeg' />
                        </FriendsContainer>
                    </ProfileDescription>
                    {
                        owner &&
                              <ProfileControls>
                        <Button>
                            <Add/>
                            add a story
                        </Button>
                        <Tooltip title='change' >
                        <ChangeButton  >
                            <Edit/>
                            edit profile
                        </ChangeButton>
                        </Tooltip>
                    </ProfileControls>
                    }
                </UserDescription>
                <Filters/>
            </DescriptionContainer>
        </ProfileContainer>
        <Content userID= {userID} />
        {
            showModel && 
            <Model>
                <NewPost title='update user' showModel={showModel} userUpdate  />
            </Model  >
        }
        {
            showConfirmModel &&
            <ConfirmModel save={savePicture}  loading={loading} closeModel = {cancelCoverPicture } />
        }
    </Container>
  )
}

export default Profile

import person1 from '../assets/person/1.jpeg';
import person2 from '../assets/person/2.jpeg';
// import person3 from '../assets/person/3.jpeg';
// import person4 from '../assets/person/4.jpeg';
// import person5 from '../assets/person/5.jpeg';
// import person6 from '../assets/person/6.jpeg';
import person7 from '../assets/person/7.jpeg';
import person8 from '../assets/person/8.jpeg';
// import person9 from '../assets/person/9.jpeg';
// import person10 from '../assets/person/10.jpeg';
import person11 from '../assets/person/me.jpg';
// import post1 from '../assets/post/1.jpeg';
// import post2 from '../assets/post/2.jpeg';
// import post3 from '../assets/post/3.jpeg';
// import post4 from '../assets/post/4.jpeg';
import post5 from '../assets/post/5.jpeg';
import post6 from '../assets/post/6.jpeg';
// import post7 from '../assets/post/7.jpeg';
// import post8 from '../assets/post/8.jpeg';
import post9 from '../assets/post/9.jpeg';
import post10 from '../assets/post/10.jpeg';
import post11 from '../assets/post/11.mp4';
import post12 from '../assets/post/12.mp4';
import post13 from '../assets/post/13.mp4';
export const posts = [
    {
        _id:1,
        caption : 'caption this',
        url :person1,
        postType:'image',
        likes:[],
        userID:3
    },
    {
        _id:2,
        caption : 'what an adventure',
        url :'assets/person/2.jpeg',
        postType:'image',
        likes:[],
        userID:5
    },
    {
        _id:3,
        caption : 'dont tell a soul',
        url :'assets/person/9.jpeg',
        postType:'image',
        likes:[],
        userID:1
    },
    {
        _id:4,
        caption : 'beauty with brains',
        url :'assets/post/1.jpeg',
        postType:'image',
        likes:[],
        userID:2
    },
    {
        _id:5,
        caption : 'self love',
        url :'assets/person/2.jpeg',
        postType:'image',
        likes:[],
        userID:4
    },
    {
        _id:6,
        caption :'caption this' ,
        url :'assets/post/5.jpeg',
        postType:'image',
        likes:[],
        userID:2
    },
    {
        _id:7,
        caption :'let learn about video editting' ,
        url :post11,
        postType:'video',
        likes:[],
        userID:1
    },
    {
        _id:8,
        caption :'chilling.....' ,
        url :post12,
        postType:'video',
        likes:[],
        userID:2
    },
    {
        _id:9,
        caption :'in my own damn feeling' ,
        url :post13,
        postType:'video',
        likes:[],
        userID:3
    },
]
export const users = [
    {
        _id:1,
        username:'godie254',
        email: 'ngugimaina2019@gmail.com',
        password: 'godie254',
        friends:[],
        blockedUsers:[],
        closeFriends:[],
        friendsRequests:[],
        city:'muranga',
        location:'maragua',
        role:'admin',
        coverPic:person8,
        profilePic:post6,
    },
        {
        _id:2,
        username:'poly_sonie',
        email: 'polysonie@gmail.com',
        password: 'poly254',
        friends:[],
        blockedUsers:[],
        closeFriends:[],
        friendsRequests:[],
        city:'nakuru',
        location:'bahati',
        role:'user',
        coverPic:post5,
        profilePic:person8,
    },
        {
        _id:3,
        username:'allan254',
        email: 'allan254@gmail.com',
        password: 'allan254',
        friends:[],
        blockedUsers:[],
        closeFriends:[],
        friendsRequests:[],
        city:'nairobi',
        location:'karen',
        role:'users',
        coverPic:post10,
        profilePic:person7,
    },
        {
        _id:4,
        username:'val_bobo',
        email: 'val254@gmail.com',
        password: 'val254',
        friends:[],
        blockedUsers:[],
        closeFriends:[],
        friendsRequests:[],
        city:'mombasa',
        location:'kilifi',
        role:'user',
        coverPic:post9,
        profilePic:person1,
    },
        {
        _id:5,
        username:'eddie_kb',
        email: 'kibe254@gmail.com',
        password: 'kibe254',
        friends:[],
        blockedUsers:[],
        closeFriends:[],
        friendsRequests:[],
        city:'eldoret',
        location:'eldoret town',
        role:'user',
        coverPic:post5,
        profilePic:person2,
    }
]
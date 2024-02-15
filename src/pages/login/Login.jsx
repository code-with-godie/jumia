import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import FormInput from '../../components/shared/FormInput'
import { loginInputs } from './inputs'
import {Link,Navigate} from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { postData } from '../../routes/routes'
import ErrorModel from '../../components/models/ErrorModel'
const Container = styled.div`
display: flex;
background-color: #e7e8eadd;
padding: 1rem;
align-items: center;
gap:1rem;
flex-direction: column;
justify-content: center;
height: 100%;
@media screen and (min-width:1000px) {
    flex-direction: row;
}
`
const FormContainer = styled.form`
width: 100%;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
min-height: 50%;
padding: 1rem;
border-radius:.5rem;
background-color: white;
display: flex;
flex-direction: column;
justify-content: center;
gap: 1rem;
max-width: 500px;
`
const RegisterHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 1rem;
`
const Header = styled.h1`
color: #3252f5;
font-family: 'Poppins,sans-serif';
font-weight: 900;
font-size: 3rem;
`
const Description = styled.p`
color: #000000af;
font-size: 1.3rem;
width: 70%;
`
const Submit = styled.button`
padding: 1rem;
color: white;
border: none;
font-family: 'Poppins,sans-serif';
text-transform: capitalize;
background: #3252f5;
border-radius: 1rem;
font-size: 1.3rem;
font-weight: 500;
cursor: pointer;
&:disabled{
    cursor: not-allowed;
    background-color: #808080ad;
    color: #00000069;
}
`
const LoginLink = styled.h3`
text-align: right;
color: #3252f5;
font-weight: 400;
font-style: oblique;
text-decoration: underline;
`
const LoadingAnimation = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
`
const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`
const SuccessAnimation = styled.div`
display: flex;
justify-content: center;
`
const Login = () => {
    const [login,setLogin] = useState({email:'',password:''});
    const [loading,setLoading] = useState(false);
    const [signIn,setSignIn] = useState(false);
    const [success,setSuccess] = useState(false);
    const [navigate,setNavigate] = useState(false);
    const {setUser} = useAppContext();
    const {users,setUsers} = useAppContext();
     const [errorMessage,setErrorMessage] = useState(null);
    const disabled = login.password.length < 5 || login.email === '';
    const handleChange = e=>{
        const name = e.target.name;
        const value = e.target.value;
        setLogin(prev => ({...prev,[name]:value}))
    }
    const handleSubmit = async e =>{
        e.preventDefault();
        setSignIn(true);
    }
    
    useEffect(()=>{
        const loggin = async ()=>{
            try {
                setLoading(true);
                const user = users.find(item => item.email === login.email);
                if(!user){
                    setErrorMessage('invalid email');
                    setLogin(prev => ({...prev,email:''}))
                    return;
                }
                if(user.password !== login.password){
                    setErrorMessage('invalid password');
                    setLogin(prev => ({...prev,password:''}))
                    return;
                }
                localStorage.setItem('fb-clone-user',JSON.stringify(user));
                    setUser(user);
                    setLogin({email:'',password:''});
                    setSuccess(true);
                    setTimeout(()=>{
                        setNavigate(true);
                    },2000)
            } catch (error) {
                console.log(error);
            }
            finally{
                setLoading(false);
                setSignIn(false);
            }
        }
        signIn && loggin();
    },[signIn])
  return (
    <Container>
        {
            navigate ? <Navigate to='/' /> :
            <>
            <RegisterHeader>
            <Header>Facebook</Header>
            <Description>Connect with friends and the world around you on facebook</Description>
        </RegisterHeader>
        {
            errorMessage && <ErrorModel message={errorMessage} setErrorMessage={setErrorMessage} />
        }
        <FormContainer onSubmit={e=> handleSubmit(e)} >
            {
                loginInputs.map(item=> <FormInput handleChange={handleChange} value={login[item.name]} key={item.id} {...item} />)
            }
               {
                success !== true ?
                <Submit disabled= {loading || disabled } >{loading ?<LoadingAnimation src='assets/loading.gif' /> : 'sign in'}</Submit> :
                <SuccessAnimation>
                    <Image src='assets/success.gif'/>
                </SuccessAnimation>
            }
            <Link to='/register' className='link' >
            <LoginLink> sign up here?</LoginLink>
            </Link>
        </FormContainer>
            </>
        }
        
    </Container>
  )
}

export default Login

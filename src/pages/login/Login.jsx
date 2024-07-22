import React, { useEffect, useState } from 'react';
import { authService } from '../../appWrite/auth';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../context/userSlice';
import { useNavigate } from 'react-router-dom';
import google from '../../assets/google.png';
import { IconButton } from '@mui/material';
const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .progress {
    position: absolute;
    top: 1rem;
    z-index: 100;
  }
`;
const Container = styled.section`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;
const Logo = styled.img`
  max-width: 100px;
  height: auto;
  object-fit: contain;
`;
const Title = styled.h3`
  color: ${props => props.theme.text_black};
`;
const Description = styled.p`
  font-weight: 100;
  text-align: center;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .input {
    flex: 1;
    :focus {
      border: 1px solid red !important;
    }
  }
`;
const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  flex: 1;
  outline: none;
  background-color: ${props => props.theme.btn_primary};
  color: ${props => props.theme.text_white};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  :disabled {
    background-color: ${props => props.theme.gray_1};
    cursor: not-allowed;
  }
`;
const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const DividerText = styled.p`
  background-color: gray;
  padding: 0.3rem;
  font-size: 0.9rem;
  color: white;
  border-radius: 50%;
`;
const DividerLine = styled.div`
  width: 100%;
  padding: 0.03rem;
  background-color: gray;
  position: absolute;
  z-index: -20;
`;
const OAuthContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const Image = styled.img`
  object-fit: contain;
  max-width: 70px;
  flex: 1;
  cursor: pointer;
`;
const Login = () => {
  const loggedInUser = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const newUser = await authService.loginWithEmailAndPassord(user);
      const { username, email, $id, saved } = newUser;
      dispatch(login({ name: username, email, $id, saved }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    // console.log(user);
  };
  useEffect(() => {
    if (!user.email || user.password.length < 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user]);

  useEffect(() => {
    if (loggedInUser) {
      navigate('/');
    }
  }, [loggedInUser, navigate]);
  return (
    <Wrapper>
      <LinearProgress
        color='success'
        className='progress'
      />
      <Container>
        <Header>
          <Logo src={logo} />
          <Title>welcome to jumia</Title>
          <Description>
            Enter you email address and password to log into you jumia account
          </Description>
        </Header>
        <Form onSubmit={handleSubmit}>
          <TextField
            sx={{
              '&.Mui-focused fieldset': {
                borderWidth: 1,
                borderColor: 'red', // Change border color when focused
              },
            }}
            className='input'
            label='Email address*'
            variant='outlined'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            className='input'
            label='Password*'
            variant='outlined'
            name='password'
            type='password'
            value={user.password}
            onChange={handleChange}
          />
          <Button disabled={disabled || loading}>Continue</Button>
          <Divider>
            <DividerText>OR</DividerText>
            <DividerLine />
          </Divider>
          <OAuthContainer>
            <IconButton
              onClick={() => authService.loginWithOAuthProvider('google')}
            >
              <Image src={google} />
            </IconButton>
            <IconButton>
              <Image src={google} />
            </IconButton>
          </OAuthContainer>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Login;

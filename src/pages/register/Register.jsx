import React, { useState, useEffect } from 'react';
import { authService } from '../../appWrite/auth';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from 'react-router-dom';
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
const Register = () => {
  const [disabled, setDisabled] = useState(true);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setUser(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const created = await authService.createAccount(user);
      created && navigate('/login');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!user.email || user.password.length < 5) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [user]);
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
            label='username*'
            variant='outlined'
            name='username'
            value={user.username}
            onChange={handleChange}
          />
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
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Register;

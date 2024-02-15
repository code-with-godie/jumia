import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Search } from '@mui/icons-material'
const Container = styled.nav`
display: flex;
align-items: center;
gap: 1rem;
`
const Logo = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
object-fit: cover;
`
const SearchContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
gap:.5rem;
background-color:var(--clr-primary-1);
padding: .5rem;
border-radius: 1.5rem;
.search{
    color: #747171ce;
    cursor: pointer;
}
`
const Input = styled.input`
flex: 1;
background-color: transparent;
border: none;
outline: none;
`
const LogoContainer = () => {
  return (
    <Container>
        <Link to='/' >
        <Logo src='assets/logo.png' className='logo'/>
        </Link>
        <SearchContainer className='search-container' >
            <Search className='search' />
            <Input 
            placeholder='search...'
            />
        </SearchContainer>
    </Container>
  )
}

export default LogoContainer

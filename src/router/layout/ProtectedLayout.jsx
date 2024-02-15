import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
import Navbar from '../../components/nav/Navbar'
const Wrapper = styled.main`
display: flex;
flex-direction: column;
height: 100vh;
background-color: var(--clr-primary-1);
`
const ProtectedLayout = () => {
  const {user} = useAppContext();
  return (
    <Wrapper>
      {user ? <><Navbar/> <Outlet/> </> :  <Navigate to='login'/>}
    </Wrapper>
  )
}

export default ProtectedLayout

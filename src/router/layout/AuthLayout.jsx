import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
const Wrapper = styled.section`
height: 100vh;
background-color: var(--clr-primary-1);
`
const AuthLayout = () => {
  return (
    <Wrapper>
        <Outlet/>
    </Wrapper>
  )
}

export default AuthLayout

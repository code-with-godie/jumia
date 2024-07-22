import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../context/AppContext'
import {Outlet,Navigate} from 'react-router-dom'
const Container = styled.main`
    min-height: 100vh;
`
const AdminLayout = () => {
    const {user} = useAppContext();
  return (
    <Container>
        {
            user?.role === 'admin' ? <Outlet/> : <Navigate to ='/' />
        }
    </Container>
  )
}

export default AdminLayout
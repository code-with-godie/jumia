import React from 'react'
import styled from 'styled-components'
import {} from '@mui/icons-material'
import { Avatar, Badge, IconButton } from '@mui/material'
const Container = styled.div`
display: flex;
gap:.5rem;
align-items: center;
.profile{
    width: 40px;
    height: 40px;
}
`
const Name = styled.p``
const Contact = ({profile,username}) => {
  return (
    <Container>
        <IconButton>
            <Badge 
            overlap='circular'
            variant='dot' 
            color='success'
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              >
            <Avatar src={profile} className='profile' />
            </Badge>
        </IconButton>
        <Name > {username} </Name>
    </Container>
  )
}

export default Contact

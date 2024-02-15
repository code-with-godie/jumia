import { IconButton } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import RssFeedIcon from '@mui/icons-material/RssFeed';
const Container = styled.div`
box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
background-color: white;
border-radius:.5rem;
flex: 1;
border: 1px solid rgba(166, 166, 166, 0.2) ;
display: flex;
flex-direction: column;
padding:.5rem;
gap:.5rem;
`
const Button = styled.button`
padding:.5rem;
border: none;
outline: none;
background-color: #d5d5d599;
display: flex;
gap:.5rem;
align-items: center;
justify-content: center;
border-radius:.5rem;
text-transform: capitalize;
color: #000000c0;
cursor: pointer;
font-size: 1rem;
&:hover{
    
    background-color: #c0c0c099;
}
`
const Heading = styled.h1`
    text-transform: capitalize;
    padding:.5rem;
`
const IntroItem = styled.div`
    display: flex;
    align-items: center;
    gap:.5rem;
`
const IntroItemLabel = styled.p`
color: #000000c0;
`
const Introduction = () => {
  return (
    <Container>
        <Heading>intro</Heading>
        <Button> add bio </Button>
        <IntroItem>
            <IconButton>
                <WorkIcon/>
            </IconButton>
            <IntroItemLabel>
Works at information technology /software engineering</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <WorkIcon/>
            </IconButton>
            <IntroItemLabel>self employed</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <SchoolIcon/>
            </IconButton>
            <IntroItemLabel>Study at KCA university</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <SchoolIcon/>
            </IconButton>
            <IntroItemLabel>went to kigumo bendera</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <FmdGoodIcon/>
            </IconButton>
            <IntroItemLabel>from maragua</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <FavoriteIcon/>
            </IconButton>
            <IntroItemLabel>single</IntroItemLabel>
        </IntroItem>
        <IntroItem>
            <IconButton>
                <RssFeedIcon/>
            </IconButton>
            <IntroItemLabel>followed bt 100 people</IntroItemLabel>
        </IntroItem>
        <Button> edit details </Button>
        <Button> add hobbies </Button>

    </Container>
  )
}

export default Introduction

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid #00000088;
`
const Container = styled.div`
display: flex;
gap:1rem;
padding: 1rem;
`
const Heading = styled.h3`
padding:.5rem;
color: #00000088;
`
const Image = styled.img`
width: 50px;
height: 50px;
object-fit: cover;
`
const Description = styled.div``
const Strong = styled.strong``
const Birthday = () => {
  return (
    <Wrapper>
      <Heading> Birthdays </Heading>
    <Container>
        <Image src='assets/gift.png'/>
        <Description>
            <Strong>valentine wambui </Strong>
            and
            <Strong> 3 other frineds </Strong>
            have birthday today
        </Description>
    </Container>
    </Wrapper>
  )
}

export default Birthday

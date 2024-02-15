import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius:.5rem;
   box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
`
const Name = styled.p`
font-size:.8rem;
color: #000000c9;
`
const Friend = ({img,name}) => {
  return (
    <Container>
        <ImageContainer>
        <Image src={img}/>
        </ImageContainer>
        <Name> {name} </Name>
    </Container>
  )
}

export default Friend

import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
  background-color: ${props => props.theme.bg_white};
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  
`
const BannerOverlay = () => {
  return (
    <Container>
        links overlay
    </Container>
  )
}

export default BannerOverlay
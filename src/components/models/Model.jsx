import React from 'react'
import styled from 'styled-components'
import ReactDom from 'react-dom'
import { IconButton } from '@mui/material';
const Wrapper = styled.section`
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
z-index: 666;
padding: 1rem;
`
const Container = styled.div`
width: 100%;
min-height: 300px;
max-width: ${props => props.mW || '500px'};
background-color:#ffffff;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
border-radius: 1rem;
transition: all 500ms;
`
const CloseButton = styled.div`
display: flex;
align-items: center;
.icon{
    font-size: 1.5rem;
}
`
const Heading = styled.h3`
flex: 1;
text-align: center;
text-transform: capitalize;
color: #000000ca;
flex: 1;
`
const Model = ({children}) => {
  return ReactDom.createPortal(
    <Wrapper>
    <Container>
      {children}
    </Container>
    </Wrapper>,
    document.getElementById('portal')
  );
}

export default Model

import React, { useEffect } from 'react'
import styled from 'styled-components'
const Container = styled.div`
    padding: .5rem;
    border-radius:.5rem;
    width: 100%;
    max-width: 500px;
    background-color: #ff6347cf;
`
const Message = styled.p`
text-align: center;
color: white;
`
const ErrorModel = ({setErrorMessage,message}) => {
    useEffect(()=>{
        setTimeout(()=>{
            setErrorMessage(null);
        },3000)
    })
  return (
    <Container>
      <Message> {message} </Message>
    </Container>
  )
}

export default ErrorModel

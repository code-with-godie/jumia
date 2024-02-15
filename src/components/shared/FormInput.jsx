import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;

`
const Input = styled.input`
padding:.5rem;
border: 1px solid #00000040;
border-radius:.5rem;
outline: none;
font-family: 'Lora,sans-serif';
font-size: 1.5rem;
color: #000000b9;
::placeholder{
    font-style: oblique;
    color: #0000004b;
}
flex: 1;
`
const FormInput = ({handleChange,...formProps}) => {
  return (
    <Container>
        <Input
        {...formProps}
        onChange ={e => handleChange(e)}
        />
    </Container>
  )
}

export default FormInput

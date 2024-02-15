import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
     display: flex;
     gap:.5rem;
     align-items: center;
     cursor: pointer;
.icon{
    font-size: 2rem;
}
.one{
    color: tomato;
}
.two{
    color: lime;
}
.three{
    color: #bbbb4b;
}
@media screen and (min-width: 768px) {
    .icon{
    font-size: 1.5rem;
}
}
` 
const Label = styled.p`
display: none;
text-transform: capitalize;
color: #000000bf;
font-weight: 500;
 @media screen and (min-width: 768px) {
    display: block;
 }
` 
const ShareIconItem = ({Icon,label,className,onclickHandler}) => {
  return (
    <Container onClick={onclickHandler}>
        <Icon className={className} />
        <Label> {label} </Label>
    </Container>
  )
}

export default ShareIconItem

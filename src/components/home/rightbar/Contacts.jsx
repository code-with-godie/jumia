import React from 'react'
import styled from 'styled-components'
import Contact from './Contact'
const Container = styled.div`
display: flex;
flex: 1;
overflow: auto;
flex-direction: column;
gap:.5rem;
border-bottom: 1px solid #00000088;
`
const Heading = styled.h3`
padding:.5rem;
color: #00000088;
text-transform: capitalize;
`
const Contacts = () => {
  return (
    <Container>
        <Heading>contacts</Heading>
        <Contact username='code_with_godie' profile='assets/person/me.jpg' />
        <Contact username='val_bobo' profile='assets/person/2.jpeg' />
        <Contact username='poly_sonie' profile='assets/person/1.jpeg' />
        <Contact username='eddie kibe' profile='assets/person/7.jpeg' />
        <Contact username='allan254' profile='assets/person/5.jpeg' />
        <Contact username='code_with_godie' profile='assets/person/me.jpg' />
        <Contact username='val_bobo' profile='assets/person/2.jpeg' />
        <Contact username='poly_sonie' profile='assets/person/1.jpeg' />
        <Contact username='eddie kibe' profile='assets/person/7.jpeg' />
        <Contact username='allan254' profile='assets/person/5.jpeg' />
        <Contact username='code_with_godie' profile='assets/person/me.jpg' />
        <Contact username='val_bobo' profile='assets/person/2.jpeg' />
        <Contact username='poly_sonie' profile='assets/person/1.jpeg' />
        <Contact username='eddie kibe' profile='assets/person/7.jpeg' />
        <Contact username='allan254' profile='assets/person/5.jpeg' />
    </Container>
  )
}

export default Contacts

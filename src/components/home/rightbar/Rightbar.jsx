import React from 'react'
import styled from 'styled-components'
import Birthday from './Birthday';
import Contacts from './Contacts';
const Container = styled.div`
  flex: 1.3;
  display: flex;
  flex-direction: column;
  @media screen and (max-width:900px) {
    display: none;
  }
`
const Rightbar = () => {
  return (
    <Container>
      <Birthday/>
      <Contacts/>
    </Container>
  )
}

export default Rightbar

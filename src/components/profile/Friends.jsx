import React from 'react'
import styled from 'styled-components'
import Friend from './Friend'
const Wrapper = styled.div`
background-color: white;
position: sticky;
top: 0;
`
const Container = styled.div`
box-shadow: rgba(170, 174, 178, 0.2) 0px 8px 24px;
border-radius:.5rem;
border: 1px solid rgba(166, 166, 166, 0.2) ;
padding:.5rem;
display: grid;
grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
gap:.5rem;
`
const Heading = styled.h1`
    text-transform: capitalize;
    padding:.5rem;
`
const Friends = () => {
  return (
    <Wrapper>
        <Heading>friends</Heading>
    <Container>
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://www.mckinsey.com/~/media/mckinsey/careers%20redesign/meet%20our%20people/profiles/yetunde/yetunde_1132x1224.jpg?mw=1536&car=48:59&cpx=Left&cpy=Top'
        name = 'valentine wambui'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6CHVUwBkRkFuqx7rlLB9jrIWMX4oHF1MLg&usqp=CAU'
        name = 'poly sonie'
         />
        <Friend
        img='https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/0x0.jpg?format=jpg&width=1200'
        name = 'poly sonie'
         />
        <Friend
        img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgirO2FjHtER63KipgFVFzDzMhYcS1UGkYA&usqp=CAU'
        name = 'poly sonie'
         />

    </Container>
    </Wrapper>
  )
}

export default Friends

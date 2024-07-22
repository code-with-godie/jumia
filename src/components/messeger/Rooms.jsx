import styled from 'styled-components';
import Room from './Room';
const Container = styled.div`
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const Rooms = ({ setConversation, rooms }) => {
  return (
    <Container>
      {rooms.map(item => (
        <Room
          key={item?.$id}
          {...item}
          setConversation={setConversation}
        />
      ))}
    </Container>
  );
};

export default Rooms;

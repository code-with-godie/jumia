import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  height: 100%;
  background-color: white;
`;
const Title = styled.h2`
  padding: 0.5rem;
  font-weight: 400;
  /* padding-bottom:.5rem; */
`;
const Account = () => {
  return (
    <Container>
      <Title>set up account</Title>
    </Container>
  );
};

export default Account;

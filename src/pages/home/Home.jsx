import React from 'react';
import styled from 'styled-components';
import Leftbar from '../../components/home/leftbar/Leftbar';
import Rightbar from '../../components/home/rightbar/Rightbar';
import Feeds from '../../components/home/Feeds';
const Container = styled.section`
    flex: 1;
    display: flex;
    overflow: auto;
`;
const Home = () => {
    return (
        <Container>
            <Leftbar />
            <Feeds />
            <Rightbar />
        </Container>
    );
};

export default Home;

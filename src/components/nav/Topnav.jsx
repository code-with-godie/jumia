import React from 'react';
import styled from 'styled-components';
import LinksContainer from './LinksContainer';
import LogoContainer from './LogoContainer';
import UserControl from './UserControl';
const Container = styled.div`
    display: flex;
    overflow-y: hidden;
    /* align-items: center; */
    /* position: static; */
    /* top: 0; */
    flex-shrink: 0;
    -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
    box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.19);
    background-color: var(--clr-white-primary);
`;
const Topnav = () => {
    return (
        <Container>
            <LogoContainer />
            <LinksContainer />
            <UserControl />
        </Container>
    );
};

export default Topnav;

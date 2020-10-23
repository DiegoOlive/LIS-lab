import React from 'react';
import styled from 'styled-components';
import Banner from '../Banner';
import TopBar from '../TopBar';

//import './styles.css';
const MainHeader = styled.header`
    background-color: var(--primaria);   
`

export default function Header() {
    return (
        <MainHeader>
           <TopBar />
           <Banner />
        </MainHeader>
    );
}
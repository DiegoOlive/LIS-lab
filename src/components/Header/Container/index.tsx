import React from 'react';
import styled from 'styled-components';

//import './styles.css';
const MainHeader = styled.header`
    background-color: #2B4CB8;   
`

export default function Header() {
    return (
        <MainHeader>
            <h1> Cabeçalhos </h1>
        </MainHeader>
    );
}
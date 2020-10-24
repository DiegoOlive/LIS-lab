import React from 'react';
import styled from 'styled-components';
import Banner, {BannerProps}  from '../Banner';
import TopBar from '../TopBar';

//import './styles.css';
const MainHeader = styled.header`
    background-color: var(--primaria);   
`
//informações passadas e jogadas para o banner
const Header: React.FC<BannerProps> = (props) =>{
    return (
        <MainHeader>
           <TopBar />
           <Banner {...props} />
        </MainHeader>
    );
}

export default Header
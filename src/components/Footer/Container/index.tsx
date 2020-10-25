import React from 'react';
import styled from 'styled-components';
import FooterContent from '../Content';

//ja existe a tag html no footer 
const FooterContainer = styled.footer`
    background-color: var(--fundo); 

    @media (min-width: 768px){
        display: flex;
        justify-content: center;
    }
`

export default function Footer(){
    return(
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}
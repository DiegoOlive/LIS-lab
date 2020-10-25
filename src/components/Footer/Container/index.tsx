import React from 'react';
import styled from 'styled-components';
import FooterContent from '../Content';

//ja existe a tag html no footer 
const FooterContainer = styled.footer`
    background-color: var(--fundo); 
`

export default function Footer(){
    return(
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}
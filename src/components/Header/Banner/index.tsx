import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/home/inicio.svg';
import BannerImg from '../BannerImg/';
import BannerMessager from '../BannerMessager';

//flex-direction: row;
//justify-content:center;
const BannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;    
`

export default function Banner(){
    return(
        <BannerContainer>
            <BannerImg
                src={Img}
                alt="imagem da home"
            />
            <BannerMessager />
        </BannerContainer>
    )    
}
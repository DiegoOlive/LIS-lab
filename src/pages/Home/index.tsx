import React from 'react';
import PageTemplate from '../PageTemplate';
import homeImg from '../../assets/images/home/inicio.svg';
import Projetos from '../../components/Projetos';
import VideoDestaque from '../../components/VideoDestaque';

export default function Home() {
    return (
        <PageTemplate
            imagemSrc={homeImg}
            imagemAlt="Imagem da Home"
            title="Somos apaixonados por inovação e fazemos disso nosso trabalho"
            buttonLink="/projetos"
            buttonText="Projetos"
        >
            <Projetos />
            <VideoDestaque />
        </PageTemplate>
    );
}
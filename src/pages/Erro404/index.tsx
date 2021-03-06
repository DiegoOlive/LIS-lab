import React from 'react';
import PageTemplate from '../PageTemplate';
import erro404Img from '../../assets/images/Erro404/Erro404.svg';

export default function Erro404 () {
    return (
        <PageTemplate
            imagemSrc={erro404Img}
            imagemAlt="Imagem erro404"
            title="Erro404"
            description="Página não encontrada"
            >
            <h1>Erro 404</h1>
        </PageTemplate>
    );
}
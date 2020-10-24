import React from 'react';
import PageTemplate from '../PageTemplate';
import editaisImg from '../../assets/images/Editais/editais.svg';

export default function Editais (){
    return(
        <PageTemplate
            imagemSrc={editaisImg}
            imagemAlt="Imagem de editais"
            title="Editais"
            description="Acompanhe nossas postagens e fique por dentro do que rola aqui no LIS, e claro que tem aquele toque de aprendizagem!"
        >
            <h1>Editais</h1>
        </PageTemplate>
    );
}
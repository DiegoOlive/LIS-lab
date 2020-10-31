import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer/Container';
import {BannerProps} from '../../components/Header/Banner';
import Container from '../../components/Container';

//home passa para pagetemplente em forma de filho
//pagetemplate passa a informação para container
//container carrega a informação (respiro ao conteudo)

const PageTemplate: React.FC<BannerProps> = (props) => {
    return (
        <>
            <Header {...props}/>
                <Container>
                    {props.children}
                </Container>
            <Footer />
        </>
    );
}

export default PageTemplate;

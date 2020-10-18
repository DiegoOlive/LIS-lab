//conteudo

import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer';

const PageTemplate: React.FC = (props) =>{
    return(
        <div>
            <Header />
                {props.children}
            <Footer />
        </div>
    );
}

export default PageTemplate;
//conteudo

import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';

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
import React from 'react';
import Header from '../../components/Header/Container';
import Footer from '../../components/Footer';
import {BannerProps} from '../../components/Header/Banner';

const PageTemplate: React.FC<BannerProps> = (props) =>{
    return(
        <div>
            <Header {...props} />
                {props.children}
            <Footer />
        </div>
    );
}

export default PageTemplate;
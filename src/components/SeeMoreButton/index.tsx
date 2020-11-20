import {Link} from 'react-router-dom'
import styled from 'styled-components';

//display: block;
const SeeMoreButton = styled(Link)`
    margin: 10px auto;
    display: flex;
    background-color: var(--primaria);
    width: 90%;
    height: 6rem;
    border: 1px solid var(--cinza);
    justify-content: center;
    align-items: center;
    color: var(--branco);
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    border-radius: 0.8rem;
    margin-bottom: 20px;

    @media (min-width: 768px){
        margin-right: 0px;
        width: 200px;
    }

`

export default SeeMoreButton;
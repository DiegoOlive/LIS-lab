//media (min-width: 768px) and (max-wdth: 10000px)
import styled from 'styled-components';

interface MenuIconProps {
    open: boolean;
}

const MenuIcon = styled.div`
    font-size: 2rem;
    color: ${(props: MenuIconProps) => props.open ? 'var(--cinza)' :'var(--branco)'};
    
    /*color: var(--branco);*/
    z-index: 1;
    /*icone a frente*/

    @media (min-width: 768px){
        display: none;
    }
`

export default MenuIcon;
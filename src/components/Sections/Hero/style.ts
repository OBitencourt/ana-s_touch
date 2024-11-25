
import styled from "styled-components";


export const HeroWrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    /* Estilos da imagem de fundo */

`;


export const StyledButton = styled.button`
    width: 23%;
    background-color: #F52773;
    border-radius: .1em;
    transition: all 200ms ease;
    margin: 0 auto;
    border: none;
    padding: 15px;
    cursor: pointer;
    border-radius: .7em;
    color: white;
    font-family: 'Josefin Sans';
    

    &:hover {
        transform: scale(1.1);
        filter: brightness(1.1);
        color: white;
    }
`
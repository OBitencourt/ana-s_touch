
import styled from "styled-components";


export const HeroWrapper = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    /* Estilos da imagem de fundo */

`;


export const StyledButton = styled.button`
    width: 20%;
    background-color: #F52773;
    border-radius: .1em;
    transition: all 300ms ease;
    margin: 32px auto;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 6px;
    color: white;
    font-family: 'Josefin Sans';
    font-size: 12px;

    &:hover {
        background-color: #C91F63;
        transform: scale(1.04);
    }
`

export const PhotoDiv = styled.div`
    width: 90%;
    height: 350px;
    background-image: url('/images/unhas-foto-enhanced.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    position: relative; /* Necessário para o ::before funcionar */

    
`;


export const Quadrado = styled.div`
    width: 100px;
    height: 120px;
    position: absolute;
    background-color: blue;

`;

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
    transition: all 300ms ease;
    margin: 32px auto;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 6px;
    color: white;
    font-family: 'Josefin Sans';
    

    &:hover {
        background-color: #C91F63;
        transform: scale(1.04);
    }
`

export const PhotoDiv = styled.div`
    width: 90%;
    height: 350px;
    background-image: url('/images/foto-home.png');
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: -4px 0px 0px #F52773;
`
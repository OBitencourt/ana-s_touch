
import styled from "styled-components";


export const HeroWrapper = styled.section`
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;

    /* Estilos da imagem de fundo */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/images/foto-home-enhanced.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        filter: blur(2px); /* Ajuste a intensidade do blur */
        filter: brightness(0.9);
        z-index: -3; /* Mantém o background atrás dos outros elementos */
    }
`;

export const MainDiv = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: .75em;
    margin-top: 80px;
    padding: 20px;
    color: black;
    
`

export const StyledButton = styled.button`
    width: 30%;
    background-color: transparent;
    border-radius: .1em;
    transition: all 200ms ease;
    margin: 0 auto;
    border: none;
    padding: 15px;
    cursor: pointer;
    border-radius: .7em;
    color: rgba(222, 49, 99, 0.6);
    font-family: 'Josefin Sans';
    background-color: white;

    &:hover {
        transform: scale(1.05);
        filter: brightness(0.95);
    }
`
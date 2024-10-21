import styled from "styled-components";

export const StyledHeader = styled.header`   
    background-color: transparent;
    display: flex;
    justify-content: center;
    overflow-x: hidden; /* Evita scroll horizontal */
    position: absolute;
    top: 0;
`

export const StyledNav = styled.nav`
    width: 100%; /* Ajuste conforme necessário */
    max-width: 1200px; /* Limite máximo de largura */
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px; /* Adiciona um pouco de espaço nas laterais */
`

export const StyledButton = styled.button`
    width: 120px;
    background-color: transparent;
    padding: 15px;
    border: none;
    margin: 15px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 0.5em;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    border-bottom: 1px solid rgba(222, 49, 99, 1);
    position: relative;
    overflow: hidden;
    z-index: 1;

    /* Define o fundo preenchido inicialmente */
    background-image: linear-gradient(
        to top, 
        rgba(222, 49, 99, 1) 50%, 
        transparent 50%
    );
    background-size: 100% 200%;
    background-position: 0 0; /* Fundo completamente preenchido no início */

    &:hover {
        color: white;
        background-position: 0 100%; /* Esvazia o fundo de cima para baixo */
        border-bottom: 1px solid rgba(222, 49, 99, 0.2);
        box-shadow: 0px 0px 3px white;
        transform: scale(1.1);
    }

    /* Para garantir que o texto fique acima da animação */
    &:hover::before {
        z-index: 2;
    }

    &:active {
        background-color: #d6789f;
        color: black;
    }
`

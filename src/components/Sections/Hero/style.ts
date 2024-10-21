
import styled from "styled-components";


export const HeroWrapper = styled.section`
    background-image: url('/images/foto-home-enhanced.png'); /* Substitua pelo caminho da sua imagem */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh; /* Cobrirá toda a altura da viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white; /* Texto branco para contraste com o fundo */

`

export const MainDiv = styled.div`
    background-color: rgba(500, 500, 500, 0.3);
    box-shadow: 0px 0px 10px rgba(222, 49, 99, 0.2);
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: .75em;
    margin-top: 100px;
    padding: 20px;
    color: black;
`

export const StyledButton = styled.button`
    width: 50%;
    background-color: transparent;
    border-radius: .1em;
    transition: all 200ms ease;
    margin: 0 auto;
    border: 1px solid rgba(222, 49, 99, 0.6);
    padding: 15px;
    cursor: pointer;
    
    &:hover {
       background-color: rgba(222, 49, 99, 1);
       transform: scale(1.05);
       
       border: 1px solid white;
       color: white;
       font-size: 15px;
    }
`
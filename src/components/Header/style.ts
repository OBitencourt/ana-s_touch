import styled from "styled-components";

export const StyledHeader = styled.header`   
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    position: absolute;
    top: -80px;
    width: 100%;
    
`

export const StyledNav = styled.nav`
    width: 100%; /* Ajuste conforme necessário */
    max-width: 1200px; /* Limite máximo de largura */
    background-color: transparent;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px; /* Adiciona um pouco de espaço nas laterais */
    
`

export const StyledButton = styled.button`
    width: 120px;
    background-color: white;
    padding: 15px;
    border: none;
    margin: 15px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    border-radius: 0.2em;
    cursor: pointer;
    transition: all 250ms ease-in-out;
    border-bottom: 1px solid rgba(222, 49, 99, 0);
    position: relative;
    overflow: hidden;
    z-index: 1;
    font-family: 'Josefin Sans';
    

    &:hover {
        border-bottom: 1px solid rgba(222, 49, 99, 1);  
        filter: brightness(0.98);
        transform: scale(1.15);
        color: rgba(222, 49, 99, 1);
    }   
`

export const ButtonWrapper = styled.div`
    position: relative;
    background-color: white;
    overflow: hidden;
    z-index: 2;
    top: 45px;
    display: flex;
`


export const LogoWrapper = styled.div`
    position: relative;
    width: 250px;
    height: 200px;
    top: 70px; /* Ajusta para que a logo ultrapasse o header */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
    z-index: 2; /* Garante que a logo fique acima do conteúdo */
`;

import styled from "styled-components";

export const StyledHeader = styled.header`   
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledNav = styled.nav`
    width: 80%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledButton = styled.button`
    width: 200px;
    background-color: #eb92a3;
    padding: 20px;
    border: none;
    margin: 5px;
    color: white;
    font-size: 15px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 250ms ease-in-out;

    &:hover {
        background-color: #d3769f;
        color: #fffafa;
        transform: scale(1.1);
        border-radius: .8em;
    }
`

import styled from "styled-components";

export const StyledCard = styled.div`
    border: 1px solid rgba(222, 49, 99, 1);
    width: 320px;
    height: 200px;
    border-radius: .3em;
`
export const StyledButton = styled.button`
    width: 30%;
    background-color: rgba(222, 49, 99, 1);
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
    }
`
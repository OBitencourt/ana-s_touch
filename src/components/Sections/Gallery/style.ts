
import styled from "styled-components";

export const StyledArrow = styled.button`
    padding: 20px;
    color: red;
    background-color: white;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    transition: all 200ms ease;

    &:hover {
        transform: scale(1.05);
        filter: brightness(0.9);
    }
`

export const Card = styled.div`
    padding: 10px;
    background-color: white;
    border-radius: 7px;
    margin-right: 10px;
`
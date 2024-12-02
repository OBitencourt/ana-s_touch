
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
        
    }
`

export const Card = styled.div`
    width: 99%;
    padding: 4px;
    background-color: white;
    border-radius: 4px;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
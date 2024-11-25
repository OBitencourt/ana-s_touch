
import styled from "styled-components";

export const StyledCard = styled.div`
    border: 1px solid #E12773;
    width: 320px;
    height: 200px;
    border-radius: .3em;
    cursor: pointer;
    transition: all 200ms ease;
    padding: 20px;

    &:hover {
        
        background-color: #E12773;
    }

    &:hover .info {
        color: white;
    }

`

export const Info = styled.div`
    color: #E12773;
    margin-top: 25px;
    padding-left: 5px;
    border-top: 1px solid #E12773;
    padding-top: 20px;

    &:hover {
        border-top: 1px solid white;
    }

`



export const StyledButton = styled.button`
    width: 30%;
    background-color: #E12773;
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
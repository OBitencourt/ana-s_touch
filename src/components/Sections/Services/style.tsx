
import styled from "styled-components";

export const StyledCard = styled.div`
    border: 1px solid #E12773;
    
    height: 200px;
    border-radius: .3em;
    cursor: pointer;
    transition: all 200ms ease;
    padding: 20px;
    z-index: 10;

    &:hover {
        
        background-color: #E12773;
    }

    &:hover .info {
        color: white;
        border-top: 1px solid white;
    }

`

export const Info = styled.div`
    color: #E12773;
    margin-top: 20px;
    padding-left: 5px;
    border-top: 1px solid #E12773;
    padding-top: 20px;



`



export const StyledButton = styled.button`
    width: 30%;
    background-color: white;
    border-radius: .1em;
    border: 1px solid #E12773;
    color: #E12773;
    transition: all 200ms ease;
    padding: 12px;
    margin: 0 auto;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Josefin Sans';


    &:hover {
        transform: scale(1.07);
        filter: brightness(0.95);
    }
`

import styled from "styled-components";

export const StyledCard = styled.div`
    border: 1px solid #C5C5C5;
    overflow: visible;
    height: 250px;
    border-radius: .3em;
    cursor: pointer;
    transition: all 200ms ease;
    padding: 20px;
    z-index: 10;
    background-color: #D9D9D9;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
    &:hover {
        transform: scale(1.05);
        background-color: #E12773;
        z-index: 20;
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
    width: 100%;


`



export const StyledButton = styled.button`
    width: 10%;
    background-color: white;
    border-radius: .1em;
    border: 1px solid #E12773;
    color: #E12773;
    transition: all 200ms ease;
    padding: 12px;
    margin: 50px auto;
    cursor: pointer;
    border-radius: 4px;
    font-family: 'Josefin Sans';
    
    @media (max-width: 715px) {
        width: 25%;
    }

    &:hover {
        transform: scale(1.07);
        filter: brightness(0.95);
    }
`

import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100%;
    background-color: #E12773;
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    @media (max-width: 574px) {
        justify-content: space-around;
    }

`

export const InfoWrapper = styled.div`
    display: flex;
    color: white;
    gap: 100px;
`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 574px) {
        font-size: 1em;
    }
`
export const PhotoWrapper = styled.div`

    @media (max-width: 713px) {
        display: none;
    }
`
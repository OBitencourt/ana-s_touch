import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    background-color: white;
    position: relative;
    
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

export const StyledNavbar = styled.nav`
    width: 50%;
    display: flex;
    justify-content: space-around;
    
`

export const StyledButton = styled.button`
    font-family: 'Josefin Sans';
    color: #4A4A4A;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    background-color: transparent;
    transition: all 200ms ease-in;
    cursor: pointer;
    z-index: 1;
    padding: 10px 0px;
    width: 105px;
    margin-right: 8px;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid #F52773;
        background-color: white;
        color: #F52773;
    }
    
`

export const LogoWrapper = styled.div`
    background-color: white;
    

    
    border-radius: 100%;
    
`
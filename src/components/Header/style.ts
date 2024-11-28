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
    z-index: 0;
`

export const StyledButton = styled.button`
    font-family: 'Josefin Sans';
    color: #4A4A4A;
    border: none;
    border-radius: 54px;
    font-size: 14px;
    background-color: transparent;
    transition: all 250ms ease-in;
    cursor: pointer;
    z-index: 1;
    height: 50px;
    width: 110px;
    margin-right: 3px;
    &:hover {
        background-color: #F52773;
        color: white;
    }
`

export const LogoWrapper = styled.div`
    background-color: white;
    

    
    border-radius: 100%;
    
`
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

    @media (max-width: 472px) {
        display: none;
    }

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


// MOBILE NAV
export const MobileMenuButton = styled.button`

    border: none;
    background: none;
    position: absolute;
    right: 0;

    @media (min-width: 473px) {
        display: none;
    }
    @media (max-width: 471px) {
        display: block;
    }
`

export const MobileNavDiv = styled.div<{ isOpen: boolean }>`
    height: 120vh;
    background-color: #E12773;
    width: ${({ isOpen }) => (isOpen ? "81%" : "0")};
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px;
    transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    margin-left: ${({ isOpen }) => (isOpen ? "0" : "-100px")};
    z-index: 10;
`

export const MobileButtonWrapper = styled.div`
    width: 80%;
    padding: 10px;
    border-top: 1px solid white;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`



export const StyledMobileButton = styled.button`
    background-color: white;
    color: black;
    padding: 12px;
    font-size: 14px;
    font-family: 'Judson';
    border: none;
    width: 100%;
    border-radius: 4px;
    margin-top: 12px;
    color: #C10C55;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const CloseMenuButton = styled.button`
    background: none;
    background-color: white;
    border-radius: 100%;
    padding: 8px;
    position: absolute;
    border: none;
    right: -50px;
    background-color: #E12773;
    display: flex;
    align-items: center;
    justify-content: center;

`
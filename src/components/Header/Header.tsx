import { useState, useEffect } from "react"

import { Container } from "@mui/material"
import { CloseMenuButton, MobileButtonWrapper, MobileMenuButton, MobileNavDiv, StyledButton, StyledHeader, StyledMobileButton, StyledNavbar } from "./style"
import Image from "next/image"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleToggleMenu = action => {
        setIsOpen(action)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Bloqueia o scroll
        } else {
            document.body.style.overflow = "auto"; // Restaura o scroll
        }
    
        // Limpa o estilo ao desmontar o componente
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    console.log(isOpen)

    return (
        <>
            <Container maxWidth='lg' >

                <StyledHeader>
                    <Image 
                        alt="logo"
                        width={70}
                        height={40}
                        src='/images/logo-icon.png'
                    />
                    <StyledNavbar>
                        <StyledButton onClick={() => scrollToSection("hero")}>
                            Ínicio
                        </StyledButton>
                        <StyledButton onClick={() => scrollToSection("about")}>
                            Sobre Mim
                        </StyledButton>
                        <StyledButton onClick={() => scrollToSection("services")}>
                            Serviços
                        </StyledButton>
                        <StyledButton onClick={() => scrollToSection("gallery")}>
                            Galerias
                        </StyledButton>
                        <StyledButton onClick={() => scrollToSection("contact")}>
                            Contatos
                        </StyledButton>
                        
                    </StyledNavbar>

                    <MobileMenuButton onClick={() => handleToggleMenu(true)}>
                        <Image 
                            alt="logo"
                            width={35}
                            height={35}
                            src='/images/menu-button.svg'
                        />
                    </MobileMenuButton>               
                </StyledHeader>
            </Container>
            <MobileNavDiv isOpen={isOpen}>
                <Image 
                    alt="white-logo"
                    width={100}
                    height={60}
                    src='/images/white-logo.png'
                />

                <MobileButtonWrapper>
                    <StyledMobileButton onClick={() => {
                        scrollToSection("hero")
                        setIsOpen(false)
                    }}>
                        Início
                    </StyledMobileButton>
                    <StyledMobileButton onClick={() => {
                        scrollToSection("about")
                        setIsOpen(false)
                    }}>
                        Sobre Mim
                    </StyledMobileButton>
                    <StyledMobileButton onClick={() => {
                        scrollToSection("services")
                        setIsOpen(false)
                    }}>
                        Serviços
                    </StyledMobileButton>
                    <StyledMobileButton onClick={() => {
                        scrollToSection("gallery")
                        setIsOpen(false)
                    }}>
                        Galeria
                    </StyledMobileButton>
                    <StyledMobileButton onClick={() => {
                        scrollToSection("contact")
                        setIsOpen(false)
                    }}>
                        Contate
                    </StyledMobileButton>
                </MobileButtonWrapper>
                <CloseMenuButton onClick={() => handleToggleMenu(false)}>
                    <Image 
                        alt="white-logo"
                        width={20}
                        height={20}
                        src='/images/close-menu.svg'
                    />
                </CloseMenuButton>
            </MobileNavDiv>
            
        </>
    )
}


export default Header
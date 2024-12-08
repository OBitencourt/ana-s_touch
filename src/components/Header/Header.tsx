

import { Container } from "@mui/material"
import { MobileMenuButton, StyledButton, StyledHeader, StyledNavbar } from "./style"
import Image from "next/image"

const Header = () => {

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

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

                    <MobileMenuButton>
                        <Image 
                            alt="logo"
                            width={35}
                            height={35}
                            src='/images/menu-button.svg'
                        />
                    </MobileMenuButton>
                </StyledHeader>
            </Container>
            
        </>
    )
}


export default Header
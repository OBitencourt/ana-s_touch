

import { Container } from "@mui/material"
import { StyledButton, StyledHeader, StyledNavbar } from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
            <Container maxWidth='lg'>

                <StyledHeader>
                     <Image 
                        alt="logo"
                        width={80}
                        height={50}
                        src='/images/logo-icon.png'
                    />
                    <StyledNavbar>
                        <StyledButton>
                            Ínicio
                        </StyledButton>
                        <StyledButton>
                            Sobre Mim
                        </StyledButton>
                        <StyledButton>
                            Serviços
                        </StyledButton>
                        <StyledButton>
                            Galerias
                        </StyledButton>
                        <StyledButton>
                            Contatos
                        </StyledButton>
                        
                    </StyledNavbar>
                </StyledHeader>
            </Container>
            
        </>
    )
}


export default Header
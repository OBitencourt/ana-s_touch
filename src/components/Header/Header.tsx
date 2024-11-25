

import { StyledButton, StyledHeader, StyledNavbar } from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
           
                <StyledHeader>
                        <Image 
                            alt="logo"
                            width={130}
                            height={130}
                            src='/images/logo.png'
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
            
        </>
    )
}


export default Header
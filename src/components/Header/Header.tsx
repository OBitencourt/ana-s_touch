

import { StyledButton, StyledHeader, StyledNav } from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
            <StyledHeader>
                <StyledNav>
                    
                    <StyledButton>
                        Home
                    </StyledButton>
                    <StyledButton>
                        Sobre Mim
                    </StyledButton>
                    <StyledButton>
                        Serviços
                    </StyledButton>

                    <Image 
                        width={250}
                        height={250}
                        src='/images/logo-anastouch-semfundo.png'
                        alt="logo"                   
                    />

                    <StyledButton>
                        Testemunhas
                    </StyledButton>
                    <StyledButton>
                        Galeria
                    </StyledButton>
                    <StyledButton>
                        Contatos
                    </StyledButton>

                </StyledNav>

            </StyledHeader>
        </>
    )
}


export default Header
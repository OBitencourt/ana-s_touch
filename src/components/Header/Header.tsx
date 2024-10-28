

import {
    ButtonWrapper,
    LogoWrapper,
    StyledButton,
    StyledHeader,
    StyledNav
} from "./style"
import Image from "next/image"

const Header = () => {

    return (
        <>
            <StyledHeader>
                <StyledNav>

                    <ButtonWrapper>
                        
                        <StyledButton>
                            Home
                        </StyledButton>
                        <StyledButton>
                            Sobre Mim
                        </StyledButton>
                        <StyledButton>
                            Serviços
                        </StyledButton>
                    </ButtonWrapper>
                    

                    <LogoWrapper>

                        <Image 
                            width={200}
                            height={200}
                            src='/images/logo-anastouch-semfundo.png'
                            alt="logo"  
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '100px',
                                
                            }}                
                        />
                    </LogoWrapper>  

                    <ButtonWrapper>

                        <StyledButton>
                            Testemunhas
                        </StyledButton>
                        <StyledButton>
                            Galeria
                        </StyledButton>
                        <StyledButton>
                            Contatos
                        </StyledButton>
                    </ButtonWrapper>


                </StyledNav>

            </StyledHeader>
        </>
    )
}


export default Header
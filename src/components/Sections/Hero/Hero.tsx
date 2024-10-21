import { Container, Typography } from "@mui/material"
import Header from "../../Header/Header"
import { HeroWrapper, MainDiv, StyledButton } from "./style"



const Hero = () => {

    return (
        <>
            <HeroWrapper>

                <Header />  

                <Container
                    maxWidth='sm'
                    sx={{
                        color: 'black',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <MainDiv>

                        <Typography
                            variant="h3"
                            fontSize={40}
                            sx={{marginBottom: 3}}
                        >
                            Sua beleza nas mãos certas.
                        </Typography>
                        
                        <StyledButton
                            
                        >
                            Agende
                        </StyledButton>
                        
                    </MainDiv>
                </Container>
            </HeroWrapper>

        </>
    )
}

export default Hero
import { Container, Typography } from "@mui/material"
import Header from "../../Header/Header"
import { HeroWrapper, StyledButton } from "./style"
import Image from "next/image"



const Hero = () => {

    return (
        <>
            <HeroWrapper>
                <Header />

                <Container
                    maxWidth='sm'
                    sx={{
                          
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                        
                    }}
                >
                    <Image 
                        src='/images/lirio.png'
                        width={230}
                        height={230}
                        alt="lily"
                    />
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display',
                            
                            mb: 4
                        }}
                        fontSize={60}
                        align="center"
                        color="#4A4A4A"
                        lineHeight={1}
                    >
                        Sua beleza nas mãos certas.
                    </Typography>

                    <StyledButton>
                        Agende!
                    </StyledButton>
                </Container>
            </HeroWrapper>


            

        </>
    )
}

export default Hero
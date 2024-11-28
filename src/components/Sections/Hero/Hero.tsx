import { Container, Grid, Typography } from "@mui/material"
import Header from "../../Header/Header"
import { HeroWrapper, PhotoDiv, StyledButton } from "./style"
import Image from "next/image"



const Hero = () => {

    return (
        <>
            <HeroWrapper>
                <Header />

                <Container
                    maxWidth='lg'
                    sx={{
                          
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: '20px',
                        alignItems: 'center'
                    }}
                >

                    <Grid container spacing={3}>
                        <Grid item md={6}>

                            <Image 
                                src='/images/text-logo.png'
                                width={300}
                                height={100}
                                alt="lily"
                            />

                            <Typography
                                fontSize={30}
                                sx={{
                                    fontFamily: 'Playfair Display',
                                    mb: 4

                                }}
                                lineHeight={1}
                                color="#4A4A4A"
                                gutterBottom
                                
                            >
                                Sua beleza nas mãos certas.
                            </Typography>

                            <Typography
                                
                                sx={{
                                    fontFamily: 'Playfair Display'

                                }}
                                
                                color="#4A4A4A"
                                variant="body1"
                                fontSize={15}
                                
                            >
                                Com técnica, carinho e atenção, meu trabalho vai além da estética, proporcionando a você um momento de bem-estar e confiança. Cada atendimento é pensado para realçar sua beleza e refletir sua personalidade de forma única.
                            </Typography>
                            <StyledButton>
                                Agende!
                            </StyledButton>
                        </Grid>
                        <Grid item md={6}>
                                <PhotoDiv>

                                </PhotoDiv>
                        </Grid>
                    </Grid>
                </Container>
            </HeroWrapper>


            

        </>
    )
}

export default Hero
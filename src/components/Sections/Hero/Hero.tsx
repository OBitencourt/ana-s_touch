import { Container, Grid, Typography } from "@mui/material"
import Header from "../../Header/Header"
import { HeroWrapper, PhotoDiv, Quadrado, StyledButton } from "./style"
import Image from "next/image"
import { motion } from "framer-motion";



const Hero = () => {

    const handleScroll = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
          });
        }
      };

    return (
        <>
            <section id="hero">

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
                            margin: '0 auto',
                            width: '95%',
                            paddingBottom: 3
                        }}
                    >

                        <Grid container spacing={2}>
                            <Grid item md={6} >

                                <Image 
                                    src='/images/text-logo.png'
                                    width={300}
                                    height={90}
                                    alt="logo"
                                    style={{marginTop: 20}}
                                />

                                <Typography
                                    fontSize='1.8em'
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
                                        fontFamily: 'Judson',
                                        width: '80%'

                                    }}
                                    
                                    color="#4A4A4A"
                                    variant="body1"
                                    fontSize="0.8em"
                                    
                                >
                                    Com técnica, carinho e atenção, meu trabalho vai além da estética, proporcionando a você um momento de bem-estar e confiança. Cada atendimento é pensado para realçar sua beleza e refletir sua personalidade de forma única.
                                </Typography>
                                <StyledButton onClick={handleScroll}>
                                    Agende!
                                </StyledButton>
                            </Grid>
                            <Grid item md={6} sx={{overflow: 'visible'}}>

                                <motion.div
                                    initial={{ opacity: 0,  }}
                                    whileInView={{ 
                                        opacity: 1, 
                                    }} // Ativa a animação quando o elemento está em viewport
                                    viewport={{ once: false, amount: 0 }} // 
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    
                                >
                                    
                                    
                                    <PhotoDiv>
                                        
                                    </PhotoDiv>
                                </motion.div>
                                
                                    
                                <Quadrado>

                                </Quadrado>
                            </Grid>
                        </Grid>
                    </Container>
                </HeroWrapper>
            </section>


            

        </>
    )
}

export default Hero
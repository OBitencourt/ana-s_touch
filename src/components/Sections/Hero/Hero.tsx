import { Container, Grid, Typography } from "@mui/material"
import Header from "../../Header/Header"
import { HeroWrapper, PhotoDiv, StyledButton } from "./style"
import Image from "next/image"
import { motion } from "framer-motion";



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
                                alt="lily"
                                style={{marginTop: 20}}
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
                                    fontFamily: 'Judson',
                                    width: '80%'

                                }}
                                
                                color="#4A4A4A"
                                variant="body1"
                                fontSize="12px"
                                
                            >
                                Com técnica, carinho e atenção, meu trabalho vai além da estética, proporcionando a você um momento de bem-estar e confiança. Cada atendimento é pensado para realçar sua beleza e refletir sua personalidade de forma única.
                            </Typography>
                            <StyledButton>
                                Agende!
                            </StyledButton>
                        </Grid>
                        <Grid item md={6} sx={{overflow: 'visible'}}>

                            <motion.div
                                initial={{ opacity: 0, y: -50, x: 1000 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    y: -50,
                                    x: 500,
                                    rotate: 0
                                }} // Ativa a animação quando o elemento está em viewport
                                viewport={{ once: false, amount: 0 }} // 
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '-10px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    
                                    width: '50%'
                                }}
                            >
                                
                                
                                <PhotoDiv>
                                    
                                </PhotoDiv>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -20, x: 1000 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    y: -20,
                                    x: 800,
                                    rotate: 0
                                }} // Ativa a animação quando o elemento está em viewport
                                viewport={{ once: false, amount: 0 }} // 
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '-10px',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    backgroundColor: '#E12773',
                                    height: '170px',
                                    width: '190px'
                                }}
                            >
                                
                                
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </HeroWrapper>


            

        </>
    )
}

export default Hero
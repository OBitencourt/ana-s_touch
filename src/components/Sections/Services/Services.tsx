import { Container, Grid, Typography } from "@mui/material";
import { StyledWhiteSection } from "../generalstyle";
import { StyledButton, StyledCard } from "./style";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <>
            <StyledWhiteSection style={{ position: 'relative' }}>
                <Container
                    maxWidth='lg'
                    sx={{
                        position: 'relative'
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid
                            item
                            md={5}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '50px'
                            }}
                        >
                            <Typography
                                variant="h2"
                                fontSize={90}
                                align="center"
                                lineHeight={0.8}
                                sx={{ fontFamily: 'Rouge script', mb: 5 }}
                            >
                                Meus <span style={{ color: 'rgba(222, 49, 99, 1)', fontSize: '120px' }}>Serviços</span>
                            </Typography>

                            <StyledButton>
                                Agende!
                            </StyledButton>
                        </Grid>

                        <Grid container spacing={3} md={7}>
                            <Grid item md={6}>
                                <StyledCard></StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard></StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard></StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard></StyledCard>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                {/* Componente Image com animação, ativada quando a seção está visível */}
                <motion.div
                    initial={{ opacity: 0, y: 100, x: -50 }}
                    whileInView={{ 
                        opacity: 1, 
                        y: 45,
                        x: -30,
                        rotate: 20
                    }} // Ativa a animação quando o elemento está em viewport
                    viewport={{ once: false, amount: 0.2 }} // Controla a visibilidade no viewport
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '-80px',
                        borderRadius: '100px',
                        overflow: 'hidden'
                    }}
                >
                    <Image
                        width={300}
                        height={300}
                        src='/images/esmalte-red.png'
                        alt="logo"
                        style={{
                            backgroundColor: 'transparent',
                        }}
                    />
                    
                </motion.div>

                
            </StyledWhiteSection>
            <motion.div
                initial={{ 
                    opacity: 0, 
                    y: '1200px', 
                    x: 20,
                    rotate: -130
                }}
                whileInView={{ 
                    opacity: 1, 
                    y: '1000px',
                    x: 20,
                    rotate: -100
                }} 
                viewport={{ once: false, amount: 0}} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '-100px',
                    borderRadius: '100px',
                        
                }}
            >
                <Image
                    width={400}
                    height={400}
                    src='/images/tools.png'
                    alt="logo"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                />
                    
            </motion.div>
        </>
    );
};

export default Services;

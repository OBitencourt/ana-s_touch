import { Container, Grid, Typography } from "@mui/material";
import { StyledWhiteSection } from "../generalstyle";
import { Info, StyledButton, StyledCard } from "./style";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Service {
    default: string; // Caminho do SVG padrão
    hover: string;   // Caminho do SVG ao passar o mouse
    description: string; // Texto descritivo do serviço
}

const Services = () => {

    const [hovered, setHovered] = useState<number | null>(null);

    const handleMouseEnter = (serviceNumber: number) => setHovered(serviceNumber);
    const handleMouseLeave = () => setHovered(null);

    const services: Service[] = [
        { 
          default: '/images/unha_limpa_rosa.svg', 
          hover: '/images/unha_limpa_branca.svg', 
          description: 'Limpeza e cuidados com as unhas.'
        },
        { 
          default: '/images/lixa_rosa.svg', 
          hover: '/images/lixa_branca.svg', 
          description: 'Lixamento profissional para acabamento perfeito.'
        },
        { 
          default: '/images/polimento_rosa.svg', 
          hover: '/images/polimento_branco.svg', 
          description: 'Polimento para um brilho impecável.'
        },
        { 
          default: '/images/verniz_rosa.svg', 
          hover: '/images/verniz_branco.svg', 
          description: 'Aplicação de verniz para proteção e estilo.'
        },
      ];
    
    return (
        <>
            <StyledWhiteSection style={{ position: 'relative' }}>
                <Container
                    maxWidth='lg'
                    sx={{
                        position: 'relative',
                        width: '90%'
                    }}
                >
                    <Grid container spacing={1}>
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
                                fontSize={80}
                                align="center"
                                lineHeight={0.8}
                                letterSpacing={-2}
                                sx={{ fontFamily: 'Playfair Display', mb: 5 }}
                            >
                                Meus <span style={{ color: 'rgba(222, 49, 99, 1)', fontSize: '90px' }}>Serviços</span>
                            </Typography>

                            <StyledButton>
                                Agende!
                            </StyledButton>
                        </Grid>

                        <Grid container spacing={1} md={7}>
                            {services.map((service, serviceNumber) => (
                                <Grid item md={6} key={serviceNumber}>
                                    <StyledCard
                                        onMouseEnter={() => handleMouseEnter(serviceNumber)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Image
                                            src={hovered === serviceNumber ? service.hover : service.default}
                                            width={40}
                                            height={40}
                                            alt={`service-${serviceNumber}`}
                                        />
                                        <Info className="info">

                                            <Typography 
                                                variant="body1"
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                fontSize={14}
                                                lineHeight={1}
                                            >
                                                {service.description}
                                            </Typography>
                                        </Info>
                                    </StyledCard>
                                </Grid>
                            ))}
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
                        width={250}
                        height={250}
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
                    y: '1000px', 
                    x: 20,
                    rotate: -130
                }}
                whileInView={{ 
                    opacity: 1, 
                    y: '900px',
                    x: 30,
                    rotate: -100
                }} 
                viewport={{ once: false, amount: 0}} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '-100px',
                    borderRadius: '100px',
                    zIndex: 0
                }}
            >
                <Image
                    width={300}
                    height={300}
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

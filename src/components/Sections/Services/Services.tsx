import { Container, Grid, Typography } from "@mui/material";
import { StyledWhiteSection } from "../generalstyle";
import { Info, StyledButton, StyledCard } from "./style";
import Image from "next/image";
import { motion } from "framer-motion";

interface Service {
    default: string; // Caminho do SVG padrão   
    title: string; // Texto descritivo do serviço
    description: string
}

const Services = () => {

    const handleScroll = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
          });
        }
    };



    const services: Service[] = [
        { 
          default: '/images/nail-gelinho.svg', 
          title: 'Gelinho',
          description: 'O gelinho é ideal para quem busca unhas naturais e delicadas, oferecendo resistência extra e um acabamento perfeito.'
        },
        { 
          default: '/images/nail-fibra.svg',
          title: 'Unha em fibra',
          description: 'Unhas em fibra são sinônimo de durabilidade e elegância, garantindo um alongamento natural e resistente para o dia a dia.'
        },
        { 
          default: '/images/nail-gel.svg',
          title: 'Unha em gel',
          description: 'As unhas em gel proporcionam um visual impecável, com brilho intenso e longa duração, perfeitas para quem busca praticidade e beleza.'
        },
        { 
          default: '/images/nail-art.png',
          title: 'Nail Art',
          description: 'A nail art transforma suas unhas em verdadeiras obras de arte, permitindo criar designs únicos que refletem sua personalidade.'
        },
      ];
    
    return (
        <>
            <section id="services">

                <StyledWhiteSection style={{ position: 'relative' }}>
                    <Container
                        maxWidth='lg'
                        sx={{
                            position: 'relative',
                            width: '90%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            variant="h2"
                            fontSize={80}
                            align="center"
                            lineHeight={0.8}
                            letterSpacing={-2}
                            sx={{ fontFamily: 'Playfair Display', mb: 10, width: '50%' }}
                        >
                            Meus <span style={{ color: 'rgba(222, 49, 99, 1)', fontSize: '90px' }}>Serviços</span>
                        </Typography>
                                
                        
                        
                            
                            

                        <Grid container spacing={4} md={12}>
                            {services.map((service, serviceNumber) => (
                                <Grid item md={3} key={serviceNumber}>
                                    <StyledCard                  
                                    >
                                        <Image
                                            src={service.default}
                                            width={70}
                                            height={70}
                                            alt={`service-${serviceNumber}`}
                                            style={{
                                                padding:  '12px',
                                                backgroundColor: '#C10C55',
                                                borderRadius: '50%',
                                                marginTop: '-50px'
                                            }}
                                        />
                                        <Info className="info">

                                            <Typography 
                                                variant="body1"
                                                sx={{
                                                    fontFamily: 'Playfair Display',
                                                    mb: 2
                                                }}
                                                fontSize={16}
                                                lineHeight={1}
                                                fontWeight='700'
                                            >
                                                {service.title}
                                            </Typography>
                                            <Typography 
                                                variant="body1"
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                fontSize={13}
                                                lineHeight={1.2}
                                                fontWeight='400'
                                            >
                                                {service.description}
                                            </Typography>
                                        </Info>
                                    </StyledCard>
                                </Grid>
                            ))}
                        </Grid>
                        

                        <StyledButton onClick={handleScroll}>
                            Agende!
                        </StyledButton>
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
            </section>
        </>
    );
};

export default Services;

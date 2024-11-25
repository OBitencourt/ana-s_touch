import { Container, Grid, Typography } from "@mui/material"
import { StyledWhiteSection } from "../generalstyle"
import { ContactDiv, SocialInfo, SocialCard, Socials, StyledInput, StyledTextField } from "./style"
import Image from "next/image"


const Contact = () => {

    return (
        <>
            <StyledWhiteSection>
                <Container
                    maxWidth='lg'
                >
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display'
                        }}
                        color="#E12773"
                        fontSize={60}
                        align="center"
                    >
                        Contate
                    </Typography>
                    
                    <Grid sx={{mt: 1}} container spacing={3}>
                        <Grid item md={6}>

                            <ContactDiv>
                                <Typography
                                    color="white"
                                    align="center"
                                    sx={{
                                        mb: 2,
                                        fontFamily: 'Josefin Sans'
                                    }}
                                >
                                    Marque já seu atendimento!
                                </Typography>
                                <StyledInput
                                    placeholder="Nome"
                                    id="name"
                                    type="name" 
                                    name="name"
                                >

                                </StyledInput>
                                <StyledInput
                                    placeholder="E-mail"
                                    id="email"
                                    type="email" 
                                    name="email"
                                >
                                    
                                </StyledInput>
                                <StyledTextField placeholder="Digite uma mensagem!">

                                </StyledTextField>
                            </ContactDiv>
                            
                        </Grid>

                        <Grid item md={6}>

                            <Socials>
                                <SocialCard>
                                    <Image 
                                        src='/images/email.svg'
                                        width={55}
                                        height={55}
                                        alt="email"
                                    />
                                    <SocialInfo>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Josefin Sans'
                                            }}
                                            color="#4A4A4A"
                                        >
                                            Email
                                        </Typography>
                                        <div>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                color="#8C5A75"
                                                fontSize={14}
                                            >
                                                nalu1234@gmail.com
                                            </Typography>
                                        </div>
                                    </SocialInfo>
                                </SocialCard>
                                <SocialCard>
                                    <Image 
                                        src='/images/instagram.svg'
                                        width={55}
                                        height={55}
                                        alt="instagram"
                                    />
                                    <SocialInfo>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Josefin Sans'
                                            }}
                                            color="#4A4A4A"
                                        >
                                            Instagram
                                        </Typography>
                                        <div>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                color="#8C5A75"
                                                fontSize={14}
                                            >
                                                @ana'stouch
                                            </Typography>
                                        </div>
                                    </SocialInfo>
                                </SocialCard>
                                <SocialCard>
                                    <Image 
                                        src='/images/whatsapp.svg'
                                        width={55}
                                        height={55}
                                        alt="email"
                                    />
                                    <SocialInfo>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Josefin Sans'
                                            }}
                                            color="#4A4A4A"
                                        >
                                            Email
                                        </Typography>
                                        <div>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                color="#8C5A75"
                                                fontSize={14}
                                            >
                                                nalu1234@gmail.com
                                            </Typography>
                                        </div>
                                    </SocialInfo>
                                </SocialCard>
                            </Socials>
                            
                        </Grid>

                    </Grid>


                </Container>


            </StyledWhiteSection>
        </>
    )
}

export default Contact
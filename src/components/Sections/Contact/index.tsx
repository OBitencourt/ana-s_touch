import { Container, Grid, Typography } from "@mui/material"
import { StyledWhiteSection } from "../generalstyle"
import { ContactDiv, SocialInfo, SocialCard, Socials, StyledInput, StyledTextField } from "./style"
import Image from "next/image"
import { FormButton } from "./style"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import useToasty from '../../../contexts/Toasty'

const Contact = () => {
    const { setToasty } = useToasty()

    const [state, handleSubmit] = useForm("xnnqbykk");
    if (state.succeeded) {

        setToasty({
            open: true,
            text: 'Mensagem enviada com sucesso!',
            severity: 'success'
        })
        
    }



    return (
        <>
            <StyledWhiteSection>
                <Container
                    maxWidth='lg'
                >
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                        color="#E12773"
                        fontSize={60}
                        align="center"
                    >
                        Contate
                    </Typography>
                    
                    <Grid sx={{margin: '20px auto'}} container spacing={1} >
                        <Grid item md={6}>

                            <ContactDiv>
                                
                                <Typography
                                    color="white"
                                    align="center"
                                    sx={{
                                        mb: 2,
                                        fontFamily: 'Judson'
                                    }}
                                >
                                    Marque já seu atendimento!
                                </Typography>
                                <form onSubmit={handleSubmit}> 

                                    <StyledInput
                                        placeholder="Nome"
                                        id="name"
                                        type="name" 
                                        name="name"
                                    >

                                    </StyledInput>
                                    <ValidationError 
                                        prefix="Name" 
                                        field="name"
                                        errors={state.errors}
                                    />
                                    <StyledInput
                                        placeholder="E-mail"
                                        id="email"
                                        type="email" 
                                        name="email"
                                    >
                                        
                                    </StyledInput>
                                    <ValidationError 
                                        prefix="Email" 
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <StyledTextField 
                                        placeholder="Digite uma mensagem!"
                                        id="message"
                                        name="message"      
                                    >

                                    </StyledTextField>
                                    <ValidationError 
                                        prefix="Message" 
                                        field="message"
                                        errors={state.errors}
                                    />

                                    <FormButton type="submit" disabled={state.submitting}>
                                        Contate!
                                    </FormButton>
                                </form>
                            </ContactDiv>
                            
                        </Grid>

                        <Grid item md={6}>

                            <Socials>
                                <SocialCard>
                                    <Image 
                                        src='/images/email.svg'
                                        width={50}
                                        height={50}
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
                                        width={50}
                                        height={50}
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
                                        width={50}
                                        height={50}
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
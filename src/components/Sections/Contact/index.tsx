import { Container, Grid, Typography } from "@mui/material"
import { StyledWhiteSection } from "../generalstyle"
import { ContactDiv, SocialInfo, SocialCard, Socials, StyledInput, StyledTextField, PhotoDiv } from "./style"
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
            <section id="contact">

                <StyledWhiteSection>
                    <Container
                        maxWidth='md'
                        sx={{position: 'relative',}}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Playfair Display',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mb: 5
                            }}
                            color="#E12773"
                            fontSize={60}
                            align="center"
                        >
                            Contate
                        </Typography>
                        <Socials>
                            <SocialCard>
                                <Image 
                                    src='/images/email.svg'
                                    width={35}
                                    height={35}
                                    alt="email"
                                />
                            <SocialInfo>
                                <Typography
                                    sx={{
                                        fontFamily: 'Josefin Sans'
                                    }}
                                    color="#4A4A4A"
                                    fontSize={14}
                                >
                                    Email
                                </Typography>
                                        <div>
                                            <Typography
                                                sx={{
                                                    fontFamily: 'Josefin Sans'
                                                }}
                                                color="#8C5A75"
                                                fontSize={12}
                                            >
                                                nalu1234@gmail.com
                                            </Typography>
                                        </div>
                            </SocialInfo>
                            </SocialCard>
                            <SocialCard>
                                <Image 
                                    src='/images/instagram.svg'
                                    width={35}
                                    height={35}
                                    alt="instagram"
                                />
                                <SocialInfo>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Josefin Sans'
                                        }}
                                        color="#4A4A4A"
                                        fontSize={14}
                                    >
                                        Instagram
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Josefin Sans'
                                            }}
                                            color="#8C5A75"
                                            fontSize={12}
                                        >
                                            @ana'stouch
                                        </Typography>
                                    </div>
                                </SocialInfo>
                            </SocialCard>
                            <SocialCard>
                                <Image 
                                    src='/images/clock.svg'
                                    width={35}
                                    height={35}
                                    alt="email"
                                />
                                <SocialInfo>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Josefin Sans'
                                        }}
                                        color="#4A4A4A"
                                        fontSize={14}
                                    >
                                        Horários
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Josefin Sans'
                                            }}
                                            color="#8C5A75"
                                            fontSize={12}
                                        >
                                            seg-sexta: 19:00 - 20:30
                                            <br />
                                            sab-dom: 9:00 - 11:30
                                        </Typography>
                                    </div>
                                </SocialInfo>
                            </SocialCard>
                        </Socials>
                        
                        <Grid sx={{display: 'flex', justifyContent: 'center'}} container spacing={0} >

                            <Grid item md={5}>
                                
                                <PhotoDiv>

                                </PhotoDiv>
                                
                            </Grid>

                            <Grid item md={6}>

                                <ContactDiv>
                                    
                                    <Typography
                                        color="white"
                                        sx={{
                                            mb: 2,
                                            fontFamily: 'Judson'
                                        }}
                                        fontSize={24}
                                    >
                                        Faça já sua marcação!
                                    </Typography>
                                    <form onSubmit={handleSubmit}> 
                                        
                                        <label 
                                            style={{
                                                fontFamily: 'Judson',
                                                color: 'white',
                                                fontSize: '14px',
                                                
                                            }}
                                        >
                                            Nome Completo:
                                        </label>
                                        <StyledInput
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
                                        <label 
                                            style={{
                                                fontFamily: 'Judson',
                                                color: 'white',
                                                fontSize: '14px'
                                            }}
                                        >
                                            E-mail:
                                        </label>
                                        <StyledInput
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
                                        <label 
                                            style={{
                                                fontFamily: 'Judson',
                                                color: 'white',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Mensagem:
                                        </label>
                                        <StyledTextField 
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
                        </Grid>


                    </Container>


                </StyledWhiteSection>
            </section>
        </>
    )
}

export default Contact
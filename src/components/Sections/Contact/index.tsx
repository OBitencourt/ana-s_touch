import { Container, Grid, Typography } from "@mui/material";
import { StyledWhiteSection } from "../generalstyle";
import { ContactDiv, SocialInfo, SocialCard, Socials, StyledInput, StyledTextField, PhotoDiv } from "./style";
import Image from "next/image";
import { FormButton } from "./style";
import { useState } from "react";

import React, { FormEvent, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Toasty from "../../Toasty";

const Contact = () => {
    const [openToasty, setOpenToasty] = useState(false);

    const [state, handleSubmit] = useForm("xnnqbykk");

    // Atualizando o estado apenas após o envio bem-sucedido do formulário
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(event); // Chama o handleSubmit do Formspree
    };

    // Usar useEffect para mostrar o Toasty após o envio bem-sucedido
    useEffect(() => {
        if (state.succeeded) {
            setOpenToasty(true);
        }
    }, [state.succeeded]);


    return (
        <>
            <section id="contact" style={{ overflow: "hidden", position: "relative" }}>
                <StyledWhiteSection>
                    <Container maxWidth='md' sx={{ position: 'relative', width: '70%' }}>
                        <Typography
                            sx={{
                                fontFamily: 'Playfair Display',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mb: 5,
                            }}
                            color="#E12773"
                            fontSize='2.6em'
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
                                        sx={{ fontFamily: 'Josefin Sans' }}
                                        color="#4A4A4A"
                                        fontSize={14}
                                    >
                                        Email
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{ fontFamily: 'Josefin Sans' }}
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
                                        sx={{ fontFamily: 'Josefin Sans' }}
                                        color="#4A4A4A"
                                        fontSize={14}
                                    >
                                        Instagram
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{ fontFamily: 'Josefin Sans' }}
                                            color="#8C5A75"
                                            fontSize={12}
                                        >
                                            @anastouch
                                        </Typography>
                                    </div>
                                </SocialInfo>
                            </SocialCard>
                            <SocialCard>
                                <Image 
                                    src='/images/clock.svg'
                                    width={35}
                                    height={35}
                                    alt="horários"
                                />
                                <SocialInfo>
                                    <Typography
                                        sx={{ fontFamily: 'Josefin Sans' }}
                                        color="#4A4A4A"
                                        fontSize={14}
                                    >
                                        Horários
                                    </Typography>
                                    <div>
                                        <Typography
                                            sx={{ fontFamily: 'Josefin Sans' }}
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
                        
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }} container spacing={0}>
                            <Grid item md={5} sx={{ '@media (max-width: 900px)': { display: 'none' } }}>
                                <PhotoDiv />
                            </Grid>

                            <Grid item md={6} sm={12}>
                                <ContactDiv>
                                    <Typography
                                        color="white"
                                        sx={{ mb: 2, fontFamily: 'Judson' }}
                                        fontSize={24}
                                    >
                                        Faça já sua marcação!
                                    </Typography>
                                    <form onSubmit={handleFormSubmit}> {/* Usando a função handleFormSubmit */}
                                        <label style={{ fontFamily: 'Judson', color: 'white', fontSize: '14px' }}>
                                            Nome Completo:
                                        </label>
                                        <StyledInput id="name" type="name" name="name" />
                                        <ValidationError prefix="Name" field="name" errors={state.errors} />

                                        <label style={{ fontFamily: 'Judson', color: 'white', fontSize: '14px' }}>
                                            E-mail:
                                        </label>
                                        <StyledInput id="email" type="email" name="email" />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />

                                        <label style={{ fontFamily: 'Judson', color: 'white', fontSize: '14px' }}>
                                            Mensagem:
                                        </label>
                                        <StyledTextField id="message" name="message" />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                                        <FormButton type="submit" disabled={state.submitting}>
                                            Enviar
                                        </FormButton>
                                    </form>
                                </ContactDiv>
                            </Grid>
                        </Grid>
                    </Container>

                    {/* Exibe o Toasty após o envio bem-sucedido */}
                    <Toasty 
                        open={openToasty} 
                        severity='success' 
                        text="Mensagem enviada com sucesso!"
                        onClose={() => setOpenToasty(false)}
                    />
                </StyledWhiteSection>
            </section>
        </>
    );
}

export default Contact;

import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import TemplateDefault from '../src/templates/Default';

import { ToastyProvider } from '../src/contexts/Toasty';



// Definindo os estilos globais diretamente aqui
const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden; /* Oculta a rolagem horizontal */
    margin: 0; /* Remove margens padrão */
    padding: 0; /* Remove preenchimentos padrão */
    font-family: 'Rouge Script', sans-serif; /* Define uma fonte padrão */
  }
`;

export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <React.Fragment>
            <Head>
                <title>{"Ana's Touch"}</title>
                <link rel="icon" href="/images" />
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Rouge+Script&display=swap" rel="stylesheet" />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle /> {/* GlobalStyle definido diretamente aqui */}
                <ToastyProvider>

                    <TemplateDefault>
                        <Component {...pageProps} />
                    </TemplateDefault>
                </ToastyProvider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: propTypes.elementType.isRequired,
    pageProps: propTypes.object.isRequired
};

import { Container, Grid, Typography } from "@mui/material";
import { StyledPinkSection } from "../generalstyle";
import { PhotoWrapper } from "./style";

const About = () => {
  return (
    <>
      <section id="about">

        <StyledPinkSection>
          <Container maxWidth="lg" >
            <Grid container spacing={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {/* SVG da unha */}
              <Grid item md={6}>
                <PhotoWrapper>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 20 200 400"
                    style={{ width: "430px", height: "auto", position: 'absolute', top: 0}}
                  >
                    <path
                      d="
                      M100,0 
                      C140,0 190,80 190,160 
                      C190,240 110,250 100,250 
                      C110,250 10,250 10,150 
                      C10,80 60,0 100,0Z"
                      fill="white"
                    />
                    <circle cx="100" cy="160" r="70" fill="#d9d9d9" />
                  </svg>
                </PhotoWrapper>
              </Grid>

              {/* Texto */}
              <Grid item md={5}>
                <Typography
                  variant="h1"
                  fontSize={35}
                  component="h2"
                  fontWeight={300}
                  sx={{
                    fontFamily: "Playfair Display",
                    display: "block",
                    paddingBottom: "20px",
                    borderBottom: "2px solid white",
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  Sobre Mim
                </Typography>

                <Typography
                  variant="body1"
                  component="p"
                  fontWeight={300}
                  fontSize={14}
                  sx={{
                    fontFamily: "Josefin Sans",
                    justifyContent: "center",
                    color: "white",
                    mt: 2
                  }}
                >
                  Olá! Meu nome é Ana e sou apaixonada por cuidado, beleza e autoestima. Trabalho como manicure, ajudando as pessoas a se sentirem mais confiantes e bem consigo mesmas.
                  <br /><br />
                  Acredito que as mãos falam muito sobre uma pessoa, e cuidar delas vai além da estética. É um momento de autocuidado, que merece atenção e carinho. Por isso, me dedico a oferecer um trabalho delicado e personalizado, refletindo o estilo de cada cliente.
                  <br /><br />
                  Meu compromisso é unir técnica, criatividade e produtos de qualidade, em um ambiente acolhedor, para garantir uma experiência especial. Amo o que faço e estou sempre em busca de aprimorar minhas habilidades para oferecer o melhor aos meus clientes.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </StyledPinkSection>
      </section>
    </>
  );
};

export default About;

import { Container, Grid, Typography } from "@mui/material"
import { StyledPinkSection } from "../generalstyle"
import { PhotoWrapper } from "./style"

const About = () => {

    return (

        <>
            <StyledPinkSection>
                <Container
                    
                    maxWidth='md'
                >
                    <Grid container spacing={7}>

                        <Grid item md={6}>
                            <PhotoWrapper>
                                
                            </PhotoWrapper>
                        </Grid>

                        <Grid item md={6}>

                            <Typography
                                variant="h1"
                                fontSize={55}
                                component="h2"
                                fontWeight={300}
                                sx={{
                                    fontFamily: 'Rouge Script', 
                                    display: 'block',
                                    justifyContent: 'center',
                                    padding: '2px',
                                    borderBottom: '2px solid white',
                                    color: 'white',
                                    marginBottom: '10px'
                                }}
                            >
                                Sobre Mim
                            </Typography>

                            <Typography
                                variant="body1"                                
                                component="p"
                                fontWeight={300}
                                fontSize={25}
                                sx={{
                                    fontFamily: 'Rouge Script',        
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre
                                Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre Texto sobre texto sobre texto sobre texto sobre texto sobre
                            </Typography>

                        </Grid>

                    </Grid>
                </Container>
            </StyledPinkSection>
        </>
    )
}

export default About
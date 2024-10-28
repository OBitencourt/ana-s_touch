import { Container, Grid, Typography } from "@mui/material"
import { StyledWhiteSection } from "../generalstyle"
import { StyledButton, StyledCard } from "./style"


const Services = () => {
    return (

        <>
            <StyledWhiteSection>
                <Container
                    maxWidth='lg'
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
                                sx={{fontFamily: 'Rouge script', mb: 5}}
                            >
                                Meus <span style={{color: 'rgba(222, 49, 99, 1)', fontSize: '120px'}}>Serviços</span>
                            </Typography>

                            <StyledButton>
                                Agende!
                            </StyledButton>
                        </Grid>

                        <Grid container spacing={3} md={7}>
                            <Grid item md={6}>
                                <StyledCard>

                                </StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard>

                                </StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard>

                                </StyledCard>
                            </Grid>
                            <Grid item md={6}>
                                <StyledCard>

                                </StyledCard>
                            </Grid>
                            
                        </Grid>

                    </Grid>
                </Container>

            </StyledWhiteSection>
        </>
    )
}

export default Services
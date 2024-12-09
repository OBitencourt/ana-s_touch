import { Typography } from "@mui/material"
import {StyledFooter, InfoWrapper, InfoDiv, PhotoWrapper } from "./style"
import Image from "next/image"

const Footer = () => {

    return (

        <>
            <StyledFooter>
                <PhotoWrapper>

                    <Image 
                        src='/images/white-logo.png'
                        width={120}
                        height={80}
                        alt="logo"
                    />
                </PhotoWrapper>
                
                <InfoWrapper>
                    <InfoDiv>
                        <Typography
                            fontSize='1em'
                            sx={{fontFamily: 'Playfair Display'}}
                        >
                            Horários:
                        </Typography>
                        <Typography
                            fontSize='0.9em'
                            sx={{fontFamily: 'Playfair Display'}}
                        >
                            - seg-sex: 19:00 - 20:30
                        </Typography>
                        <Typography
                            fontSize='0.9em'
                            sx={{fontFamily: 'Playfair Display'}}
                        >
                            - sab-dom: 9:00 - 11:30
                        </Typography>
                    </InfoDiv>
                    <InfoDiv>
                        <Typography
                            fontSize='1em'
                            sx={{fontFamily: 'Playfair Display'}}
                        >
                            Localização:
                        </Typography>
                        <Typography
                            fontSize='0.9em'
                            sx={{fontFamily: 'Playfair Display'}}
                        >
                            - Amorosa, Viana do Castelo
                        </Typography>
                    </InfoDiv>
                </InfoWrapper>
            </StyledFooter>
        </>
    )
}

export default Footer
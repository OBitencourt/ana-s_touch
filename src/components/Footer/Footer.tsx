import { Typography } from "@mui/material"
import { StyledCard, StyledDivider, StyledFooter, StyledDiv } from "./style"
import Image from "next/image"

const Footer = () => {

    return (

        <>
            <StyledFooter>
                <StyledCard>
                    <Typography
                        sx={{
                            fontFamily: '"Rouge Script"'
                        }}
                        fontSize={25}
                        align="center"
                    >
                        Localização
                    </Typography>

                    <StyledDiv>

                        <Image
                            width={18}
                            height={18}
                            src='/images/location.svg'
                            alt="insta"
                            style={{
                                marginRight: '10px'
                            }}
                            
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Josefin Sans'
                            }}
                            fontSize={15}
                        >
                            Amorosa - Viana do Castelo
                        </Typography>
                    </StyledDiv>
                </StyledCard>
                <StyledDivider />
                <StyledCard>
                    <Typography
                        sx={{
                            fontFamily: '"Rouge Script"'
                        }}
                        fontSize={25}
                        align="center"

                    >
                        Social
                    </Typography>

                    <StyledDiv >

                        <Image
                            width={25}
                            height={25}
                            src='/images/instagram.svg'
                            alt="insta"
                            style={{
                                marginRight: '10px'
                            }}
                        />
                        <Typography
                            sx={{
                                fontFamily: 'Josefin Sans'
                            }}
                            fontSize={15}
                        >
                            www.instagram.com
                        </Typography>
                    </StyledDiv>
                </StyledCard>
            </StyledFooter>
        </>
    )
}

export default Footer
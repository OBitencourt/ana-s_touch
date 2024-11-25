import { Container, Typography } from "@mui/material"
import { StyledPinkSection } from "../generalstyle"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Card, StyledArrow } from "./style";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div style={{position: 'absolute', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '10px'}} className="carousel-button-group"> 
        <StyledArrow className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
            <Image 
                src='/images/left-arrow.svg'
                height={20}
                width={20}
                alt="left_arrow"
            />
        </StyledArrow>
        <StyledArrow onClick={() => next()}>
            <Image 
                src='/images/right-arrow.svg'
                height={20}
                width={20}
                alt="left_arrow"
            />
        </StyledArrow>
        
      </div>
    );
  };

const Gallery = () => {

    return (

        <>
            <StyledPinkSection>
                <Container
                    maxWidth='lg'
                >
                    <Typography
                        sx={{
                            fontFamily: 'Playfair Display',
                            color: 'white',
                            mb: 10
                        }}
                        fontSize={60}
                        align="center"
                    >
                        Galeria de Fotos
                    </Typography>

                    <Carousel 
                        arrows={false} 
                        customButtonGroup={<ButtonGroup />}
                        responsive={responsive}
                        swipeable={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                    >
                        <Card>

                            <Image 
                                src='https://picsum.photos/1000/1000'
                                alt="photo"
                                height={220}
                                width={350}
                            />
                        </Card>
                        <Card>
                            <Image 
                                src='https://picsum.photos/1000/1000'
                                alt="photo"
                                height={220}
                                width={350}
                            />
                        </Card>
                        <Card>
                            <Image 
                                src='https://picsum.photos/1000/1000'
                                alt="photo"
                                height={220}
                                width={350}
                            />
                        </Card>
                        <Card>
                            <Image 
                                src='https://picsum.photos/1000/1000'
                                alt="photo"
                                height={220}
                                width={350}
                            />
                        </Card>
                    </Carousel>;
                </Container>
            </StyledPinkSection>
        </>
    )
}

export default Gallery
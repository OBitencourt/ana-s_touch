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


interface ButtonGroupProps {
  next: () => void;
  previous: () => void;
  goToSlide?: (index: number) => void; // Opcional, dependendo do uso
  carouselState: {
    currentSlide: number;
    totalItems: number;
    slidesToShow: number;
    deviceType: string;
  };
}


const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, carouselState }) => {
    const { currentSlide } = carouselState;
  
    return (
      <div
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "20px",
        }}
        className="carousel-button-group"
      >
        <StyledArrow className={currentSlide === 0 ? "disable" : ""} onClick={previous}>
          <Image src="/images/left-arrow.svg" height={20} width={20} alt="left_arrow" />
        </StyledArrow>
        <StyledArrow onClick={next}>
          <Image src="/images/right-arrow.svg" height={20} width={20} alt="left_arrow" />
        </StyledArrow>
      </div>
    );
  };

const Gallery = () => {

    return (

        <>
            <section id="gallery" style={{ overflow: "hidden", position: "relative" }}>

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
                            fontSize='2.6em'
                            align="center"
                        >
                            Galeria de Fotos
                        </Typography>

                        <Carousel 
                            arrows={false} 
                            customButtonGroup={<ButtonGroup />}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={5000}
                            
                        >
                            <Card>

                                <Image 
                                    src='https://picsum.photos/997/997'
                                    alt="photo"
                                    height={220}
                                    width={390}
                                    style={{borderRadius: '2px'}}
                                />
                            </Card>
                            <Card>
                                <Image 
                                    src='https://picsum.photos/997/997'
                                    alt="photo"
                                    height={220}
                                    width={390}
                                    style={{borderRadius: '2px'}}
                                />
                            </Card>
                            <Card>
                                <Image 
                                    src='https://picsum.photos/997/997'
                                    alt="photo"
                                    height={220}
                                    width={390}
                                    style={{borderRadius: '2px'}}
                                />
                            </Card>
                            <Card>
                                <Image 
                                    src='https://picsum.photos/997/997'
                                    alt="photo"
                                    height={220}
                                    width={390}
                                    style={{borderRadius: '2px'}}
                                />
                            </Card>
                        </Carousel>;
                    </Container>
                </StyledPinkSection>
            </section>
        </>
    )
}

export default Gallery
import { Container, Typography } from "@mui/material";
import { StyledPinkSection } from "../generalstyle";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { Card, StyledArrow } from "./style";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface CustomButtonGroupProps {
  next?: () => void;
  previous?: () => void;
  carouselState?: {
    currentSlide: number;
    totalItems: number;
    slidesToShow: number;
    deviceType?: string;
  };
}

const ButtonGroup: React.FC<CustomButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}) => {
  const currentSlide = carouselState?.currentSlide ?? 0;
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "space-between",
        width: "91%",
        top: "56%",
      }}
      className="carousel-button-group"
    >
      <StyledArrow
        className={currentSlide === 0 ? "disable" : ""}
        onClick={previous}
      >
        <Image
          src="/images/left-arrow.svg"
          height={20}
          width={20}
          alt="left_arrow"
        />
      </StyledArrow>
      <StyledArrow onClick={next}>
        <Image
          src="/images/right-arrow.svg"
          height={20}
          width={20}
          alt="right_arrow"
        />
      </StyledArrow>
    </div>
  );
};

const ButtonGroupWrapper: React.FC<CustomButtonGroupProps> = (props) => {
  return <ButtonGroup {...props} />;
};

const Gallery = () => {
  return (
    <section id="gallery" style={{ overflow: "hidden", position: "relative" }}>
      <StyledPinkSection>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              color: "white",
              mb: 10,
            }}
            fontSize="2.6em"
            align="center"
          >
            Galeria de Fotos
          </Typography>

          <Carousel
            arrows={false}
            renderButtonGroupOutside={true}
            customButtonGroup={<ButtonGroupWrapper />}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            {[...Array(4)].map((_, index) => (
              <Card key={index}>
                <Image
                  src={`https://picsum.photos/997/997?random=${index}`}
                  alt="photo"
                  height={220}
                  width={390}
                  style={{ borderRadius: "2px" }}
                />
              </Card>
            ))}
          </Carousel>
        </Container>
      </StyledPinkSection>
    </section>
  );
};

export default Gallery;

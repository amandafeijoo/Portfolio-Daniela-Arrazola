import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/playfair-display";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translate(-50%, 100%); opacity: 0; }
  to { transform: translate(-50%, -50%); opacity: 1; }
`;

const Image = styled.img`
  width: 100%;
  height: 104%;
  object-fit: cover;
  border-radius: 15px;

  @media (max-width: 768px) {
    height: auto;
  }

  @media (max-width: 480px) {
    height: 100%;
    object-fit: contain;
  }
`;

const Background = styled.div`
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 2s ease-in-out;
  position: relative;
  flex-direction: column;
  overflow-y: auto;
`;

const CarouselContainer = styled.div`
  width: 100%;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.3), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (max-width: 1024px) {
    /* iPad Pro */
    padding-top: 15px;
    padding-bottom: 15px;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    padding-top: 5px;
    padding-bottom: 5px;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const CarouselItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 750px;
  position: relative;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 300px;
    padding: 0px;
    margin: 0px;
  }
`;

const ButtonContainer1 = styled.div`
  position: absolute;
  top: 88%;
  left: 32%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: 85%;
    left: 50%;
    width: 80%;
    height: auto;
  }

  @media (max-width: 480px) {
    top: 80%;
    left: 35%;
    margin-top: 10px;
    width: 25%;
    height: 20%;
    font-size: 0.8em;
    padding: 5px 10px;
  }
`;

const ButtonContainer2 = styled.div`
  position: absolute;
  top: 90%;
  left: 36%;
  transform: translate(-50%, -50%);

  @media (max-width: 768px) {
    top: 85%;
    left: 50%;
  }

  @media (max-width: 480px) {
    top: 85%;
    left: 40%;
    width: 70%;
    height: 20%;
    font-size: 0.2em;
  }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#305445",
    },
  },
});

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 70px;
  font-size: 1.7em;
  height: 70px;
  border: 2px solid rgba(245, 238, 220, 0.3);
  background-color: rgba(245, 238, 220, 0.3);
  color: #ffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;
  border-radius: 20%;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: rgba(245, 238, 220, 0.6);
    border-color: rgba(245, 238, 220, 0.6);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1em;
    border: 1px solid #d2b48c;
    color: #4b3f2f;
    background-color: rgba(245, 238, 220, 0.9);
  }
`;

const PrevArrow = styled(Arrow)`
  left: 15px;
`;

const NextArrow = styled(Arrow)`
  right: 15px;
`;

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return <PrevArrow onClick={onClick}>{"<"}</PrevArrow>;
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return <NextArrow onClick={onClick}>{">"}</NextArrow>;
};

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoComponent = (props) => {
  return (
    <Video autoPlay loop muted playsInline controls={false} {...props}>
      {props.children}
    </Video>
  );
};

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f5eedc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
  text-align: center;
  font-family: "Playfair Display", serif;
  background-color: rgba(48, 84, 69, 0.7);
  padding: 40px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translate(-50%, -50%) translateY(0);
    }
    50% {
      transform: translate(-50%, -50%) translateY(-20px);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    width: 100px;
    height: 100px;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin-top: 200px;
  font-family: "Playfair Display", serif;
  font-style: italic;
  color: #e5decc;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5em;
  }

  @media (max-width: 480px) {
    font-size: 1.2em;
  }
`;

const Inicio = () => {
  const navigate = useNavigate();
  const handleVerMasClick = () => {
    navigate("/full-acerca");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    arrows: true,
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Background>
          <CarouselContainer>
            <Slider {...settings}>
              <CarouselItem>
                <Image src="/images/perfil1.1.svg" alt="Perfil 1" />
                <ButtonContainer1>
                  <Button
                    onClick={handleVerMasClick}
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      padding: "12px 25px",
                      fontSize: "1.1rem",
                      backgroundColor: "rgba(48, 84, 69, 0.5)",
                      border: "2px solid #4A6F5E",
                      borderRadius: "25px",
                      color: "#F5EEDC",
                      display: "flex",
                      textDecoration: "none",
                      boxSizing: "border-box",
                      textTransform: "none",
                      transition:
                        "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(245, 238, 220, 0.5)",
                        color: "#305445",
                      },
                      "& svg": {
                        color: "white",
                        marginRight: "8px",
                      },
                      "@media (max-width: 480px)": {
                        padding: "5px 5px",
                        fontSize: "0.7rem",
                        margin: "0",
                      },
                    }}
                  >
                    Ver más
                  </Button>
                </ButtonContainer1>
              </CarouselItem>
              <CarouselItem>
                <VideoComponent src="/images/perfil1.mp4" />
                <OverlayText>
                  <Title>
                    Tomar las riendas de tu bienestar es el mayor acto de amor
                    propio
                  </Title>
                </OverlayText>
              </CarouselItem>
              <CarouselItem>
                <VideoComponent src="/images/perfil2.mp4" />
                <OverlayText>
                  <Title>No pongas en pausa tu felicidad.</Title>
                </OverlayText>
              </CarouselItem>
              <CarouselItem>
                <VideoComponent src="/images/perfil4.mp4" />
                <OverlayText>
                  <Title>Tu momento es ahora</Title>
                </OverlayText>
              </CarouselItem>
            </Slider>
          </CarouselContainer>
        </Background>
      </ThemeProvider>
    </>
  );
};

export default Inicio;

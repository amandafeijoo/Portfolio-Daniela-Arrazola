// src/components/InfiniteScrollGallery.jsx
import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  // Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";

const StyledContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  border: 2px solid #d2b48c;
  border-radius: 8px;
  box-shadow:
    0 0 5px 2px rgba(0,0,0,0.3),
    0 0 10px 4px rgba(34,139,34,0.2),
    0 0 15px 6px rgba(0,0,0,0.2);
  background-color: #f5eedc;
  padding: 30px;
  margin: 20px auto;
  max-width: 1300px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 0 auto;
    max-width: 95%;
    min-height: 550px;
  }
  @media (max-width: 960px) {
    padding: 25px;
    margin: 8px auto;
  }
`;

const serviceImages = [
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704694/2_lzz3ja.png",  path: "/service1" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704694/3_glsfrp.png",  path: "/service2" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704692/4_c9hqpk.png",  path: "/service3" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704695/1_qguckr.png",  path: "/service4" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704693/6_z4mmba.png",  path: "/service5" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704693/7_km6zbh.png",  path: "/service6" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704692/5_x5qbsk.png",  path: "/service7" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704690/8_kpyjfe.png",  path: "/service8" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704690/9_aghbs8.png",  path: "/service9" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704691/10_qrctcf.png", path: "/service10" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704691/11_rilchd.png", path: "/service11" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704690/12_m3faqv.png", path: "/service12" },
  { src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704691/13_u8jng9.png", path: "/service13" },
];

// Sólo dos tamaños en desktop, alternados
const desktopSizes = [
  { width: "180px", height: "260px" },
  { width: "220px", height: "350px" },
];

const InfiniteScrollGallery = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const carouselRef = useRef(null);


  // al montar, scroll arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // animación infinita  y VELOCIDAD 
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: isMobile ? 200 : 40,
        repeat: Infinity,
      },
    });
  }, [controls, isMobile]);

  // rueda vertical → scrollLeft
  const handleWheel = (e) => {
    if (!isMobile && !isTablet && carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  // clic en imagen
  const handleImageClick = (path) => {
    if (path) navigate(path);
  };

  return (
    <StyledContainer
      ref={carouselRef}
      onWheel={handleWheel}
    >
      {/* Título principal */}
      <Typography
        variant="h4"
        sx={{
          color: "#4b3f2f",
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          mb: 1,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Servicios
      </Typography>

      {/* Subtítulo */}
      <Typography
        variant="h6"
        sx={{
          color: "#654828",
          fontFamily: "Playfair Display",
          fontStyle: "italic",
          mb: 3,
          fontSize: { xs: "0.85rem", md: "1.1rem" },
        }}
      >
        Haz clic en un servicio y conoce cómo puedo
      </Typography>

      {/* Flecha animada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgba(75,63,47,0.8)",
            fontWeight: 300,
            mb: 3,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          ↓
        </Typography>
      </motion.div>

      {/* Galería infinita */}
      <Box sx={{ position: "relative", width: "100%", overflow: "hidden",  mb: 3, }}>
        <motion.div style={{ display: "flex" }} animate={controls}>
          {serviceImages.concat(serviceImages).map((imgObj, idx) => {
            // tamaño según breakpoints
            const size = isMobile
              ? { width: "120px", height: "140px" }
              : isTablet
              ? { width: "160px", height: "180px" }
              : desktopSizes[idx % 2];

            // ajusta el w_300 por w_{ancho} para mejor calidad
            const srcHighRes = imgObj.src.replace(
              /w_300/,
              `w_${parseInt(size.width, 10) * (isTablet ? 1.5 : 2)}`
            );

            return (
              <Box
                key={idx}
                onClick={() => handleImageClick(imgObj.path)}
                sx={{
                  flex: "0 0 auto",
                  width: size.width,
                  height: size.height,
                  m: 1,
                  cursor: "pointer",
                  overflow: "hidden",
                  border: "2px solid #d2b48c",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src={srcHighRes}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            );
          })}
        </motion.div>
      </Box>

          {/* Botón cita urgente (comentado) */}
    {/*
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Button
        variant="contained"
        color="error"
        onClick={handleUrgentCall}
        sx={{}}  // si quieres añadir estilos, escríbelos aquí directamente
      >
        Necesito una cita urgente
      </Button>
    </Box>
    */}
  </StyledContainer>
);

};

export default InfiniteScrollGallery;



import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";

// import { FaCertificate } from "react-icons/fa";

const StyledContainer = styled(Box)`
  border: 2px solid #d2b48c;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #f5eedc;
  padding: 30px;
  margin: 20px auto;
  max-width: 1200px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px;
    margin: 0px auto;
    max-width: 95%;
  }

  @media (max-width: 960px) {
    padding: 25px;
    margin: 8px auto;
  }
`;

const images = [
  { src: img("servicios1.svg") },
  { src: img("s1image.svg"), path: "/service1" },
  { src: img("servicios2.svg") },
  { src: img("servicios18.svg") },
  { src: img("s2image.svg"), path: "/service2" },
  { src: img("servicios3.svg") },
  { src: img("s3image.svg"), path: "/service3" },
  { src: img("servicios4.svg") },
  { src: img("s4image.svg"), path: "/service4" },
  { src: img("servicios5.svg") },
  { src: img("s5image.svg"), path: "/service5" },
  { src: img("servicios6.svg") },
  { src: img("s6image.svg"), path: "/service6" },
  { src: img("servicios7.svg") },
  { src: img("servicios15.svg") },
  { src: img("s7image.svg"), path: "/service7" },
  { src: img("servicios8.svg") },
  { src: img("s8image.svg"), path: "/service8" },
  { src: img("servicios9.svg") },
  { src: img("servicios16.svg") },
  { src: img("s9image.svg"), path: "/service9" },
  { src: img("servicios18.svg") },
  { src: img("s10image.svg"), path: "/service10" },
  { src: img("servicios11.svg") },
  { src: img("s11image.svg"), path: "/service11" },
  { src: img("servicios12.svg") },
  { src: img("s12image.svg"), path: "/service12" },
  { src: img("servicios13.svg") },
  { src: img("s13image.svg"), path: "/service13" },
];


const getRandomSize = (index, isMobile, isTablet) => {
  const mobileSizes = [
    { width: "110px", height: "140px" },
    { width: "140px", height: "120px" },
    { width: "140px", height: "135px" },
  ];

  const tabletSizes = [
    { width: "160px", height: "180px" },
    { width: "180px", height: "160px" },
    { width: "200px", height: "190px" },
  ];

  const desktopSizes = [
    { width: "200px", height: "300px" },
    { width: "250px", height: "200px" },
    { width: "300px", height: "225px" },
    { width: "200px", height: "280px" },
    { width: "320px", height: "240px" },
    { width: "150px", height: "150px" },
    { width: "200px", height: "300px" },
    { width: "200px", height: "150px" },
    { width: "240px", height: "360px" },
  ];

  if (isMobile) {
    return mobileSizes[index % mobileSizes.length]; // Si es móvil, usa tamaños pequeños
  } else if (isTablet) {
    return tabletSizes[index % tabletSizes.length]; // Si es tablet, usa tamaños intermedios
  } else {
    return desktopSizes[index % desktopSizes.length]; // Si es escritorio, usa los tamaños grandes
  }
};

const InfiniteScrollGallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const controls = useAnimation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // iPhones y móviles pequeños
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // iPads y tablets

  const handleImageClick = (path) => {
    if (path) navigate(path);
  };

  // Función para manejar la llamada urgente
  const handleUrgentCall = () => {
    Swal.fire({
      title: "Cita urgente",
      text: "¿Deseas llamar al número de urgencia +47 983 15 132?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, llamar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // Utiliza el protocolo tel: para iniciar la llamada
        window.location.href = "tel:+4798315132";
      }
    });
  };

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: isMobile ? 280 : 380, // Animación más rápida en móviles
        repeat: Infinity,
      },
    });
  }, [controls, isMobile]);

  return (
    <StyledContainer>
      <Typography
        variant="h4"
        sx={{
          color: "#4b3f2f",
          fontFamily: "Playfair Display",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Servicios
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#654828",
          fontFamily: "Playfair Display",
          marginBottom: "30px",
          fontStyle: "italic",
          fontSize: { xs: "0.85rem", md: "1.1rem" },
        }}
      >
        Haz clic en un servicio para más información
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgba(75, 63, 47, 0.8)",
            fontWeight: "300",
            position: "relative",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          ↓
        </Typography>
      </motion.div>
      <Box
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 imagen por fila en móviles
            sm: "repeat(2, 1fr)", // 2 en tablets pequeñas
            md: "repeat(3, 1fr)", // 3 en tablets grandes
            lg: "repeat(6, 1fr)", // 6 en pantallas grandes
          },
          alignItems: "center",
          padding: "20px",
          minHeight: "200px", // Para evitar desbordamientos en móviles
        }}
      >
        <motion.div style={{ display: "flex" }} animate={controls}>
          {[...images, ...images].map((img, index) => {
            const size = getRandomSize(index, isMobile, isTablet);
            return (
              <motion.img
                key={index}
                src={img.src}
                alt="Gallery"
                style={{
                  width: size.width,
                  height: size.height,
                  objectFit: "cover",
                  borderRadius: "4px",
                  margin: "4px",
                  border: "2px solid #d2b48c",
                  cursor: img.path ? "pointer" : "default",
                }}
                onClick={() => handleImageClick(img.path)}
              />
            );
          })}
        </motion.div>
      </Box>
      {/* Botón para solicitud de cita urgente */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="error"
          onClick={handleUrgentCall}
          sx={{
            backgroundColor: "#AC5038",
            color: "#f5eedc",
            borderRadius: "10px",
            padding: "10px",
            fontFamily: "Playfair Display",
            fontSize: { xs: "0.85rem", md: "1rem" },
            "&:hover": {
              backgroundColor: "#93362c",
            },
          }}
        >
          Necesito una cita urgente
        </Button>
      </Box>
    </StyledContainer>
  );
};

export default InfiniteScrollGallery;

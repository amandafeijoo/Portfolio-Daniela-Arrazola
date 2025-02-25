import { Box, Typography, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";
// import { FaCertificate } from "react-icons/fa";

// 🟢 Definir un contenedor con los estilos adecuados
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
`;

const images = [
  { src: "/images/servicios1.svg" },
  { src: "/images/s1image.svg", path: "/service1" },
  { src: "images/servicios2.svg" },
  { src: "images/servicios18.svg" },
  { src: "/images/s2image.svg", path: "/service2" },
  { src: "images/servicios3.svg" },
  { src: "/images/s3image.svg", path: "/service3" },
  { src: "images/servicios4.svg" },
  { src: "/images/s4image.svg", path: "/service4" },
  { src: "images/servicios5.svg" },
  { src: "/images/s5image.svg", path: "/service5" },
  { src: "images/servicios6.svg" },
  { src: "/images/s6image.svg", path: "/service6" },
  { src: "images/servicios7.svg" },
  { src: "images/servicios15.svg" },
  { src: "/images/s7image.svg", path: "/service7" },
  { src: "images/servicios8.svg" },
  { src: "/images/s8image.svg", path: "/service8" },
  { src: "images/servicios9.svg" },
  { src: "images/servicios16.svg" },
  { src: "/images/s9image.svg", path: "/service9" },
  { src: "images/servicios18.svg" },
  { src: "/images/s10image.svg", path: "/service10" },
  { src: "images/servicios11.svg" },
  { src: "/images/s11image.svg", path: "/service11" },
  { src: "images/servicios12.svg" },
  { src: "/images/s12image.svg", path: "/service12" },
  { src: "images/servicios13.svg" },
  { src: "/images/s13image.svg", path: "/service13" },
];

const getRandomSize = (index) => {
  const sizes = [
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
  return sizes[index % sizes.length];
};

const InfiniteScrollGallery = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

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
        duration: 380,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <StyledContainer>
      <Typography
        variant="h4"
        sx={{
          color: "#4b3f2f",
          fontFamily: "Playfair Display",
          marginBottom: "10px",
          fontWeight: "bold",
          fontSize: { xs: "2.5rem", md: "3.5rem" },
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
          fontSize: { xs: "0.9rem", md: "1.1rem" },
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
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(6, 1fr)",
          },
          alignItems: "center",
          padding: "20px",
        }}
      >
        <motion.div style={{ display: "flex" }} animate={controls}>
          {[...images, ...images].map((img, index) => {
            const size = getRandomSize(index);
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
            borderRadius:"10px",
            padding:"10px",
            fontFamily: "Playfair Display",
          

            "&:hover": {
              backgroundColor: "#93362c", // Color de fondo al pasar el mouse
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

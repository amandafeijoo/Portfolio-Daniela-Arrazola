import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  { src: "/images/servicios1.svg" },
  { src: "/images/s1image.svg", path: "/service1" },
  { src: "images/servicios2.svg" },
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
  { src: "/images/s7image.svg", path: "/service7" },
  { src: "images/servicios8.svg" },
  { src: "/images/s8image.svg", path: "/service8" },
  { src: "images/servicios9.svg" },
  { src: "/images/s9image.svg", path: "/service9" },
  { src: "images/servicios10.svg" },
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
    { width: "250px", height: "400px" }, // Alto
    { width: "350px", height: "250px" }, // Ancho
    { width: "300px", height: "450px" }, // Alto
    { width: "400px", height: "300px" }, // Ancho
    { width: "250px", height: "350px" }, // Alto
    { width: "450px", height: "300px" }, // Ancho
  ];
  return sizes[index % sizes.length];
};

const InfiniteScrollGallery = () => {
  const navigate = useNavigate();

  const handleImageClick = (path) => {
    navigate(path);
  };

  return (
    <Box sx={{ padding: "20px", position: "relative" }}>
      <Typography
        variant="h4"
        sx={{
          color: "rgba(48, 84, 69, 0.6)",
          fontFamily: "Playfair Display",
          marginBottom: "10px",
          zIndex: 10,
          position: "relative",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "4.5rem",
        }}
      >
        Servicios
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#654828",
          fontFamily: "Playfair Display",
          marginBottom: "60px",
          zIndex: 10,
          position: "relative",
          width: "100%",
          textAlign: "center",
          fontSize: "1rem",
          fontStyle: "italic",
        }}
      >
        Haz clic en un servicio para más información
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mt: -5,
            marginBottom: "20px",
            fontWeight: "300",
            textShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            position: "relative",
            width: "100%",
            textAlign: "center",
            fontSize: "2rem",
          }}
        >
          ↓
        </Typography>
      </motion.div>
      <Box
        sx={{
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <motion.div
          style={{ display: "flex" }}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }} // Se mueve a la izquierda
          transition={{
            ease: "linear",
            duration: 380, // Velocidad de desplazamiento más lenta
            repeat: Infinity,
          }}
        >
          {/* Generar imágenes pegadas */}
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
                  objectFit: "cover", // Evita distorsión
                  borderRadius: "0px",
                  margin: "0", // Asegura que no haya espacios entre imágenes
                  border: "1px solid #d2b48c",
                  cursor: "pointer",
                }}
                onClick={() => handleImageClick(img.path)}
              />
            );
          })}
        </motion.div>
      </Box>
    </Box>
  );
};

export default InfiniteScrollGallery;

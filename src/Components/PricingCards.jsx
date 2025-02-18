import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

// Lista de planes de terapia
const plans = [
  {
    title: "Consulta Individual",
    price: "80€",
    description: "Valor por sesión",
  },
  {
    title: "Paquete de 4 sesiones",
    price: "300€",
    description: "Paquete con descuento incluído",
  },
  {
    title: "Terapia de pareja",
    price: "105€",
    description: "Valor por sesión",
  },
];

const PricingCards = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "40px",
          height: "65vh",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderRadius: "15px",
          margin: "0 auto",
          border: "2px solid #d2b48c",
          boxShadow:
            "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Fondo de video opcional */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.6,
          }}
        >
          <source src="/images/Precios-3.mp4" type="video/mp4" />
        </video>
  
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} // Efecto al pasar el mouse
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              padding: "30px",
              border: "2px solid #d2b48c",
              borderRadius: "10px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              textAlign: "center",
              minWidth: "250px",
              maxWidth: "300px",
              color: "rgba(48, 84, 69, 0.6)",
              height: "100%",
              zIndex: index === Math.floor(plans.length / 2) ? 2 : 1, // Ajuste del zIndex
              transform:
                index === Math.floor(plans.length / 2)
                  ? "none"
                  : index < Math.floor(plans.length / 2)
                  ? "perspective(2000px) rotateY(10deg) translateZ(-100px) translateX(-50px)" // Ajuste de la perspectiva para el izquierdo
                  : "perspective(2000px) rotateY(-10deg) translateZ(-100px) translateX(50px)", // Ajuste de la perspectiva para el derecho
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ fontFamily: "Playfair Display", marginTop: "60px" }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                mt: 2,
                color: "rgba(48, 84, 69, 0.8)",
                fontFamily: "Playfair Display",
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, color: "#666", fontFamily: "Playfair Display" }}
            >
              {plan.description}
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                color: "#4b3f2f",
                border: "2px solid #4b3f2f",
                borderRadius: "30px",
                padding: "12px 24px",
                textTransform: "none",
                fontFamily: "Playfair Display",
                fontWeight: "500",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(48, 84, 69, 0.8)",
                  color: "white",
                },
              }}
            >
              Reservar una cita
            </Button>
          </motion.div>
        ))}
      </Box>
    );
  };
  
  export default PricingCards;
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";

const plans = [
  {
    title: "Consulta Individual",
    price: "80€",
    description: "Valor por sesión",
  },
  {
    title: "Paquete de 4 sesiones",
    price: "300€",
    description: "Paquete con descuento incluido",
  },
  {
    title: "Terapia de pareja",
    price: "105€",
    description: "Valor por sesión",
  },
];

const PricingCards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/reserva");

  return (
    <Box
      sx={{
        position: "relative",
        padding: "60px 15px 40px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* 🎥 Video de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: { xs: "500px", sm: "600px", md: "100%" },
          maxWidth: "100vw",
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
            border: "2px solid rgb(67, 60, 54)",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          <source src={img("Precios-4.mp4")} type="video/mp4" />
        </video>
      </Box>

      {/* 🧾 Título */}
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          color: "#2c2c2c",
          mb: 5,
          position: "relative",
          zIndex: 2,
        }}
      >
        Precios
      </Typography>

      {/* 💳 Tarjetas de planes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          justifyItems: "center",
          alignItems: "stretch",
          gap: "20px",
          zIndex: 2,
          position: "relative",
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid #c2a97c",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "100%",
              maxWidth: "300px",
              minHeight: "300px",
              color: "#4b3f2f",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "1.3rem", md: "1.8rem" },
              }}
            >
              {plan.title}
            </Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                color: "#355E3B",
                fontFamily: "Playfair Display",
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                marginBottom: "10px",
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Playfair Display",
                opacity: 0.8,
              }}
            >
              {plan.description}
            </Typography>
          </motion.div>
        ))}
      </Box>

      {/* 👉 Botón único abajo */}
      <Box sx={{ mt: 5, textAlign: "center", zIndex: 2, position: "relative" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4A6F5E",
            px: 4,
            py: 1.5,
            borderRadius: "25px",
            fontFamily: "Playfair Display",
            fontSize: "1.1rem",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#3b5e50",
            },
          }}
          onClick={handleNavigate}
        >
          Reservar una cita
        </Button>
      </Box>
    </Box>
  );
};

export default PricingCards;

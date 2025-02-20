import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import "@fontsource/playfair-display";

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
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "60px 20px",
        minHeight: "80vh",
        width: "100%",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, 
          opacity: 0.5, 
        }}
      >
        <source src="/images/Precios-4.mp4" type="video/mp4" />
      </video>

      {plans.map((plan, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.8)", 
            border: "2px solid #c2a97c", 
            padding: "40px",
            borderRadius: "15px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "100%",
            maxWidth: "320px",
            color: "#4b3f2f",
            zIndex: 2, 
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ fontFamily: "Playfair Display", fontSize: "1.8rem" }}
          >
            {plan.title}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{
              color: "#355E3B",
              fontFamily: "Playfair Display",
              fontSize: "2.2rem",
              marginBottom: "10px",
            }}
          >
            {plan.price}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              fontFamily: "Playfair Display",
              opacity: 0.8,
              marginBottom: "20px",
            }}
          >
            {plan.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c2a97c",
              color: "#ffffff",
              border: "2px solid #8c6b52",
              borderRadius: "25px",
              padding: "12px 24px",
              textTransform: "none",
              fontFamily: "Playfair Display",
              fontSize: "1.1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#8c6b52",
                color: "#f5eedc",
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

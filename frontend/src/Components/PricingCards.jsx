import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleNavigate = () => {
    navigate("/reserva");
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: isDesktop ? "flex" : "grid",
        flexDirection: isDesktop ? "row" : "column",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "40px 15px",
        minHeight: "75vh",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {/* Video de fondo ajustado */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: isMobile ? "800px" : "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          zIndex: -1,
          borderRadius: isMobile ? "10px" : "0",
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
            border: "2px solidrgb(67, 60, 54)",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)",
          }}
        >
          <source src="/images/Precios-4.mp4" type="video/mp4" />
        </video>
      </Box>

      {plans.map((plan, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            border: "2px solid #c2a97c",
            padding: isMobile ? "20px" : "40px",
            borderRadius: "15px",
            boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "100%",
            maxWidth: isMobile ? "90vw" : isTablet ? "320px" : "350px",
            color: "#4b3f2f",
            zIndex: 2,
            margin: "0 auto",
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
              padding: isMobile ? "8px 18px" : "12px 24px",
              textTransform: "none",
              fontFamily: "Playfair Display",
              fontSize: { xs: "1rem", md: "1.1rem" },
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgb(111, 151, 140)",
                color: "#f5eedc",
                border: "2px solid #f5eedc",
              },
            }}
            onClick={handleNavigate}
          >
            Reservar una cita
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

export default PricingCards;

import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
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
  const videoRef = useRef();
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.2 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNavigate = () => navigate("/reserva");

  return (
    <Box
      sx={{
        position: "relative",
        padding: "60px 15px 40px",
        minHeight: "75vh",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        borderRadius: "15px",
        overflow: "hidden",
      }}
    >
      {/* 🎥 Video de fondo */}
      <Box
        ref={videoRef}
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: isMobile ? "100vh" : "100%",
          minHeight: isMobile ? "100vh" : undefined,
          maxWidth: "100vw",
          overflow: "hidden",
          zIndex: -1,
          borderRadius: isMobile ? "10px" : "0",
        }}
      >
        {loadVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            onCanPlay={() => setVideoLoaded(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: videoLoaded ? 0.6 : 0,
              border: "2px solid rgb(67, 60, 54)",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.9)",
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <source
              src="https://res.cloudinary.com/dhikp5azp/video/upload/f_auto,q_auto:eco,w_1920,h_1080,c_fill/v1745569413/Precios-5_y637ya.mp4"
              type="video/mp4"
            />
          </video>
        ) : null}
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
          zIndex: 2,
          position: "relative",
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "2rem",
            lg: "3rem",
          },
        }}
      >
        Precios
      </Typography>

      {/* 💳 Tarjetas de planes */}
      <Box
        sx={{
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
          zIndex: 2,
        }}
      >
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.9)",
              border: "2px solid #c2a97c",
              paddingTop: isMobile ? "25px" : "40px",
              paddingBottom: isMobile ? "25px" : "40px",
              paddingLeft: "15px",
              paddingRight: "15px",
              borderRadius: "15px",
              boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              width: "100%",
              maxWidth: isMobile ? "75vw" : isTablet ? "300px" : "350px",
              minHeight: isMobile ? "145px" : "330px", // un poco más de altura ** agranda o hace mas pequeno el video
              color: "#4b3f2f",
              margin: "0 auto",
              zIndex: 2,
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", md: "1.8rem" },
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
                fontSize: { xs: "1.2rem", md: "2.2rem" },
                marginBottom: { xs: "4px", md: "10px" },
              }}
            >
              {plan.price}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.7rem", md: "1rem" },
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
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            borderRadius: "25px",
            fontFamily: "Playfair Display",
            fontSize: { xs: "0.9rem", sm: "1.1rem" },
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

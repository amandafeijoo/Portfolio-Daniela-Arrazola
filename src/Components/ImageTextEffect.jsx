import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display"; 

const ImageTextEffect = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/reserva");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5eedc",
        padding: "40px",
        gap: "30px",
      }}
    >
      {/* Contenedor del Video y Botón */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "15px",
          width: "100%",
          maxWidth: "450px",
          margin: "0 auto",
          top: "30px",
        }}
      >
        <motion.video
          src="/images/terapias.mp4"
          alt="Terapias Video"
          style={{
            width: "100%",
            borderRadius: "15px",
            objectFit: "cover",
            transition: "all 0.5s ease-in-out",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          loading="lazy"
          autoPlay
          loop
          muted
        />
        <Button
          variant="contained"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(5px)",
            color: "#4b3f2f",
            fontSize: "1.2rem",
            fontFamily: "Playfair Display",
            fontWeight: "500",
            top: "-102%",
            left: "23%",
            padding: "12px 24px",
            textTransform: "none",
            borderRadius: "30px",
            transition: "all 0.3s ease",
            border: "2px solid #4b3f2f",
            marginLeft: "10px", 
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
            },
          }}
          onClick={handleNavigate}
        >
          Reservar una cita
        </Button>       
      </motion.div>

      {/* Box con Texto y Fondo */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          maxWidth: "450px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "rgba(48, 84, 69, 0.3)",
            border: "2px solid #557c70",
            padding: "30px",
            borderRadius: "15px",
            color: "#4b3f2f",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(210, 180, 140, 0.9), 0 6px 20px rgba(0, 0, 0, 0.19)", // Agrega el boxShadow mezclado
          }}
        >
          <Typography
            variant="h4"
            sx={{
                color: "rgba(48, 84, 69, 0.6)",
              fontWeight: "bold",
              mb: 2,
              fontFamily: "Playfair Display, serif",
              fontSize: "2.5rem",
            }}
          >
            Terapia
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              textAlign: "justify",
              fontFamily: "Playfair Display, serif",
            }}
          >
            La terapia no solo te enseña a gestionar dificultades personales, sino también un espacio donde te acompaño a
            priorizar lo que realmente importa: tu bienestar.
            Cada persona tiene su propio ritmo y su propia historia, mi compromiso como profesional es respetarlos. 
            Es un momento para ti, con una oportunidad única para conocerte y atender tus propias necesidades. Desde ese lugar aprenderás a tomar decisiones más conscientes e informadas.

            Imagina que tu bienestar es un rompecabezas: tus pensamientos, emociones, entorno, historia de vida y hábitos se conectan para influir en cómo te sientes. 
            Con el enfoque Cognitivo Conductual, trabajaremos juntos en identificar y ajustar esas piezas que te permitirán sentirte mejor contigo mismo. 
            Te ofrezco herramientas prácticas basadas en evidencia científica que realmente funcionan en tu día a día. No necesitas “estar preparado”, solo estar comprometido y ser paciente con tu propio proceso.
          </Typography>
        </div>
      </motion.div>
    </Box>
  );
};

export default ImageTextEffect;
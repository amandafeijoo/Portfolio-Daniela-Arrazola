import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateReservar = () => {
    navigate("/reserva");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh", // Ocupa toda la altura de la ventana
        overflow: "hidden",
      }}
    >
      <Box
        component="video"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", 
          zIndex: -1, // Coloca el video detrás de otros elementos
        }}
        autoPlay
        loop
        muted
      >
        <source src="images/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "92%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <Button
          variant="text"
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "500",
            textTransform: "none",
            fontFamily: "Playfair Display",
          }}
          onClick={handleNavigateReservar}
        >
          Reservar una cita
        </Button>
        {/* Flecha animada con framer-motion */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Typography variant="h4" sx={{ color: "white", mt: 0 }}>
            ↓
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;

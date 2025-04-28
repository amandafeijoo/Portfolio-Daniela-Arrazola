import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";

const ImageTextEffect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleNavigate = () => {
    navigate("/reserva");
  };

  return (
    <Box
      sx={{
        width: "100%", // 🖐️ ancho total pantalla
        backgroundColor: "#f5eedc", 
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          minHeight: "100vh",
          padding: { xs: "20px", md: "40px" },
          gap: "5px",
          maxWidth: "1200px", 
          width: "100%", 
        }}
      >
        {/* Contenedor del Video */}
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
          }}
        >
          <motion.video
            poster={img("poster-terapia.jpg")}
            preload="none"
            autoPlay
            loop
            muted
            playsInline
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: "100%",
              height: isMobile ? "auto" : "100%",
              maxHeight: isMobile ? "220px" : "none",
              borderRadius: "15px",
              objectFit: "cover",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            <source src={img("terapias.mp4")} type="video/mp4" />
          </motion.video>

          {/* BOTÓN SOLO VISIBLE EN MÓVIL */}
          <Box
            sx={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                backgroundColor: "rgb(120, 150, 131)",
                color: "#f5eedc",
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontFamily: "Playfair Display",
                fontWeight: "500",
                padding: "8px 18px",
                textTransform: "none",
                borderRadius: "30px",
                border: "2px solid rgb(211, 190, 151)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#6F8979",
                  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
              onClick={handleNavigate}
            >
              Reservar una cita
            </Button>
          </Box>
        </motion.div>

        {/* Contenedor del texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              background: "rgba(48, 84, 69, 0.3)",
              marginRight: { xs: "0", md: "20px" },
              border: "2px solid #557c70",
              padding: { xs: "20px", md: "30px" },
              borderRadius: "15px",
              color: "#4b3f2f",
              boxShadow:
                "0 4px 8px rgba(210, 180, 140, 0.9), 0 6px 20px rgba(0, 0, 0, 0.19)",
              position: "relative", 
              maxWidth: { xs: "100%", md: "450px" }, 
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "rgba(48, 84, 69, 0.6)",
                fontWeight: "bold",
                mb: 2,
                fontFamily: "Playfair Display, serif",
                fontSize: { xs: "1.6rem", md: "2.5rem" },
              }}
            >
              Terapia
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.8rem", md: "1rem" },
                textAlign: "justify",
                fontFamily: "Playfair Display, serif",
              }}
            >
              La terapia no solo te enseña a gestionar dificultades personales,
              sino también un espacio donde te acompaño a priorizar lo que
              realmente importa: tu bienestar. Cada persona tiene su propio
              ritmo y su propia historia, mi compromiso como profesional es
              respetarlos. Es un momento para ti, con una oportunidad única para
              conocerte y atender tus propias necesidades. Desde ese lugar
              aprenderás a tomar decisiones más conscientes e informadas.
              <br />
              Imagina que tu bienestar es un rompecabezas: tus pensamientos,
              emociones, entorno, historia de vida y hábitos se conectan para
              influir en cómo te sientes. Con el enfoque Cognitivo Conductual,
              trabajaremos juntos en identificar y ajustar esas piezas que te
              permitirán sentirte mejor contigo mismo. Te ofrezco herramientas
              prácticas basadas en evidencia científica que realmente funcionan
              en tu día a día. No necesitas “estar preparado”, solo estar
              comprometido y ser paciente con tu propio proceso.
            </Typography>
            {/* BOTÓN SOLO VISIBLE EN WEB */}
            <Box
              sx={{
                width: "100%",
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="contained"
                component={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  backgroundColor: "rgb(120, 150, 131)",
                  color: "#f5eedc",
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  fontFamily: "Playfair Display",
                  fontWeight: "500",
                  padding: "8px 18px",
                  textTransform: "none",
                  borderRadius: "30px",
                  border: "2px solid rgb(211, 190, 151)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#6F8979",
                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
                onClick={handleNavigate}
              >
                Reservar una cita
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default ImageTextEffect;

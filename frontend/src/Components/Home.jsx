import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";

const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef();
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Carga el video solo si está en pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.25 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNavigateReservar = () => {
    navigate("/reserva");
  };

  return (
    <Box
      ref={videoRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        "@media (max-width: 600px)": {
          height: "35vh",
        },
      }}
    >
      {loadVideo ? (
        <Box
          component="video"
          poster={img("poster.jpg")}
          preload="none"
          playsInline
          autoPlay
          muted
          loop
          onCanPlay={() => setVideoLoaded(true)}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: videoLoaded ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
            "@media (max-width: 600px)": {
              height: "120%",
              width: "100%",
              objectFit: "contain",
              top: "-10%",
            },
          }}
        >
          <source
            src="https://res.cloudinary.com/dhikp5azp/video/upload/f_auto,q_auto:eco,w_1920,h_1080,c_fill/v1746696216/Cada_preocupaci%C3%B3n_es_solo_una_parte_del_paisaje-8_slf58a.mp4"
            type="video/mp4"
          />
        </Box>
      ) : (
        <Box
          component="img"
          src={img("poster.jpg")}
          alt="Fondo naturaleza"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
      )}

      {/* Texto + botón */}
      <Box
        sx={{
          position: "absolute",
          top: "92%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          "@media (max-width: 600px)": {
            top: "80%",
          },
        }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              mt: 0,
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            ↓
          </Typography>
        </motion.div>
        <Button
          variant="text"
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "500",
            textTransform: "none",
            fontFamily: "Playfair Display",
            "@media (max-width: 600px)": {
              fontSize: "0.5rem",
              marginTop: "2px",
            },
          }}
          onClick={handleNavigateReservar}
        >
          Reserva aquí con un click!
        </Button>
      </Box>
    </Box>
  );
};

export default Home;


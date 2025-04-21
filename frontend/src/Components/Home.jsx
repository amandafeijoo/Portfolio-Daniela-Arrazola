import { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";


const Home = () => {
  const navigate = useNavigate();
  const videoRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
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
      {visible ? (
        <Box
          component="video"
          poster={img("poster.jpg")}
          preload="none"
          playsInline
          autoPlay
          muted
          loop
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: 0.99, // 🔄 para evitar que sea LCP
            "@media (max-width: 600px)": {
              height: "120%",
              width: "100%",
              objectFit: "contain",
              top: "-10%",
            },
          }}
        >
          <source src={img("home.mp4")} type="video/mp4" />
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


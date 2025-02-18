import React, { useState, useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  faCreditCard,
  faClock,
  faQuestionCircle,
  faVideo,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const InfoBoxesReserva = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const handleNavigate = () => {
    navigate("/preguntas-frecuentes");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: 1,
        marginBottom: 4,
        display: "flex",
        flexWrap: "nowrap",
        overflowX: "auto",
      }}
    >
      <Grid
        item
        xs={12}
        md={3}
        sx={{ flex: "0 0 auto", minWidth: 400, maxWidth: 1000 }}
      >
        <Box
          sx={{
            width: "100%",
            p: 3,
            background: "rgba(255, 255, 255, 0.4)",
            borderRadius: "25px",
            boxShadow:
              "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            fontFamily: "Playfair Display",
            textAlign: "center",
            height: 280,
            color: "#654828",
            transform:
              direction === "down" ? "translateX(-100px)" : "translateX(100px)",
            transition: "transform 0.5s ease",
          }}
        >
          <FontAwesomeIcon
            icon={faClock}
            size="3x"
            style={{ color: "#4a6f5e" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            Duración por sesión
          </Typography>
          <Typography sx={{ fontFamily: "Playfair Display" }}>
            ⏱ 60 minutos por sesión.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3} sx={{ flex: "0 0 auto", minWidth: 400 }}>
        <Box
          sx={{
            width: "100%",
            height: 280,
            p: 3,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "2px solid #d2b48c",
            borderRadius: "25px",
            boxShadow:
              "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            fontFamily: "Playfair Display",
            textAlign: "center",
            color: "#654828",
            transform:
              direction === "down" ? "translateX(-100px)" : "translateX(100px)",
            transition: "transform 0.5s ease",
          }}
        >
          <FontAwesomeIcon
            icon={faCreditCard}
            size="3x"
            style={{ color: "#4a6f5e" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            Métodos de pago
          </Typography>
          <Typography sx={{ fontFamily: "Playfair Display" }}>
            Opciones de terapia disponibles (individual, pareja,paquete de 4
            sesiones.)
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: 2,
            }}
          >
            <img
              src="/images/VippsIcon.svg"
              alt="Vipps"
              style={{ height: 35 }}
            />
            <img src="/images/VisaIcon.png" alt="Visa" style={{ height: 25 }} />
            <img
              src="/images/BizumIcon.svg"
              alt="Bizum"
              style={{ height: 25 }}
            />
            <img
              src="/images/MastercardIcon.svg"
              alt="Paypal"
              style={{ height: 25 }}
            />
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={3} sx={{ flex: "0 0 auto", minWidth: 400 }}>
        <Box
          sx={{
            width: "100%",
            height: 280,
            p: 3,
            background: "rgba(255, 255, 255, 0.4)",
            border: "2px solid #d2b48c",
            borderRadius: "25px",
            boxShadow:
              "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            fontFamily: "Playfair Display",
            textAlign: "center",
            color: "#654828",
            transform:
              direction === "down" ? "translateX(-100px)" : "translateX(100px)",
            transition: "transform 0.5s ease",
          }}
        >
          <FontAwesomeIcon
            icon={faQuestionCircle}
            size="3x"
            style={{ color: "#4a6f5e" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            ¿Tienes dudas sobre la terapia, el pago o cancelaciones?
          </Typography>
          <Typography sx={{ fontFamily: "Playfair Display" }}>
            Consulta nuestras preguntas frecuentes sobre reservas, métodos de
            pago y sesiones.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Playfair Display",
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
            onClick={handleNavigate}
          >
            Preguntas frecuentes
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={3} sx={{ flex: "0 0 auto", minWidth: 400 }}>
        <Box
          sx={{
            width: "100%",
            height: 280,
            p: 3,
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "2px solid #d2b48c",
            borderRadius: "25px",
            boxShadow:
              "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
            fontFamily: "Playfair Display",
            textAlign: "center",
            color: "#654828",
            transform:
              direction === "down" ? "translateX(-100px)" : "translateX(100px)",
            transition: "transform 0.5s ease",
          }}
        >
          <FontAwesomeIcon
            icon={faVideo}
            size="3x"
            style={{ color: "#4a6f5e" }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              marginTop: 1,
            }}
          >
            ¿En qué platafoma realizamos la consulta online?
          </Typography>
          <Typography sx={{ fontFamily: "Playfair Display" }}>
            A través de la plataforma online Zoom.
          </Typography>
        </Box>
        {/* <Grid item xs={12} md={3} sx={{ flex: '0 0 auto', minWidth: 400 }}>
  <Box
    sx={{
      width: '100%',
      height: 280,
      p: 3,
      background: "rgba(255, 255, 255, 0.4)",      
      border: "2px solid #d2b48c",
      borderRadius: "25px",
      boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      fontFamily: "Playfair Display",
      textAlign: 'center',
      color: '#654828',
      transform: direction === "down" ? 'translateX(-100px)' : 'translateX(100px)',
      transition: 'transform 0.5s ease'
    }}
  >
    <FontAwesomeIcon icon={faLanguage} size="3x" style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: 1 }} />
    <Typography variant="h6" sx={{ fontFamily: "Playfair Display", fontWeight: 'bold', marginTop: 1 }}>
      ¿En qué idiomas imparto Terapia?
    </Typography>
    <Typography sx={{ fontFamily: "Playfair Display", marginTop: 1 }}>
  Noruego 🇳🇴 e Inglés 🇬🇧
</Typography>
  </Box>
</Grid> */}
      </Grid>
    </Grid>
  );
};

export default InfoBoxesReserva;

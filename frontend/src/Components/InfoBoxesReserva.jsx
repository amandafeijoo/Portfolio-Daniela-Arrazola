import { useState, useEffect } from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import {
  faCreditCard,
  faClock,
  faQuestionCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const InfoBoxesReserva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("down");

  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(max-width: 960px)");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setDirection(currentScrollY > scrollY ? "down" : "up");
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const handleNavigate = () => navigate("/preguntas-frecuentes");

  return (
    <Grid
      container
      spacing={2}
      sx={{
        marginTop: { xs: 2, md: 9 },
        marginBottom: { xs: 2, md: 8 },
        display: "flex",
        flexWrap: isTablet ? "wrap" : "nowrap",
        justifyContent: "center",
        alignItems: "center",
        overflowX: isTablet ? "auto" : "visible",
      }}
    >
      {[
        {
          icon: faClock,
          title: "Duración por sesión",
          text: "⏱ 60 minutos por sesión.",
          bg: "rgb(220, 209, 193)",
          color: "#654828",
        },
        {
          icon: faCreditCard,
          title: "Métodos de pago",
          text: "Opciones de terapia disponibles (individual, pareja, paquete de 4 sesiones).",
          bg: "rgba(255, 255, 255, 0.7)",
          color: "#654828",
          paymentIcons: [
            { src: "/images/VippsIcon.svg", alt: "Vipps" },
            { src: "/images/VisaIcon.png", alt: "Visa" },
            { src: "/images/BizumIcon.svg", alt: "Bizum" },
            { src: "/images/MastercardIcon.svg", alt: "Paypal" },
          ],
        },
        {
          icon: faQuestionCircle,
          title: "¿Tienes dudas sobre la terapia, el pago o cancelaciones?",
          text: "Consulta nuestras preguntas frecuentes sobre reservas, métodos de pago y sesiones.",
          bg: "rgb(220, 209, 193)",
          color: "#654828",
          link: "Preguntas frecuentes",
        },
        {
          icon: faVideo,
          title: "¿En qué plataforma realizamos la consulta online?",
          text: "A través de la plataforma online Zoom.",
          bg: "rgba(255, 255, 255, 0.7)",
          color: "#654828",
        },
      ].map((item, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          sx={{
            flex: "0 0 auto",
            minWidth: { xs: "100%", sm: 400, md: 400 },
            maxWidth: "100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: { xs: "-3%", sm: 0 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              p: 3,
              height: 280,
              background: item.bg,
              borderRadius: "25px",
              border: item.bg.includes("rgb") ? "2px solid #d2b48c" : "none",
              boxShadow:
                "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              fontFamily: "Playfair Display",
              textAlign: "center",
              color: item.color,
              transform:
                isMobile || isTablet
                  ? "none"
                  : direction === "down"
                  ? "translateX(-100px)"
                  : "translateX(100px)",
              transition: "transform 0.5s ease",
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              size="3x"
              style={{ color: "rgb(182, 155, 120)" }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 1 }}>
              {item.title}
            </Typography>
            <Typography>{item.text}</Typography>
            {item.paymentIcons && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 2,
                }}
              >
                {item.paymentIcons.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    style={{ height: 25 }}
                  />
                ))}
              </Box>
            )}
            {item.link && (
              <Typography
                sx={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  fontWeight: "bold",
                  marginTop: 1,
                }}
                onClick={handleNavigate}
              >
                {item.link}
              </Typography>
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoBoxesReserva;

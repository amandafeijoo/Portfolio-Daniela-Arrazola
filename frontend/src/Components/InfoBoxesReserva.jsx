import { useRef } from "react";
import { Grid, Box, Typography, useMediaQuery } from "@mui/material";
import {
  faCreditCard,
  faClock,
  faQuestionCircle,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { img } from "../utils/imagePath";

const InfoBoxesReserva = () => {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");

  const handleNavigate = () => navigate("/preguntas-frecuentes");

  const handleWheel = (e) => {
    if (!isMobile && !isTablet && carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };

  const items = [
    {
      icon: faClock,
      title: "Duración por sesión",
      text: "⏱ 45-50 minutos",
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
        { src: img("VippsIcon.svg"), alt: "Vipps" },
        { src: img("VisaIcon.png"), alt: "Visa" },
        { src: img("BizumIcon.svg"), alt: "Bizum" },
        { src: img("MastercardIcon.svg"), alt: "Mastercard" },
        { src: img("americanexpressicon.svg"), alt: "American Express" },
        { src: img("paypal.svg"), alt: "Paypal" },
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
      text: "A través de Zoom",
      bg: "rgba(255, 255, 255, 0.7)",
      color: "#654828",
    },
  ];

  return (
    <Box
      ref={carouselRef}
      onWheel={handleWheel}
      sx={{
        width: "100%",
        overflowX: "scroll",
        py: { xs: 2, md: 8 },
        "&::-webkit-scrollbar": { height: 6 },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ccc",
          borderRadius: 3,
        },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {items.map((item, i) => {
          const isFirst = i === 0;
          const isLast = i === items.length - 1;

          return (
            <Grid
              item
              key={i}
              sx={{
                flex: "0 0 auto",
                maxWidth: { xs: 180, sm: 220, md: 300 },
                minWidth: { xs: 300, sm: 220, md: 470 },
                pr: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: { xs: 278, sm: 200, md: 290 },
                  width: "100%",
                  p: 2,
                  background: item.bg,
                  borderRadius: "20px",
                  border: item.bg.includes("#") ? "2px solid #d2b48c" : "none",
                  boxShadow:
                    "0 0 5px 2px rgba(0,0,0,0.7), 0 0 10px 4px rgba(34,139,34,0.2), 0 0 15px 6px rgba(0,0,0,0.2)",
                  textAlign: "center",
                  color: item.color,
                  fontFamily: "Playfair Display",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ mt: { xs: 1, sm: 1.5, md: 2 } }}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size="3x"
                    style={{ color: "rgb(182,155,120)" }}
                  />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.1rem" },
                    mt: isFirst || isLast ? 5 : 4,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "0.75rem", sm: "0.85rem", md: "0.9rem" },
                    mt: isFirst || isLast ? 1 : 0.5,
                  }}
                >
                  {item.text}
                </Typography>

                {item.paymentIcons && (
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    {item.paymentIcons.map((ico, j) => (
                      <Box
                        key={j}
                        component="img"
                        src={ico.src}
                        alt={ico.alt}
                        sx={{
                          width: { xs: 40, sm: 48, md: 56 },
                          height: { xs: 40, sm: 48, md: 56 },
                          objectFit: "contain",
                        }}
                      />
                    ))}
                  </Box>
                )}

                {item.link && (
                  <Typography
                    onClick={handleNavigate}
                    sx={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      mt: 1,
                    }}
                  >
                    {item.link}
                  </Typography>
                )}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default InfoBoxesReserva;

import { useEffect, useRef, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "@fontsource/playfair-display";
// import { img } from "../utils/imagePath";

const ContenedorPadre = styled.div`
  position: relative;
  width: 85%;
  min-height: 750px;
  margin: 40px auto;
  padding: 40px;
  border: 2px solid #d2b48c;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f5eedc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5);

  /* TABLET */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 95%;
    padding: 30px;
    min-height: 650px;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    border-radius: 2;
    box-shadow: none;
    border: 3px solid #d2b48c;
    overflow: hidden;
  }
`;

const ContenedorPrincipal1 = styled.div`
  position: relative;
  width: 40%;
  margin: 50px auto 40px 80px;
  border: 3px solid #d2b48c;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 1.5s ease-out;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5);
  /* TABLET: un poco más ancho y centrado */
  @media (max-width: 1024px) and (min-width: 769px) {
    width: 60%;
    margin: 40px auto;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    width: 70%;
    margin: 20px auto;
    transform: none !important;
    margin-bottom: -50px;

    /* → cuadrado y redondo: */
    aspect-ratio: 1 / 1; /* fuerza 1:1 */
    border-radius: 50%; /* círculo */
  }
`;

const ContenedorPrincipal2 = styled.div`
  position: absolute;
  top: 90px;
  right: 120px;
  width: 40%;
  padding: 10px;
  border: 3px solid #d2b48c;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 1.5s ease-out;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 15px 6px rgba(0, 0, 0, 0.2);

  /* TABLET */
  @media (max-width: 1024px) and (min-width: 769px) {
    top: 140px;
    right: 40px;
    width: 50%;
  }

  /* MOBILE */
  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
  }
`;

const ImagenDaniela = () => {
  const contenedor1Ref = useRef(null);
  const contenedor2Ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // 📌 Detect screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    if (!isMobile) {
      const contenedor1 = contenedor1Ref.current;
      const contenedor2 = contenedor2Ref.current;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              entry.target.classList.remove("hidden");
            } else {
              entry.target.classList.add("hidden");
              entry.target.classList.remove("visible");
            }
          });
        },
        { threshold: 0.4 }
      );

      if (contenedor1) observer.observe(contenedor1);
      if (contenedor2) observer.observe(contenedor2);

      return () => {
        window.removeEventListener("resize", handleResize);

        if (contenedor1) observer.unobserve(contenedor1);
        if (contenedor2) observer.unobserve(contenedor2);
      };
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        overflow: { xs: "visible", md: "hidden" },
        pb: { xs: 0, md: 0 },
        boxSizing: "border-box",
      }}
    >
      <ContenedorPadre>
        <ContenedorPrincipal1
          ref={contenedor1Ref}
          className={!isMobile ? "hidden" : ""}
        >
          <img
            src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1600/v1746396624/BAF17E77-9F94-4A6A-A2BD-790A98334D42_1_105_c_n2rcpc.jpg"
            alt="Daniela"
            style={{ width: "100%", borderRadius: "15px" }}
            loading="lazy"
          />
        </ContenedorPrincipal1>
        <ContenedorPrincipal2
          ref={contenedor2Ref}
          className={!isMobile ? "hidden" : ""}
        >
          <div
            style={{
              background: isMobile ? "transparent" : "#f5eedc",
              borderRadius: isMobile ? "0px" : "15px",
              padding: isMobile ? "20px" : "30px",
              textAlign: "justify",
              fontFamily: '"Playfair Display", serif',
              lineHeight: 1.6,
              color: "rgb(75, 60, 45)",
            }}
          >
            {/* ─── Título en negrita ─── */}
            <Typography
              component="h2"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 600,
                fontSize: { xs: "1.1rem", sm: "1.3rem" },
                mt: 4,
                mb: 4,
                textAlign: { xs: "center", sm: "center" },
                lineHeight: 1.2,
              }}
            >
              ¿Te sientes emocionalmente agotado?
            </Typography>

            {/* ─── Texto principal ─── */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                mb: 3,
              }}
            >
              Hola, soy Daniela, psicóloga especializada en{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                límites y regulación emocional{" "}
              </Box>{" "}
              . Si estás aquí, puede que estés{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                cansado de cuidar a todos menos a ti{" "}
              </Box>{" "}
              , que te cueste decir “no” sin culpa o que te sientas desconectado
              de lo que antes te hacía bien. Quizás estás atravesando ansiedad,
              tristeza, confusión o simplemente el deseo profundo de{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                recuperar tu bienestar emocional.{" "}
              </Box>{" "}
              En este espacio terapéutico te acompaño a reconectar contigo, a
              poner palabras a lo que duele y a construir relaciones más sanas
              contigo y con los demás.{" "}
              <Box component="span" sx={{ fontWeight: "bold" }}>
                No estás solo.{" "}
              </Box>{" "}
              Aquí empieza tu proceso de volver a ti.
              <br /> <br />
              Conoce más sobre mí y cómo puedo acompañarte en tu proceso.
            </Typography>
          </div>

          {/* ─── Botón dentro de un Box responsive ─── */}
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: "flex",
              justifyContent: { xs: "center", md: "center" },
              mt: { xs: -2, md: -2 },
              mb: { xs: 0, md: 4 },
            }}
          >
            <Button
              variant="contained"
              component={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/full-acerca")}
              sx={{
                backgroundColor: "  rgb(211, 190, 151)",
                color: "rgb(92, 116, 101)",
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontFamily: "Playfair Display",
                fontWeight: "500",
                px: { xs: 2, sm: 3 },
                py: { xs: 1.2, sm: 1 },
                borderRadius: "8px",
                textTransform: "none",
                letterSpacing: "0.7px",
                border: "2px solid rgb(120, 150, 131)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#6F8979",
                  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)",
                  color: "#f5eedc",
                },
                "&:active": {
                  transform: "scale(0.98)",
                },
              }}
            >
              LEER MÁS
            </Button>
          </Box>
        </ContenedorPrincipal2>
      </ContenedorPadre>
    </Box>
  );
};

export default ImagenDaniela;

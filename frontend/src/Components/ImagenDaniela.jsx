import { useEffect, useRef, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
    width: 100%; /* ✅ en lugar de 100vw */
    padding: 0;
    margin: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    overflow-x: hidden; /* ✅ Evita que se desborde horizontalmente */
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
  }
`;

const ContenedorPrincipal2 = styled.div`
  position: absolute;
  top: 120px;
  right: 120px;
  width: 35%;
  padding: 10px;
  border: 3px solid #a1ad7f;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 1.5s ease-out;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 15px 6px rgba(0, 0, 0, 0.2);

  /* TABLET: movemos un poco hacia la izquierda y hacemos más ancho */
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
      // 📌 Store ref values inside the effect
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
            fontFamily: '"Playfair Display", serif', // ◀ aquí
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
              fontSize: { xs: "1.3rem", sm: "1.5rem" },
              mb: 2,
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
              mb: 2,
            }}
          >
            Hola, soy Daniela, psicóloga especializada en límites y regulación
            emocional. Si estás aquí, puede que estés cansado de cuidar a todos
            menos a ti, que te cueste decir “no” sin culpa o que te sientas
            desconectado de lo que antes te hacía bien. Quizás estás atravesando
            ansiedad, tristeza, confusión o simplemente el deseo profundo de
            recuperar tu bienestar emocional. En este espacio terapéutico,
            caminamos juntos a tu ritmo. Te acompaño a reconectar contigo, a
            poner palabras a lo que duele y a construir relaciones más sanas
            contigo y con los demás. No estás solo. Aquí empieza tu proceso de
            volver a ti. Conoce más sobre mí y cómo puedo acompañarte en tu
            proceso
          </Typography>
        </div>

        {/* ─── Botón dentro de un Box responsive ─── */}
        {/* ─── Botón dentro de un Box responsive ─── */}
        <Box
          sx={{
            width: { xs: "100%", md: "auto" }, // 100% en movil, auto en escritorio
            display: "flex",
            justifyContent: { xs: "center", md: "center" }, // centrado en xs, al final en md+
            mt: { xs: 2, md: 1 },
          }}
        >
          <Button
            variant="contained"
            component={motion.button}
            whileHover={!isMobile ? { scale: 1.1 } : {}}
            whileTap={!isMobile ? { scale: 0.95 } : {}}
            sx={{
              backgroundColor: "rgb(211, 190, 151)",
              color: "rgb(92, 116, 101)",
              fontFamily: "Playfair Display",
              textTransform: "none",
              borderRadius: "30px",
              border: "2px solid rgb(120, 150, 131)",
              fontSize: { xs: "1rem", sm: "1rem" },
              px: { xs: 3, sm: 3 },
              py: { xs: 1.5, sm: 1 },
            }}
            onClick={() => navigate("/full-acerca")}
          >
            Leer más
          </Button>
        </Box>
      </ContenedorPrincipal2>
    </ContenedorPadre>
  );
};

export default ImagenDaniela;

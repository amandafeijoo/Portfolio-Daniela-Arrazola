import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/playfair-display";

const ContenedorPadre = styled.div`
  position: relative;
  width: 65%;
  min-height: 750px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px;
  border: 2px solid #d2b48c;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #f5eedc;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    margin-bottom: 80px;
    padding: 30px;
  }
`;

const ContenedorPrincipal1 = styled.div`
  position: relative;
  width: 45%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
  transition: transform 1.5s ease-out;

  &.visible {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(200px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    transform: none !important; /* 📌 Desactiva la animación en móviles */
  }
`;

const ContenedorPrincipal2 = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  width: 40%;
  margin: 0 auto;
  padding: 40px;
  height: auto;
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 1.5s ease-out;

  &.visible {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(-200px);
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    margin-top: 20px;
    left: 0;
    padding: 20px;
    transform: none !important; /* 📌 Desactiva la animación en móviles */
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
        { threshold: 0.5 }
      );

      if (contenedor1) observer.observe(contenedor1);
      if (contenedor2) observer.observe(contenedor2);

      return () => {
        window.removeEventListener("resize", handleResize);

        // 📌 Use the stored variables to prevent accessing a stale ref
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
          src="/images/daniela1.svg"
          alt="Daniela"
          style={{ width: "100%", borderRadius: "15px" }}
        />
      </ContenedorPrincipal1>
      <ContenedorPrincipal2
        ref={contenedor2Ref}
        className={!isMobile ? "hidden" : ""}
      >
        <div
          style={{
            padding: isMobile ? "10px" : "20px", // 📌 Menos padding en móviles
            textAlign: "justify",
            background: "#f5eedc",
            borderRadius: "15px",
          }}
        >
          Hola, soy Daniela Arrázola, y si estás aquí, es posible que estés
          buscando una forma de sentirte mejor, de entenderte más o de superar
          un momento difícil. Déjame decirte que no estás solo. Como psicóloga,
          mi misión es crear un espacio seguro, sin juicios y sin prisas donde
          podamos trabajar juntos.
        </div>
      </ContenedorPrincipal2>

      <Button
        variant="contained"
        component={motion.button}
        whileHover={!isMobile ? { scale: 1.1 } : {}}
        whileTap={!isMobile ? { scale: 0.95 } : {}}
        sx={{
          backgroundColor: "rgb(211, 190, 151)",
          color: "rgb(92, 116, 101)",
          fontSize: { xs: "1rem", sm: "1.2rem" }, // 📌 Texto más pequeño en móviles
          fontFamily: "Playfair Display",
          fontWeight: "500",
          padding: { xs: "10px 20px", sm: "12px 24px" }, // 📌 Menos padding en móviles
          textTransform: "none",
          borderRadius: "30px",
          transition: "all 0.3s ease",
          border: "2px solid rgb(120, 150, 131)",
          marginLeft: { xs: "auto", sm: "520px" }, // 📌 Centrado en móviles, margen en desktop
          marginRight: { xs: "auto", sm: "0" }, // 📌 Asegurar que esté alineado correctamente
          display: "block", // 📌 Evita problemas de alineación en móviles
          marginTop: { xs: "10px", sm: "20px" }, // 📌 Menos espacio en móviles
        }}
        onClick={() => navigate("/full-acerca")}
      >
        Leer más sobre mí
      </Button>
    </ContenedorPadre>
  );
};

export default ImagenDaniela;

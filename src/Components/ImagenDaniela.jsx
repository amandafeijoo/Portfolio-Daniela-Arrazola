import React, { useEffect, useRef } from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "@fontsource/playfair-display";

const ContenedorPadre = styled.div`
  position: relative;
  width: 70%;
  height: 120%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 160px;
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
`;

const ContenedorPrincipal2 = styled.div`
  position: absolute;
  top: 0;
  left: 80px; 
  width: 40%;
  margin: 0 auto;
  padding: 40px;
  height: 60%;
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
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
  z-index: 1;
  transition: transform 1.5s ease-out; 
  &.visible {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(-200px);
  }
`;

const ContenedorImagen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  height: 500px;
`;

const Imagen = styled.img`
  width: 110%;
  height: 110%;
  object-fit: contain;
  border-radius: 25px;
  background-color: #f5f5dc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const ContenedorTexto = styled.div`
  width: 100%;
  padding: 40px;
  border: 2px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: #f5eedc;
  font-family: "Playfair Display", serif;
  color: #4b3f2f;
  border-radius: 15px;
  text-align: justify;
`;

const ImagenDaniela = () => {
  const contenedor1Ref = useRef(null);
  const contenedor2Ref = useRef(null);

  useEffect(() => {
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
      { threshold: 0.1 }
    );

    if (contenedor1Ref.current) {
      observer.observe(contenedor1Ref.current);
    }
    if (contenedor2Ref.current) {
      observer.observe(contenedor2Ref.current);
    }

    return () => {
      if (contenedor1Ref.current) {
        observer.unobserve(contenedor1Ref.current);
      }
      if (contenedor2Ref.current) {
        observer.unobserve(contenedor2Ref.current);
      }
    };
  }, []);
  const navigate = useNavigate();
  const handleNavigateFullAcerca = () => {
    navigate("/full-acerca");
  };

  return (
    <ContenedorPadre>
      <ContenedorPrincipal2 ref={contenedor2Ref} className="hidden">
        <ContenedorTexto>
          Hola, soy Daniela Arrázola, y si estás aquí, es posible que estés
          buscando una forma de sentirte mejor, de entenderte más o de superar
          un momento difícil. Déjame decirte que no estás solo. Como psicóloga,
          mi misión es crear un espacio seguro, sin juicios y sin prisas donde
          podamos trabajar juntos.
        </ContenedorTexto>
      </ContenedorPrincipal2>
      <ContenedorPrincipal1 ref={contenedor1Ref} className="hidden">
        <ContenedorImagen>
          <Imagen src="/images/daniela.svg" alt="Daniela" />
        </ContenedorImagen>
      </ContenedorPrincipal1>
      <Button
        variant="contained"
        component={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(5px)",
          color: "#4b3f2f",
          fontSize: "1.2rem",
          fontFamily: "Playfair Display",
          fontWeight: "500",
          padding: "12px 24px",
          textTransform: "none",
          borderRadius: "30px",
          transition: "all 0.3s ease",
          border: "2px solid #4b3f2f",
          marginLeft: "520px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        }}
      >
        Leer más sobre mí
      </Button>
    </ContenedorPadre>
  );
};

export default ImagenDaniela;

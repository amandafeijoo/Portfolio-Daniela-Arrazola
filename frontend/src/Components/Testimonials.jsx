import { useEffect, useState } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";
import { FaCertificate } from "react-icons/fa";

// 🔹 Contenedor estilizado
const StyledContainer = styled(Box)`
  border: 2px solid #d2b48c;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #f5eedc;
  padding: 30px;
  margin: 20px auto;
  max-width: 1200px;
  text-align: center;
`;

// Configuración del carrusel
const settings = {
  dots: true,
  infinite: false, // Evita repeticiones en react-slick
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const Testimonials = () => {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/testimonios/");
        const data = await response.json();

        console.log("Respuesta API:", data); // 🔥 Verifica lo que devuelve la API

        if (!data || !Array.isArray(data.aprobados)) {
          console.error(
            "Error: La API no devolvió una lista de testimonios aprobados",
            data
          );
          return;
        }

        // Filtrar duplicados en frontend
        const testimoniosUnicos = Array.from(
          new Set(data.aprobados.map((t) => t.id))
        ).map((id) => data.aprobados.find((t) => t.id === id));

        console.log("Testimonios filtrados en el frontend:", testimoniosUnicos);
        setTestimonios(testimoniosUnicos);
      } catch (error) {
        console.error("Error obteniendo testimonios:", error);
      }
    };

    fetchTestimonios();
  }, []);

  return (
    <StyledContainer>
      {" "}
      {/* ✅ Se agrega el StyledContainer */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{ fontFamily: "Playfair Display", color: "rgba(48, 84, 69, 0.6)" }}
      >
        Testimonios
      </Typography>
      <Box
        sx={{
          borderBottom: "2px solid #8b6b3e",
          width: "80px",
          margin: "auto",
          mb: 3,
        }}
      />
      {testimonios.length === 0 ? (
        <Typography color="gray">No hay testimonios aún.</Typography>
      ) : (
        <Slider {...settings}>
          {testimonios.map((testimonio) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  padding: { xs: "10px", sm: "20px" },
                }}
              >
                <Avatar
                  src={
                    testimonio.imagen
                      ? `http://localhost:8000${testimonio.imagen}`
                      : "/images/default-avatar.png"
                  }
                  alt={testimonio.nombre_cliente}
                  sx={{
                    width: { xs: 60, sm: 80 },
                    height: { xs: 60, sm: 80 },
                    margin: "auto",
                    mb: 2,
                  }}
                />

                <Typography
                  variant="h6"
                  fontStyle="italic"
                  mb={1}
                  sx={{
                    fontFamily: "Playfair Display",
                    color: "rgba(48, 84, 69, 0.6)",
                  }}
                >
                  &quot;{testimonio.mensaje}&quot;
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{
                    fontFamily: "Playfair Display",
                    color: "rgba(48, 84, 69, 0.6)",
                  }}
                >
                  — {testimonio.nombre_cliente}{" "}
                  <span style={{ color: "#c0a080", fontSize: "14px" }}>
                    {" "}
                    <FaCertificate /> Verificado
                  </span>
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Slider>
      )}
    </StyledContainer>
  );
};

export default Testimonials;

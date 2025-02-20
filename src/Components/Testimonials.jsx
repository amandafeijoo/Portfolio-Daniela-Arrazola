import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";

// Datos de testimonios
const testimonials = [
  {
    name: "Mónica Huerta",
    text: "La terapia con Daniela ha sido un cambio de vida. Me ha ayudado a encontrar claridad y paz.",
    image: "/images/person1.jpg", // Opcional: Imagen del cliente
  },
  {
    name: "Carlos Jiménez",
    text: "Un espacio seguro donde realmente me siento escuchado. Recomiendo 100%.",
    image: "/images/person2.jpg",
  },
  {
    name: "Ana Rodríguez",
    text: "Gracias a la terapia he logrado superar momentos difíciles. Daniela es increíble.",
    image: "/images/person3.jpg",
  },
];

// Configuración del carrusel
const settings = {
  dots: true, // Puntos de navegación
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Un testimonio a la vez
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000, // Cambio cada 5s
  arrows: false, // Deshabilitar flechas por defecto
};

const Testimonials = () => {
  return (
    <Box
      sx={{
        maxWidth: { xs: "100%", sm: "700px" },
        margin: "auto",
        textAlign: "center",
        padding: { xs: "20px", sm: "40px" },
      }}
    >
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
          borderBottom: "2px solid #d2b48c",
          width: "80px",
          margin: "auto",
          mb: 3,
        }}
      />

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              sx={{ textAlign: "center", padding: { xs: "10px", sm: "20px" } }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
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
                &quot;{testimonial.text}&quot;
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                sx={{
                  fontFamily: "Playfair Display",
                  color: "rgba(48, 84, 69, 0.6)",
                }}
              >
                — {testimonial.name}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;

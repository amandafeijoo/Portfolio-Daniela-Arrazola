import { useEffect } from "react";
import { Box, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { FaCheckCircle } from "react-icons/fa";

const ReservaExitosa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  // URL optimizada: formato y calidad automáticos, ancho máximo 800px
  const imagenReserva =
    "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1747669001/reserva-cancelada-2_knisbq.png";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#84978b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "70%", md: "40%" },
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Alert
          severity="info"
          sx={{
            mt: 2,
            mx: 2,
            fontFamily: "Playfair Display, serif",
            fontSize: "17px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
          iconMapping={{ info: <FaCheckCircle /> }}
        >
          Hemos enviado un correo de confirmación de tu reserva. Revisa también
          tu carpeta de spam o correo no deseado. ✉️
        </Alert>

        <Box
          component="img"
          src={imagenReserva}
          alt="Reserva Exitosa"
          loading="lazy"
          sx={{
            width: "100%",
            display: "block",
            mt: 2,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 62,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4A6F5E",
              px: 3,
              fontFamily: "Playfair Display, serif",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#3b5e50",
              },
            }}
            onClick={() => navigate("/")}
          >
            VOLVER AL INICIO
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservaExitosa;


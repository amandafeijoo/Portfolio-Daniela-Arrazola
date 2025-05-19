import { useEffect } from "react";
import { Box, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { FaCheckCircle } from "react-icons/fa";

const colors = {
  greenLight: "#ABC4AA",
  green: "#8AA398",
  greenDark: "#40513B",
};

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
        p: { xs: 1, sm: 2 },

      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "80%", md: "50%", lg: "40%" },
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden",
          textAlign: "center",
          border: "2px solid #d2b48c",
          backgroundColor: "#EBDCC8",
        }}
      >
        <Alert
          severity="info"
          sx={{
            position: "absolute",
            top: { xs: 16, sm: 24 },
            width: { xs: "90%", sm: "70%" },
            mx: 2,
            fontFamily: "Playfair Display, serif",
            fontSize: "17px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ABC4AA",

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
            borderRadius: "20px",
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
            onClick={() => navigate("/reserva")}
            sx={{
              bottom: { xs: 16, sm: 32, md: 48 },

              backgroundColor: colors.greenLight,
              color: colors.greenDark,
              px: { xs: 2, sm: 3 },
            py: { xs: 1, sm: 1.25 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              border: "none",
              borderRadius: "0.5rem",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              cursor: "pointer",
              transition: "background-color 0.2s ease, transform 0.1s ease",

              "&:hover": {
                backgroundColor: colors.green,
                transform: "translateY(-2px)",
              },
              "&:active": {
                backgroundColor: colors.greenDark,
                color: "#fff",
                transform: "translateY(0)",
              },
            }}
          >
            Volver a reservar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservaExitosa;

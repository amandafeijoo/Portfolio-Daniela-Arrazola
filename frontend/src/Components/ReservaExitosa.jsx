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

  const imagenOK =
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
          width: { xs: "100%", sm: "80%", md: "50%", lg: "40%" },
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Alert
          severity="info"
          icon={<FaCheckCircle fontSize="inherit" />}
          sx={{
            mx: { xs: 1, sm: 2 },
            my: { xs: 2, sm: 3 },
            px: { xs: 1, sm: 2 },
            py: { xs: 1, sm: 1.5 },
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "0.85rem", sm: "1rem" },
            borderRadius: "12px",
          }}
        >
          Hemos enviado un correo de confirmación de tu reserva. Revisa también
          tu carpeta de spam o correo no deseado. ✉️
        </Alert>

        <Box
          component="img"
          src={imagenOK}
          alt="Reserva Exitosa"
          loading="lazy"
          sx={{
            width: "100%",
            display: "block",
          }}
        />

        <Box
          sx={{
            mt: { xs: 2, sm: 4 },
            mb: { xs: 4, sm: 6 },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              width: { xs: "80%", sm: "auto" },
              maxWidth: 300,
              fontFamily: "Playfair Display, serif",
              px: { xs: 2, sm: 3 },
              py: { xs: 1, sm: 1.25 },
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              borderRadius: "12px",
              backgroundColor: colors.greenLight,
              color: colors.greenDark,
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
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
            Volver al inicio
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservaExitosa;


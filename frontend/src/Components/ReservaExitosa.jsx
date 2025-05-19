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
        p: { xs: 1, sm: 2 }, // menos padding en móvil
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "95%", sm: "70%", md: "40%" }, // más ancho en móvil
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
          icon={<FaCheckCircle />}
          sx={{
            mt: { xs: 1, sm: 2 }, // menos margen arriba en XS
            mx: { xs: 1, sm: 2 },
            fontFamily: "Playfair Display, serif",
            fontSize: { xs: "0.85rem", sm: "17px" }, // texto más pequeño en XS
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#EBDCC8",
            textAlign: "justify",
          }}
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
            mt: { xs: 1, sm: 2 }, // menos separación en XS
          }}
        />

        <Button
          variant="contained"
          onClick={() => navigate("/reserva")}
          sx={{
            position: "absolute",
            bottom: { xs: 16, sm: 62 },
            left: "50%",
            transform: "translateX(-50%)",
            /* … */
            transition: "background-color 0.2s ease, transform 0.1s ease",

            "&:hover": {
              backgroundColor: colors.green,
              transform: "translateX(-50%) translateY(-2px)",
            },
            "&:active": {
              backgroundColor: colors.greenDark,
              color: "#fff",
              transform: "translateX(-50%) translateY(0)",
            },
          }}
        >
          Volver a reservar
        </Button>
      </Box>
    </Box>
  );
};

export default ReservaExitosa;

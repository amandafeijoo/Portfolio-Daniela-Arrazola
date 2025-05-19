import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";

const colors = {
  greenLight: "#ABC4AA",
  green: "#8AA398",
  greenDark: "#40513B",
};

const ReservaCancelada = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const imagenCancelada =
    "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1747667480/reserva-cancelada_axvpxq.png";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#84978b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", sm: "80%", md: "60%", lg: "40%" },
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden",
          backgroundColor: "#EBDCC8",
          // Padding interior para que la imagen no toque el borde dorado
          p: { xs: 0, sm: 1 },
        }}
      >
        <Box
          component="img"
          src={imagenCancelada}
          alt="Reserva Cancelada"
          loading="lazy"
          sx={{
            width: "100%",
            display: "block",
            // para que mantenga el mismo borderRadius que el padre
            borderRadius: { xs: 0, sm: "18px" },
          }}
        />

        <Button
          variant="contained"
          onClick={() => navigate("/reserva")}
          sx={{
            position: "absolute",
            // ajustamos la posición vertical según breakpoints
            bottom: { xs: 16, sm: 32, md: 48 },
            left: "50%",
            transform: "translateX(-50%)",
            width: { xs: "75%", sm: "auto" },
            maxWidth: 240,
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
              transform: "translate(-50%, -2px)",
            },
            "&:active": {
              backgroundColor: colors.greenDark,
              color: "#fff",
              transform: "translate(-50%, 0)",
            },
          }}
        >
          Volver a reservar
        </Button>
      </Box>
    </Box>
  );
};

export default ReservaCancelada;


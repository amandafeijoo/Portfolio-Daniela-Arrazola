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

  // URL Cloudinary optimizada: formato y calidad automáticos, ancho máximo 800px
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
          backgroundColor: "#EBDCC8",
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
            backgroundColor: "#EBDCC8",
            border: "2px solid #d2b48c"
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
              backgroundColor: colors.greenLight,
              color: colors.greenDark,
              px: 3, // 1.5rem horizontal
              py: 2, // 0.75rem vertical
              fontSize: "1rem",
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

export default ReservaCancelada;

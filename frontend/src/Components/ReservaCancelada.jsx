import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import { img } from "../utils/imagePath";

const ReservaCancelada = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#84978b", // 💚 Fondo en verde suave
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", sm: "70%", md: "40%" },
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          overflow: "hidden", // 🔐 Asegura que el botón no sobresalga
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <img
          src={img("reservano.svg")}
          alt="Reserva Cancelada"
          style={{
            width: "100%",
            display: "block",
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
              fontFamily: "Playfair Display serif",
              borderRadius: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              "&:hover": {
                backgroundColor: "#3b5e50",
              },
            }}
            onClick={() => navigate("/reserva")}
          >
            Volver a reservar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ReservaCancelada;

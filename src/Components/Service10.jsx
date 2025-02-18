import React, { useEffect,useState } from "react";
import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  keyframes,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "@fontsource/playfair-display";
import Reserva from "./Reserva";

const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const Image = () => (
  <Box
    sx={{
      width: "72%",
      marginBottom: 2,
      boxShadow:
        "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
      borderRadius: 2,
      overflow: "hidden",
      border: "2px solid #d2b48c",
      animation: `${moveAnimation} 3s infinite`,
    }}
  >
    <img
      src="/images/10.svg"
      alt="Service Image"
      width="100%"
      style={{ borderRadius: "inherit" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "/images/placeholder.png";
      }}
    />
  </Box>
);

const Service10 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <Container>
      <Box
        sx={{
          margin: 2,
          padding: 2,
          border: "2px solid #d2b48c",
          borderRadius: 2,
          boxShadow:
            "0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f5eedc",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          position: "relative",
          zIndex: 1,
          "&:hover": { transform: "translateY(-5px)", boxShadow: 8 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image />
          <Box sx={{ width: "100%", marginBottom: 2 }}>
          <Accordion expanded={expanded} onChange={handleChange} sx={{ margin: 2, backgroundColor: "#f5eedc", border: "2px solid #d2b48c", borderRadius: 2, boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "rgba(48, 84, 69, 0.8)",
                  color: "#f5eedc",
                }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  El miedo es una emoción natural y necesaria para nuestra
                  supervivencia.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  El miedo es una emoción natural y necesaria para nuestra
                  supervivencia, pero cuando se vuelve intenso, irracional y
                  limitante, deja de protegernos y empieza a controlarnos. Tal
                  vez evitas situaciones, lugares o incluso actividades que
                  antes disfrutabas, lo cual no solo te limita, sino que también
                  te lleva a experimentar niveles intensos de ansiedad.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                    marginTop: 2,
                  }}
                >
                  En terapia trabajamos con enfoques basados en la evidencia
                  científica:
                </Typography>
                <List>
                  <ListItem
                    sx={{
                      backgroundColor: "#fff",
                      margin: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText
                      primary="Aprenderás a regular tu respuesta de miedo."
                      sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#fff",
                      margin: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText
                      primary="Enfrentarás progresivamente aquello que hoy evitas."
                      sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                    />
                  </ListItem>
                  <ListItem
                    sx={{
                      backgroundColor: "#fff",
                      margin: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText
                      primary="Retomarás el control de tus emociones y decisiones."
                      sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                    />
                  </ListItem>
                </List>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  Las fobias pueden hacerte sentir atrapado, pero con el
                  acompañamiento adecuado puedes aprender a enfrentarlas y
                  superarlas. No será de un día para otro, ni de eliminar el
                  miedo por completo, sino de hacer que deje de gobernar en tus
                  decisiones.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ width: "70%", marginTop: 2 }}></Box>
        </Box>
      </Box>
    </Container>
    <Reserva />
    </>
  );
};

export default Service10;

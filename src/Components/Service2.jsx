import React, { useEffect,useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  keyframes,
  Container,
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
      src="/images/2.svg"
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

const Service2 = () => {
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
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: 8,
          },
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
                ¿Alguna vez sentiste que emociones como la ira, el miedo, la
                tristeza o la vergüenza te dominan?
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
                Las emociones son brújulas internas que nos guían y cumplen una
                función vital: nos preparan para la acción, nos informan sobre
                nuestro estado y nos ayudan a relacionarnos con el mundo. Sin
                embargo, cuando no sabemos gestionarlas, pueden convertirse en
                una carga.
                <br />
                <br /> El estrés, la decepción, el rechazo, la sensación de
                estar herido o experimentar un duelo pueden generar bloqueos
                emocionales que afectan nuestra autoestima, nuestro equilibrio
                físico y emocional. Y aunque hoy en día parezca "normal" vivir
                con estrés constante, no significa que sea saludable ni que sea
                la modalidad correcta de afrontar los desafíos de la vida.
                Nuestro cuerpo no está diseñado para estar en alerta todo el
                tiempo. Es necesario reeducarlo, enseñarle a salir del estado de
                supervivencia y permitir que nuestro sistema nervioso se regule.
                En terapia, aprenderás a:
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
                    primary="Identificar cada emoción"
                    secondary="Comprender su mensaje y regular su impacto en tu vida."
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
                    primary="No se trata de reprimir lo que sientes"
                    secondary="Sino de escucharlo, entenderlo y comprender su utilidad para transformarla en una gran herramienta de crecimiento."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
    <Reserva/>
    </>
  );
};

export default Service2;

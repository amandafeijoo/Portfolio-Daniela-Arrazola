import React, { useEffect } from "react";
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
      src="/images/4.svg"
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

const Service4 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
            <Accordion
              sx={{
                margin: 2,
                backgroundColor: "#f5eedc",
                border: "2px solid #d2b48c",
                borderRadius: 2,
                boxShadow:
                  "0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
              }}
            >
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
                  Cuando pensamos en duelo, solemos asociarlo con la pérdida de
                  un ser querido.
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
                  Pero va más allá del fallecimiento de alguien: es el proceso
                  de adaptación ante cualquier pérdida significativa en nuestra
                  vida. <br /> Un cambio de trabajo, el fin de una amistad, una
                  mudanza o el cierre de una etapa pueden despertar un profundo
                  sentimiento de vacío, incertidumbre o tristeza. Todo eso
                  implica duelo, es decir, dolor. Y aunque nos digan que "el
                  tiempo lo cura todo", la realidad es que sanar requiere mucho
                  más que esperar. <br /> El duelo es un proceso natural, pero
                  no siempre fácil de transitar. No se trata solo de dejar ir,
                  sino de aprender a seguir adelante sin perderte a ti mismo en
                  el camino. En terapia, trabajamos en:
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
                      primary="Reconocer la pérdida"
                      secondary="Validar lo que sientes sin minimizarlo."
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
                      primary="Procesar las emociones"
                      secondary="Dar lugar a la tristeza, el miedo o la nostalgia sin quedar atrapado en ellas."
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
                      primary="Reencontrarte contigo mismo"
                      secondary="Reconstruir tu identidad después del cambio."
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
                      primary="Mirar hacia adelante"
                      secondary="De qué manera reconstruirte y abrazar el cambio."
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
                  Una autoestima saludable impacta en todas las áreas de tu
                  vida: desde la toma de decisiones hasta la calidad de tus
                  relaciones. En terapia aprenderás a reconstruirla desde la
                  raíz.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ width: "70%", marginTop: 2 }}></Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Service4;

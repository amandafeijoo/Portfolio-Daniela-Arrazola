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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "@fontsource/playfair-display";

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
    }}
  >
    <img
      src="/images/7.svg"
      alt="Service Image"
      width="100%"
      style={{ borderRadius: "inherit" }}
    />
  </Box>
);

const Service7 = () => {
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
                  Cuando hablar no es suficiente y gritar no funciona
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
                  Ser padre puede sentirse como ser el capitán de un barco en
                  medio de una tormenta. Sabes que debes mantener el rumbo, pero
                  las olas de berrinches, desobediencia y frustración pueden
                  hacerte dudar de si realmente lo estás haciendo bien. A veces,
                  por más que repitas lo mismo una y otra vez, sientes que tu
                  hijo simplemente no escucha. Y cuando la paciencia se agota,
                  aparecen los gritos, la culpa y la sensación de estar a la
                  deriva.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  Pero aquí hay algo que necesitas saber: el cerebro de tu hijo
                  no funciona como el tuyo.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  El cerebro infantil es como una semilla en crecimiento, lleno
                  de emociones intensas, pero aún en desarrollo. No tiene la
                  misma capacidad que un adulto para regularse, razonar o
                  anticipar consecuencias. Lo que para ti es lógica, para él es
                  un océano de sensaciones desbordadas.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  El cerebro adulto, en cambio, es como un mapa con caminos ya
                  trazados. Tienes experiencia, aprendiste a resolver problemas
                  y reaccionas basándote en lo que viviste. Pero ¿qué pasa si
                  los caminos que aprendiste no son los mejores? Si la única
                  respuesta que conoces ante el caos es el castigo o la
                  exigencia, es normal que te sientas atrapado en un ciclo de
                  frustración.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "Playfair Display",
                    textAlign: "justify",
                    lineHeight: 1.6,
                  }}
                >
                  La buena noticia es que hay otras rutas. No se trata de ser
                  permisivo ni de perder autoridad, sino de aprender un nuevo
                  lenguaje: el de la conexión antes que la corrección, la
                  firmeza sin perder la empatía y la enseñanza sin recurrir al
                  miedo.
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
                  En terapia, trabajamos juntos para:
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
                      primary="Comprender cómo funciona el cerebro infantil y por qué tu hijo reacciona como lo hace."
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
                      primary="Romper patrones de crianza heredados que no están funcionando."
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
                      primary="Aprender herramientas prácticas para establecer límites sin gritos ni castigos."
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
                      primary="Fortalecer el vínculo con tu hijo, para que aprenda desde la seguridad y no desde el miedo."
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
                  No nacemos sabiendo ser padres, pero sí podemos aprender a
                  criar desde la calma y el respeto. Si hoy sientes que la
                  crianza te desborda, recuerda: si cambias la forma en que te
                  comunicas con tu hijo, él cambiará la forma en que te escucha{" "}
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

export default Service7;

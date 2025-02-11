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
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";
import Service7 from "./Service7";
import Service8 from "./Service8";
import Service9 from "./Service9";
import Service10 from "./Service10";
import Service11 from "./Service11";
import Service12 from "./Service12";

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
      src="/images/1.svg"
      alt="Service Image"
      width="100%"
      style={{ borderRadius: "inherit" }}
    />
  </Box>
);

const Service = ({ title, description, items }) => (
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
      sx={{ backgroundColor: "rgba(48, 84, 69, 0.8)", color: "#f5eedc" }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{ fontFamily: "Playfair Display" }}
      >
        {title}
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
        {description}
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: "#fff",
              margin: 1,
              borderRadius: 1,
              boxShadow: 1,
            }}
          >
            <ListItemText
              primary={item}
              sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
            />
          </ListItem>
        ))}
      </List>
    </AccordionDetails>
  </Accordion>
);

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <Box
          sx={{
            margin: 2,
            padding: 2,
            border: "2px solid #ccc",
            borderRadius: 3,
            boxShadow:
              "0 0 5px 2px rgba(0, 0, 0, 0.6), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#7f918e",
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
            <Box sx={{ width: "70%", marginBottom: 2 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#1B2E1D",
                  fontFamily: "Playfair Display",
                  textAlign: "justify",
                  lineHeight: 1.6,
                  backgroundColor: "#f5eedc",
                  padding: 2,
                  borderRadius: 2,
                  boxShadow:
                    "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                Si los síntomas de ansiedad o depresión están tomando el control
                de tu vida, quiero que sepas que muchas personas que atraviesan
                lo mismo logran recuperar el control de sus vidas con el apoyo
                profesional adecuado. Las terapias basadas en ciencia están
                diseñadas para ayudarte a superar este malestar y alcanzar una
                vida más equilibrada y tranquila.
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Service
                title="DEPRESIÓN"
                description=""
                items={[
                  "Tristeza profunda y constante.",
                  "Pérdida de interés en actividades que antes se disfrutaban.",
                  "Cansancio extremo incluso tras esfuerzos mínimos.",
                  "Sentimientos de culpa o incapacidad.",
                  "Irritabilidad y pesimismo sobre el futuro.",
                  "Pensamientos sobre la muerte o suicidio.",
                  "Falta de confianza en uno mismo o en los demás.",
                  "Dificultad para concentrarse y problemas de memoria.",
                  "Intranquilidad.",
                  "Alteraciones en el sueño (insomnio o sueño excesivo).",
                  "Disminución del apetito y de la líbido.",
                ]}
              />
              <Service
                title="ANSIEDAD"
                description="La ansiedad puede manifestarse de diversas formas y afectar significativamente tu vida diaria. Aquí hay algunos síntomas comunes:"
                items={[
                  "Preocupación excesiva y miedo persistente sobre situaciones cotidianas.",
                  "Miedos intensos e irracionales que no están relacionados con situaciones peligrosas reales.",
                  "Dificultad para controlar los pensamientos y sentimientos de ansiedad.",
                  "Sentimientos de pánico o terror que ocurren repentinamente (ataques de pánico).",
                  "Preocupación constante que interfiere con las actividades diarias.",
                  "Ansiedad intensa que dura mucho tiempo y no se alivia con facilidad.",
                  "Reacciones desproporcionadas ante situaciones que no representan un peligro real.",
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Container>
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
      <Service7 />
        <Service8 />
        <Service9 />
        <Service10 />
        <Service11 />
        <Service12 />
    </>
  );
};

export default Services;

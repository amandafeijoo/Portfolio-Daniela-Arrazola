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
        src="/images/13.svg"
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

const Service13 = () => {
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
                Los Trastornos de la Conducta Alimentaria (TCA) no son una moda
                ni una elección.
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
                Son condiciones psicológicas complejas que alteran la relación
                con tu cuerpo, la comida y el control.
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
                Actualmente, los manuales de clasificación diagnóstica incluyen:
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
                    primary="Anorexia Nerviosa"
                    secondary="Alteración grave de la conducta alimentaria que se caracteriza por el rechazo a mantener el peso corporal en los valores mínimos normales. Sus principales características son:"
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    backgroundColor: "#f0f0f0",
                    margin: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <ListItemText
                    primary="Restricción extrema de alimentos"
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    backgroundColor: "#f0f0f0",
                    margin: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <ListItemText
                    primary="Miedo intenso a ganar peso con una idealización de la delgadez"
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    backgroundColor: "#f0f0f0",
                    margin: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <ListItemText
                    primary="Percepción distorsionada del cuerpo"
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
              </List>
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
                    primary="Bulimia Nerviosa"
                    secondary="Episodios de
                        atracones seguidos de conductas
                        compensatorias como vómitos,
                        ejercicio excesivo o uso de laxantes."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    backgroundColor: "#f0f0f0",
                    margin: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <ListItemText
                    primary="No suele haber distorsión de
la imagen corporal, como en
la anorexia, pero suelen
estar a disgusto con su
cuerpo o partes de él."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    backgroundColor: "#f0f0f0",
                    margin: 1,
                    borderRadius: 1,
                    boxShadow: 1,
                  }}
                >
                  <ListItemText
                    primary="La figura y peso corporal
tienen una influencia
excesiva en la

autoevaluación y el
autoconcepto."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
              </List>
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
                    primary="Trastorno por Atracón"
                    secondary="consumo
de grandes cantidades de comida
en poco tiempo, sin conductas
compensatorias (vómitos
autoinducidos, abuso de laxantes,
diuréticos u otros fármacos, ayuno y
ejercicio físico excesivo),
acompañado de culpa y vergüenza."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
              </List>
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
                    primary="Trastornos de la Conducta
Alimentaria No Especificados
(TCANE)"
                    secondary="Muchos casos de TCA no se
presentan en estado puro. Por tanto,
son cuadros de AN o BN
incompletos ,aunque no por ello
menos grave."
                    sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                  />
                </ListItem>
              </List>
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
                    primary="Ortorexia y Vigorexia"
                    secondary="Obsesión con la alimentación “saludable” o con el
ejercicio como forma de control."
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
                Estos trastornos no desaparecen por sí solos y pueden tener
                consecuencias graves. Los TCA se equiparan a las adicciones o
                dependencias. Son una enfermedad biopsicosocial que tiene causas
                complejas y multifactoriales. Genera una pérdida de control en
                quienes la padecen y un sentimiento de culpa y frustración
                debido a sus intentos fallidos de recuperarse por propia
                voluntad. La ciencia nos dice que el cambio es posible. No se
                trata de fuerza de voluntad, sino de tener un acompañamiento
                profesional y especializado que te acompañe a aprender a hacer
                las paces con tu cuerpo escuchándolo y respetándolo en lugar de
                castigarlo. Para resolver el problema se requiere ayuda
                psicológica y médica. Son trastornos que, habitualmente, tienen
                un proceso largo de resolución, con recaídas, avances y
                retrocesos.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
};

export default Service13;

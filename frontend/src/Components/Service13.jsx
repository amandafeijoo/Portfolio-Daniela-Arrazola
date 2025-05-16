import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
// import { img } from "../utils/imagePath";
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
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "@fontsource/playfair-display";
import Reserva from "./Reserva";

const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const services = [
  { name: "Ansiedad y Depresión", path: "/service1" },
  { name: "Regulación emocional", path: "/service2" },
  { name: "Autoestima y Conocimiento Personal", path: "/service3" },
  { name: "Duelo y Cambios", path: "/service4" },
  { name: "Conflictos interpersonales", path: "/service5" },
  { name: "Habilidades sociales", path: "/service6" },
  { name: "Crianza", path: "/service7" },
  { name: "Productividad y gestión del tiempo", path: "/service8" },
  { name: "Hábitos saludables", path: "/service9" },
  { name: "Fobias", path: "/service10" },
  { name: "Trastorno Obsesivo Compulsivo", path: "/service11" },
  { name: "Trastornos del Neurodesarrollo", path: "/service12" },
  { name: "Prevención del suicidio", path: "/service13" },
];

const Image = () => (
  <Box
    sx={{
      width: { xs: "100%", sm: "80%", md: "72%" },
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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1700/v1746700408/13_queqq3.png"
      alt="Prevención del suicidio"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service13 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // 📌 Identifica el índice actual
  const currentIndex = services.findIndex(
    (service) => service.path === location.pathname
  );

  // 📌 Referencias a los Tabs
  const tabRefs = useRef([]);

  // 📌 Al montar componente, sube arriba
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 📌 Scroll automático al tab activo
  useEffect(() => {
    if (tabRefs.current[currentIndex]) {
      tabRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  return (
    <>
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          maxWidth: {
            xs: "100%", 
            sm: "90%", 
            md: "1200px", 
            lg: "1400px",
          },
          px: { xs: 0, sm: 2 },
        }}
      >
        {" "}
        <Tabs
          value={currentIndex}
          onChange={(event, newValue) => navigate(services[newValue].path)}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{
            backgroundColor: "#4A6F5E",
            color: "#fff",
            borderRadius: "10px",
            marginBottom: "20px",
            "& .MuiTabs-indicator": { backgroundColor: "#d2b48c" },
            "& .MuiTab-root": {
              color: "#f5eedc",
              textTransform: "none",
              fontSize: "1rem",
              fontFamily: "Playfair Display",
              "&.Mui-selected": {
                color: "#d2b48c",
                fontWeight: "bold",
              },
            },
          }}
        >
          {services.map((service, index) => (
            <Tab
              key={service.path}
              label={service.name}
              ref={(el) => (tabRefs.current[index] = el)}
            />
          ))}
        </Tabs>
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mx: "auto",
            my: { xs: 1, sm: 2 },
            px: { xs: 1, sm: 4, md: 6 },
            py: { xs: 2, sm: 4, md: 6 },
            border: "2px solid #d2b48c",
            borderRadius: { xs: 1, sm: 2 },
            boxShadow: {
              xs: "0 0 3px 1px rgba(0,0,0,0.2)",
              sm: "0 0 5px 2px rgba(0,0,0,0.3), 0 0 10px 4px rgba(34,139,34,0.2), 0 0 15px 6px rgba(0,0,0,0.2)",
            },
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
            <Accordion
              expanded={expanded}
              onChange={handleChange}
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

                  // Target the wrapper that contains the icon
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    // make it a fixed‐size circle on mobile
                    width: { xs: 45, sm: "auto" },
                    height: { xs: 25, sm: "auto" },
                    borderRadius: { xs: "50%", sm: "50%" },
                    backgroundColor: {
                      xs: "rgba(245,238,220,0.3)",
                      sm: "rgba(245,238,220,0.3)",
                    },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    // push it further right on mobile
                    ml: { xs: 2, sm: "auto" },
                    mr: { xs: -1, sm: 0 },

                    // lighten the arrow itself
                    "& svg": {
                      color: "rgba(245,238,220,0.8)",
                      fontSize: { xs: "1.3rem", sm: "1.5rem" },
                    },
                  },
                }}
              >
                <Typography
                  component="h2"
                  variant={isMobile ? "subtitle1" : "h5"}
                  sx={{
                    fontFamily: "Playfair Display",
                    fontSize: isMobile ? "1rem" : "1.5rem",
                    lineHeight: isMobile ? 1.4 : 1.6,
                    textAlign: isMobile ? "justify" : "left",
                    mb: isMobile ? 1 : 0,
                  }}
                >
                  ¿Alguna vez has sentido que ya no puedes más, aunque nadie lo
                  note?
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
                  No es que quieras morir. Es que ya no sabes cómo vivir con
                  tanto dolor. A veces el cansancio es tan profundo que hasta
                  explicar lo que sientes parece imposible. Los pensamientos
                  suicidas son la la expresión de un sufrimiento acumulado, que
                  no ha encontrado salida ni alivio. <br />
                  <br />
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
                  <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                    {" "}
                    ¿Y si no se trata de valentía, sino de cuánta carga llevas
                    encima en silencio?
                  </Box>
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
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#4b3f2f",
                        fontFamily: "Playfair Display",
                        textAlign: "justify",
                        lineHeight: 1.6,
                      }}
                    >
                      El suicidio no es un acto de debilidad.
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        Tampoco es cuestión de coraje. Es cuestión de
                        sufrimiento emocional no atendido.
                        <br />
                        <br />
                      </Box>
                      Aún hoy existen mitos como: “Si lo dice, no lo hará”,
                      “solo busca atención”, “hablar del suicidio lo provoca”.
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        ¡La verdad es que hablarlo puede salvar vidas!
                        <br />
                        <br />
                      </Box>
                      Quien contempla el suicidio, en realidad,
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        quiere dejar de sufrir, no dejar de vivir.{" "}
                      </Box>
                      Esa idea suele venir acompañada de aislamiento, insomnio,
                      pensamientos negativos, fatiga extrema o frases como: “Ya
                      no puedo más” o “Ojalá no existiera”.
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        No estás roto. Estás agotado. .{" "}
                      </Box>
                      Y no, no estás exagerando.
                      <br />
                      <br />
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        Tu dolor merece atención, no silencios.
                        <br />
                        <br />
                      </Box>
                      Desde un enfoque clínico y basado en evidencia, apostamos
                      por la prevención del suicidio. La terapia
                      <Box
                        component="span"
                        sx={{ fontWeight: "bold", mr: 0.5 }}
                      >
                        {" "}
                        no te obliga a ser positivo.
                      </Box>
                      Te ayuda a entenderte, aliviar el dolor y recuperar
                      sentido. Por eso, te ofrezco un espacio seguro para:{" "}
                      <br />
                      <br />
                    </Typography>
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
                      primary="Validar lo que sientes, sin juicio ni presión."
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
                      primary="Comprender el origen del dolor emocional que estás atravesando."
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
                      primary="Incorporar herramientas reales para enfrentar la tristeza, la ansiedad o la
desesperanza."
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
                      primary="Reconectar con un sentido de vida posible, realista y sostenido en el tiempo."
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
                  Tu vida vale. Tu historia importa. Y puedes recibir ayuda. Y
                  si tú o alguien cercano está teniendo pensamientos suicidas,
                  no esperes a que sea una crisis para actuar. Nadie debería
                  atravesar esta lucha en soledad.
                  <br />
                  <br />
                  Hablemos. Aún estás a tiempo.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
      <Box sx={{ marginBottom: 10, marginTop: 2 }}>
        <Reserva />
      </Box>
    </>
  );
};

export default Service13;

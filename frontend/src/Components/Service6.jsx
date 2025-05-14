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
  Tab,
  Tabs,
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

// 📌 Lista de servicios con rutas
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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1700/v1746700469/6_vxlh8x.png"
      alt="Habilidades sociales"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service6 = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // 📌 Identificar el índice actual
  const currentIndex = services.findIndex(
    (service) => service.path === location.pathname
  );

  // 📌 Referencias a los Tabs
  const tabRefs = useRef([]);

  // 📌 Al montar componente, subir arriba
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
            xs: "100%", // móvil ocupa el 100%
            sm: "90%", // tablet 90%
            md: "1200px", // desktop estándar
            lg: "1400px", // pantallas muy grandes
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
            margin: { xs: 0, sm: 2 },
            padding: { xs: 1, sm: 4, md: 6 },
            border: "2px solid #d2b48c",
            borderRadius: { xs: 1, sm: 2 },
            boxShadow: {
              xs: "0 0 3px 1px rgba(0, 0, 0, 0.2)",
              sm: "0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
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
            <Box sx={{ width: "100%", marginBottom: 2 }}>
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
                  }}
                >
                  <Typography
                    variant={isMobile ? "h6" : "h5"} // 📌 Tamaño de texto dinámico
                    component="h2"
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    ¿Te sientes inseguro al interactuar con los demás?
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
                    Las habilidades sociales son esenciales para construir
                    relaciones saludables y satisfactorias, pero para algunas
                    personas, el simple acto de comunicarse puede ser un reto
                    constante.
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      No se trata solo de timidez,
                    </Box>
                    sino de dificultades reales que pueden generar aislamiento,
                    ansiedad y sufrimiento.
                    <br />
                    <br />
                    Si sientes que las interacciones sociales se convierten en
                    una fuente de angustia, puede que estés lidiando con el
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      {" "}
                      Trastorno de Ansiedad Social
                    </Box>
                    u otros trastornos relacionados. Estos problemas afectan
                    profundamente tu vida personal, académica y profesional.
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      {" "}
                      En terapia, te ayudo a mejorar tus habilidades sociales y
                      superar los bloqueos emocionales.
                    </Box>
                    Juntos trabajaremos para:
                  </Typography>

                  <List>
                    {[
                      {
                        primary:
                          "Identificar pensamientos que generan ansiedad",
                        secondary: "y que te impiden expresarte con seguridad.",
                      },
                      {
                        primary: "Desarrollar estrategias para interactuar",
                        secondary: "sin miedo al rechazo o la crítica.",
                      },
                      {
                        primary: "Romper patrones de evitación",
                        secondary:
                          "que refuerzan el aislamiento y la angustia.",
                      },
                      {
                        primary: "Practicar habilidades sociales",
                        secondary:
                          "en un espacio seguro y libre de juicio, para que puedas ganar confianza.",
                      },
                    ].map(({ primary, secondary }, i) => (
                      <ListItem
                        key={i}
                        sx={{
                          backgroundColor: "#fff",
                          margin: 1,
                          borderRadius: 1,
                          boxShadow: 1,
                        }}
                      >
                        <ListItemText
                          disableTypography
                          primary={
                            <>
                              <Typography
                                component="span"
                                sx={{
                                  fontWeight: "bold",
                                  color: "#4b3f2f",
                                  fontFamily: "Playfair Display",
                                }}
                              >
                                {primary}
                              </Typography>{" "}
                              <Typography
                                component="span"
                                sx={{
                                  color: "#4b3f2f",
                                  fontFamily: "Playfair Display",
                                }}
                              >
                                {secondary}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                    ))}
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
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      Las relaciones humanas no deberían sentirse como un
                      terreno minado.{" "}
                    </Box>
                    Las habilidades sociales no son un &quot;don&quot; con el
                    que se nace, sino una capacidad que se puede aprender y
                    fortalecer con práctica y apoyo.
                    <br />
                    <br />
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      {" "}
                      No estás solo en este proceso.{" "}
                    </Box>
                    Juntos podemos superar esos miedos.
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      {" "}
                      Agenda una consulta conmigo{" "}
                    </Box>
                    y empieza a construir relaciones más seguras y auténticas
                    desde hoy.{" "}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={{ width: "70%", marginTop: 2 }}></Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ marginBottom: 10, marginTop: 2 }}>
        <Reserva />
      </Box>
    </>
  );
};

export default Service6;

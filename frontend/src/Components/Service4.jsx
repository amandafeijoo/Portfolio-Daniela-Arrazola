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
  { name: "Crecimiento personal y hábitos saludables", path: "/service9" },
  { name: "Fobias", path: "/service10" },
  { name: "Trastorno Obsesivo Compulsivo", path: "/service11" },
  { name: "Trastornos del Neurodesarrollo", path: "/service12" },
  { name: "Prevención del suicidios", path: "/service13" },
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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1746700466/4_kqlzon.png"
      alt="Duelo y Cambios"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service4 = () => {
  const [expanded, setExpanded] = useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 📌 Detección de móvil

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
      <Container>
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
            margin: { xs: 1, sm: 2 },
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
                    Duelo y cambios: cómo sanar una pérdida sin perderte a ti
                    mismo
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
                    El duelo no solo ocurre cuando alguien muere. También se
                    activa tras una ruptura, un despido, una mudanza o el cierre
                    de una etapa importante. Y aunque a veces no se vea,&nbsp;
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      el dolor de perder algo significativo es real.
                    </Box>{" "}
                    Frases como “el tiempo lo cura todo” no siempre ayudan. La
                    verdad es que{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        display: "inline",
                        ml: 0 /* si necesitas separador extra */,
                      }}
                    >
                      sanar requiere comprender lo que sientes, no ignorarlo.
                    </Box>{" "}
                    El duelo es un proceso natural, pero puede dejarte con una
                    sensación de vacío, tristeza o confusión que cuesta manejar
                    solo. En terapia trabajamos juntos para:
                  </Typography>

                  <List>
                    {[
                      [
                        "Reconocer la pérdida",
                        "y validar tu dolor, sin minimizarlo.",
                      ],
                      [
                        "Procesar tus emociones,",
                        "dándoles espacio sin que te arrastren.",
                      ],
                      [
                        "Reconstruir tu identidad,",
                        "para reencontrarte contigo mismo tras el cambio.",
                      ],
                      [
                        "Mirar hacia adelante,",
                        "integrando lo vivido sin dejar de avanzar.",
                      ],
                    ].map(([primary, secondary], i) => (
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
                          primary={primary}
                          secondary={secondary}
                          primaryTypographyProps={{
                            component: "span",
                            sx: {
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            },
                          }}
                          secondaryTypographyProps={{
                            component: "span",
                            sx: {
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            },
                          }}
                          sx={{
                            display: "inline-flex",
                            alignItems: "baseline",
                            gap: 1,
                          }}
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
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      No se trata de olvidar lo que fue, sino de darte permiso
                      para sanar y avanzar a tu propio ritmo.
                    </Box>
                    <br />
                    ¿Estás viviendo un duelo o cambio difícil?
                    <br />
                    <br />
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      Agenda tu consulta y comencemos a acompañarte en este
                      proceso.
                    </Box>
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

export default Service4;

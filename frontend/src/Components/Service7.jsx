import { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  { name: "Crecimiento personal y hábitos saludables", path: "/service9" },
  { name: "Fobias", path: "/service10" },
  { name: "Trastorno Obsesivo Compulsivo", path: "/service11" },
  { name: "Trastornos del Neurodesarrollo", path: "/service12" },
  { name: "Trastornos de la conducta alimentaria", path: "/service13" },
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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1746012631/7_ttm2ob.png"
      alt="Crianza"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service7 = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

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
                    variant={isMobile ? "h6" : "h5"}
                    component="h2"
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    ¿La crianza te está superando?
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
                      marginBottom: 3,
                    }}
                  >
                    Ser padre o madre puede sentirse como navegar en un mar de
                    emociones intensas. Berrinches, desobediencia y la sensación
                    de que no importa cuánto lo intentes, tu hijo no te escucha.
                    Cuando la paciencia se acaba, los gritos y la culpa
                    aparecen, dejándote con la sensación de estar perdido.
                    <br />
                    <br />
                    Es importante saber que el cerebro de tu hijo
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      no tiene la misma capacidad para regularse
                    </Box>
                    que el tuyo. Mientras tú ya has aprendido a resolver
                    conflictos y manejar problemas, él está desarrollando esas
                    habilidades, lo que convierte cada situación en un desafío
                    emocional.
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      No es que tu hijo no quiera escuchar, es que su cerebro
                      aún está aprendiendo a gestionar las emociones.
                    </Box>
                    La buena noticia es que
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      hay un camino más efectivo y pacífico.
                    </Box>
                    No se trata de ser permisivo ni perder autoridad, sino de
                    aprender a conectar con tu hijo a través de la
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      empatía, la firmeza y la comunicación consciente.
                      <br />
                      <br />
                      En terapia, trabajaremos para:{" "}
                    </Box>
                  </Typography>
                  <List>
                    {[
                      {
                        primary: "Entender cómo funciona el cerebro infantil,",
                        secondary: "y cómo influye en su comportamiento.",
                      },
                      {
                        primary:
                          "Romper patrones de crianza que ya no son efectivos.",
                        secondary: "",
                      },
                      {
                        primary:
                          "Desarrollar estrategias para establecer límites sin necesidad de gritar ni recurrir al castigo.",
                        secondary: "",
                      },
                      {
                        primary: "Fortalecer la relación con tu hijo,",
                        secondary:
                          "para que crezca desde la seguridad y no desde el miedo.",
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
                              </Typography>
                              {secondary && (
                                <>
                                  {" "}
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
                              )}
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
                      {" "}
                      La crianza no es algo que se aprenda por instinto,                   
                       </Box>
                       pero con la guía adecuada
                       puedes aprender a criar desde un lugar de
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      calma y respeto.
                    </Box>
                    Si sientes que estás a
                    punto de rendirte, recuerda:                    
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      al cambiar tu forma de comunicarte, tu hijo
cambiará la forma en que te escucha. <br/>  <br/>
Agenda una consulta conmigo
                    </Box>
                    y comencemos a construir una crianza más
                    pacífica y efectiva para ti y tu hijo.                   
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

export default Service7;

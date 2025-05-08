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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1700/v1746700467/5_epkfcv.png"
      alt="Conflictos interpersonales"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service5 = () => {
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
                    variant={isMobile ? "h7" : "h5"}
                    component="h2"
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    ¿Te sientes atrapado en discusiones constantes con tu
                    pareja, familia o amigos?
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
                    Los conflictos interpersonales pueden distorsionar la manera
                    en que nos vemos a nosotros mismos y generar dolor,
                    frustración y distancia. Sin embargo, el verdadero reto no
                    es el desacuerdo en sí, sino cómo lo gestionamos.
                    <br />
                    <br />
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      La clave para superar estos conflictos radica en
                      comprender su origen y aprender a gestionarlos con
                      inteligencia emocional.
                    </Box>
                    Si notas que las discusiones se han vuelto una constante en
                    tu vida, es momento de reflexionar y buscar una solución
                    profunda.
                    <br />
                    <br />
                    En terapia, exploramos juntos:
                  </Typography>
                  <List>
                    {[
                      {
                        primary: "Identificación del origen del conflicto:",
                        secondary:
                          "Detectar patrones repetitivos, heridas del pasado y expectativas no expresadas.",
                      },
                      {
                        primary: "Comunicación asertiva:",
                        secondary:
                          "Expresar lo que sientes de manera clara y respetuosa, evitando el ataque, el silencio o la evasión.",
                      },
                      {
                        primary: "Gestión de emociones intensas:",
                        secondary:
                          "Controlar impulsos para no reaccionar desde la frustración o el dolor.",
                      },
                      {
                        primary: "Fortalecimiento de la relación:",
                        secondary:
                          "Reconstruir la conexión emocional desde el respeto, la empatía y el entendimiento mutuo.",
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
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      Resolver conflictos no significa ganar una discusión, sino
                      construir relaciones más sanas y satisfactorias.
                    </Box>
                    Si estás listo para recuperar la paz y la armonía en tus
                    relaciones,
                    <Box component="span" sx={{ fontWeight: "bold" }}>
                      agenda una consulta conmigo. Transformemos juntos la
                      manera en que te relacionas con los demás y contigo mismo.
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

export default Service5;

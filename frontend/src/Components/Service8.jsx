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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1700/v1746700404/8_b9cx16.png"
      alt="Productividad y gestión del tiempo"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service8 = () => {
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

                    // Target the wrapper that contains the icon
                    "& .MuiAccordionSummary-expandIconWrapper": {
                      // make it a fixed‐size circle on mobile
                      width: { xs: 39, sm: "auto" },
                      height: { xs: 30, sm: "auto" },
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
                    ¿Sientes que el tiempo se te escapa de las manos?
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
                    La presión por ser productivo y cumplir con las expectativas
                    externas puede llevarnos a olvidarnos de lo más importante:
                    nuestro bienestar. La lucha constante contra el reloj nos
                    consume, pero
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      ¿y si, en lugar de pelear contra el tiempo, aprendiéramos
                      a hacerlo nuestro aliado?
                    </Box>
                    <br /> <br />
                    En terapia, te ayudo a tomar el control de tu tiempo de una
                    forma más equilibrada y saludable. Trabajaremos juntos para:
                  </Typography>

                  <List>
                    {[
                      {
                        primary: "Entender las raíces de la procrastinación,",
                        secondary:
                          "como el estrés, la autoexigencia y el miedo al fracaso.",
                      },
                      {
                        primary: "Organizar tu vida sin sobrecargarte,",
                        secondary: "respetando tus límites y energía.",
                      },
                      {
                        primary: "Definir objetivos realistas,",
                        secondary:
                          "dejándote de comparar con los logros ajenos y enfocándote en tu propio ritmo.",
                      },
                      {
                        primary: "Romper el ciclo de la procrastinación,",
                        secondary:
                          "para que puedas disfrutar de tus logros sin la culpa que te frena.",
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
                      {" "}
                      El tiempo no es tu enemigo,
                    </Box>
                    y la productividad no determina tu valor como persona. No
                    eres tus pendientes ni el ritmo frenético del mundo.
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      Te extiendo mi mano para enseñarte a disfrutar del proceso
                    </Box>
                    , sin que la exigencia te robe la paz.
                    <br /> <br />
                    <Box component="span" sx={{ fontWeight: "bold", mr: 0.5 }}>
                      {" "}
                      Agenda una sesión hoy
                    </Box>
                    y empieza a manejar tu tiempo de forma equilibrada, logrando
                    tus objetivos sin estrés ni presión.
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

export default Service8;

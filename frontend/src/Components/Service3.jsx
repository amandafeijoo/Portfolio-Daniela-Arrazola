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
      src="  https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1746012632/3_xsf3iy.png"
      alt="Autoestima y Conocimiento Personal"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service3 = () => {
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
                    variant={isMobile ? "h7" : "h5"}
                    component="h2"
                    sx={{ fontFamily: "Playfair Display" }}
                  >
                    La relación más importante de tu vida es la que tienes
                    contigo mismo.
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
                    Tu autoestima define cómo te valoras, cómo te hablas y cómo
                    te enfrentas al mundo. Si te miras al espejo y sientes que
                    no eres suficiente… es momento de cambiar esa narrativa. En
                    terapia, trabajamos en cada uno de los pilares de la
                    autoestima:
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
                        primary="Autoconocimiento"
                        secondary="Aprenderás a identificar tus fortalezas y áreas de mejora, entendiendo quién eres realmente."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Autoconcepto"
                        secondary="Descubrirás cómo te percibes y qué creencias tienes sobre ti mismo, para transformarlas en pensamientos más positivos y realistas."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Autoevaluación"
                        secondary="Desarrollarás un criterio propio para analizar tus logros y errores sin castigarte, sino aprendiendo de ellos."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Autoaceptación"
                        secondary="Entenderás que aceptarte no significa conformarte, sino reconocer quién eres sin juicios ni rechazos."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Autorespeto"
                        secondary="Aprenderás a darte el valor que mereces, a poner límites y a priorizarte sin sentir culpa."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
      <Box sx={{ marginBottom: 10, marginTop: 15 }}>
        <Reserva />
      </Box>
    </>
  );
};

export default Service3;

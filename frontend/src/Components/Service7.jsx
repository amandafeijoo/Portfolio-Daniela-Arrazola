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
                      marginBottom: 3,
                    }}
                  >
                    Ser padre puede sentirse como ser el capitán de un barco en
                    medio de una tormenta. Sabes que debes mantener el rumbo,
                    pero las olas de berrinches, desobediencia y frustración
                    pueden hacerte dudar de si realmente lo estás haciendo bien.
                    A veces, por más que repitas lo mismo una y otra vez,
                    sientes que tu hijo simplemente no escucha. Y cuando la
                    paciencia se agota, aparecen los gritos, la culpa y la
                    sensación de estar a la deriva. Pero aquí hay algo que
                    necesitas saber: el cerebro de tu hijo no funciona como el
                    tuyo.
                  </Typography>
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
                    El cerebro infantil es como una semilla en crecimiento,
                    lleno de emociones intensas, pero aún en desarrollo. No
                    tiene la misma capacidad que un adulto para regularse,
                    razonar o anticipar consecuencias. Lo que para ti es lógica,
                    para él es un océano de sensaciones desbordadas.
                  </Typography>
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
                    El cerebro adulto, en cambio, es como un mapa con caminos ya
                    trazados. Tienes experiencia, aprendiste a resolver
                    problemas y reaccionas basándote en lo que viviste. Pero
                    ¿qué pasa si los caminos que aprendiste no son los mejores?
                    Si la única respuesta que conoces ante el caos es el castigo
                    o la exigencia, es normal que te sientas atrapado en un
                    ciclo de frustración.
                  </Typography>
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
                        primary="Romper patrones de crianza heredados que no están funcionando."
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
                        primary="Aprender herramientas prácticas para establecer límites sin gritos ni castigos."
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
                        primary="Fortalecer el vínculo con tu hijo, para que aprenda desde la seguridad y no desde el miedo."
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
                    No nacemos sabiendo ser padres, pero sí podemos aprender a
                    criar desde la calma y el respeto. Si hoy sientes que la
                    crianza te desborda, recuerda: si cambias la forma en que te
                    comunicas con tu hijo, él cambiará la forma en que te
                    escucha.{" "}
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

export default Service7;

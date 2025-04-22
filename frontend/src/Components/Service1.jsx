import { useEffect, useState } from "react";
import { useRef } from "react";
import { img } from "../utils/imagePath";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  keyframes,
  Container,
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
      src={img("1.svg")}
      alt="Service Image"
      width="100%"
      style={{ borderRadius: "inherit" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = img("placeholder.png");
      }}
    />
  </Box>
);

const Service1 = () => {
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
      <Container maxWidth="lg">
        {" "}
        {/* 📌 Define un límite máximo */}
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
            margin: { xs: 1, sm: 2 }, // 📌 Margen reducido en móviles
            padding: { xs: 1, sm: 4, md: 6 },
            border: "2px solid #d2b48c",
            borderRadius: { xs: 1, sm: 2 },
            boxShadow: {
              xs: "0 0 3px 1px rgba(0, 0, 0, 0.2)", // 📌 Menos sombra en móviles
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
                  Si los síntomas de ansiedad o depresión están tomando el
                  control de tu vida...
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
                  Quiero que sepas que muchas personas que atraviesan lo mismo
                  logran recuperar el control de sus vidas con el apoyo
                  profesional adecuado. Las terapias basadas en ciencia están
                  diseñadas para ayudarte a superar este malestar y alcanzar una
                  vida más equilibrada y tranquila.
                  <br />
                  <br />
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
                        primary="ANSIEDAD"
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Preocupación excesiva y miedo persistente sobre situaciones cotidianas."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Miedos intensos e irracionales que no están relacionados con situaciones peligrosas reales."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Dificultad para controlar los pensamientos y sentimientos de ansiedad."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Sentimientos de pánico o terror que ocurren repentinamente (ataques de pánico)."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Preocupación constante que interfiere con las actividades diarias."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Ansiedad intensa que dura mucho tiempo y no se alivia con facilidad."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
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
                        primary="Reacciones desproporcionadas ante situaciones que no representan un peligro real."
                        sx={{
                          color: "#4b3f2f",
                          fontFamily: "Playfair Display",
                        }}
                      />
                    </ListItem>
                  </List>
                  <ListItem
                    sx={{
                      backgroundColor: "#fff",
                      margin: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText
                      primary="DEPRESIÓN"
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
                      primary="Tristeza profunda y constante."
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
                      primary="Pérdida de interés en actividades que antes se disfrutaban."
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
                      primary="Cansancio extremo incluso tras esfuerzos mínimos."
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
                      primary="Sentimientos de culpa o incapacidad."
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
                      primary="Irritabilidad y pesimismo sobre el futuro."
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
                      primary="Pensamientos sobre la muerte o suicidio."
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
                      primary="Falta de confianza en uno mismo o en los demás."
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
                      primary="Dificultad para concentrarse y problemas de memoria."
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
                      primary="Intranquilidad."
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
                      primary="Alteraciones en el sueño (insomnio o sueño excesivo)."
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
                      primary="Disminución del apetito y de la líbido."
                      sx={{ color: "#4b3f2f", fontFamily: "Playfair Display" }}
                    />
                  </ListItem>
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
                  Si la ansiedad o la depresión están afectando tu vida, es
                  momento de actuar. Tu bienestar mental es tan importante como
                  tu salud física, y merece toda tu atención.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
      </Container>
      <Box sx={{ marginBottom: 10, marginTop: 15 }}>
        <Reserva />
      </Box>
    </>
  );
};

export default Service1;

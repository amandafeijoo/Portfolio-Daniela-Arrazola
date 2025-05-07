import { useEffect, useState } from "react";
import { useRef } from "react";
// import { img } from "../utils/imagePath";
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
      src="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1746012633/1_arc3yr.png"
      alt="Ansiedad y Depresión"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
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
                  Identifica los signos de ansiedad para intervenir a tiempo
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
                    marginTop: 2,
                  }}
                >
                  ¿Sientes que tu mente no deja de dar vueltas y te cuesta
                  relajarte? La tensión emocional puede manifestarse de muchas
                  formas, y reconocer sus síntomas es crucial para tomar acción.
                  Estos son algunos de los más comunes:
                  <br />
                  <br />
                  <List>
                    <ListItem
                      sx={{
                        backgroundColor: "#f0f0f0",
                        margin: 1,
                        borderRadius: 1,
                        boxShadow: 1,
                      }}
                    >
                      <ListItemText
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              1. Tu mente no para:
                            </Box>{" "}
                            {/* Resto del texto */}
                            Preocupaciones constantes, incluso sin una razón
                            aparente.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              2. Nudo en el pecho o garganta:
                            </Box>{" "}
                            {/* Resto del texto */}o dificultad para respirar,
                            como si algo te estuviera oprimiendo.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              3. Miedo sin motivo claro:
                            </Box>{" "}
                            {/* Resto del texto */}
                            Sientes un peligro inminente y una angustia
                            generalizada, incluso cuando todo parece estar bien.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              4. No logras soltar el control:
                            </Box>{" "}
                            {/* Resto del texto */}
                            Pensamientos repetitivos que te agotan mental y
                            emocionalmente, haciéndote sentir que necesitas
                            controlar todo.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              5. Ataques de pánico:
                            </Box>{" "}
                            {/* Resto del texto */}
                            Episodios repentinos de miedo extremo, con falta de
                            aire, palpitaciones y sensación de pérdida de
                            control.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              6. Nada te concentra:
                            </Box>{" "}
                            {/* Resto del texto */}
                            interfiere con tu capacidad de enfocarte, afectando
                            también tu calidad de sueño y descanso.
                          </>
                        }
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
                        primary={
                          <>
                            {/* El span en negrita */}
                            <Box
                              component="span"
                              sx={{
                                fontWeight: "bold",
                                color: "#4b3f2f",
                                fontFamily: "Playfair Display",
                              }}
                            >
                              7. Reaccionas con intensidad:
                            </Box>{" "}
                            {/* Resto del texto */}
                            Irritabilidad y reacciones emocionales
                            desproporcionadas, como si todo te sobrepasara y no
                            pudieras manejarlo.
                          </>
                        }
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
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  >
                    ¿Te sientes constantemente desanimado o vacío? Reconoce los
                    signos de tristeza profunda y busca la ayuda que necesitas.{" "}
                  </Typography>
                  <ListItem
                    sx={{
                      backgroundColor: "#f0f0f0",
                      margin: 1,
                      borderRadius: 1,
                      boxShadow: 1,
                    }}
                  >
                    <ListItemText
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            1. Tristeza constante:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Sentimiento de vacío o tristeza persistente sin razón
                          clara.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            2. Falta de energía:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Agotamiento extremo, sin ganas de hacer nada.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            3. Pérdida de interés:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Ya no disfrutas de lo que antes te gustaba.
                          Disminución del apetito y de la líbido.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            4. Sentimientos de inutilidad:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Baja autoestima, te sientes culpable o insuficiente.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            5. Dificultad para concentrarse:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Problemas para tomar decisiones o recordar cosas.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            6. Alteraciones en el sueño:
                          </Box>{" "}
                          {/* Resto del texto */}
                          Insomnio o dormir en exceso, sin descanso real.
                        </>
                      }
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
                      primary={
                        <>
                          {/* El span en negrita */}
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "bold",
                              color: "#4b3f2f",
                              fontFamily: "Playfair Display",
                            }}
                          >
                            7. Pensamientos negativos o suicidas:{" "}
                          </Box>{" "}
                          {/* Resto del texto */}
                          Pensamientos oscuros sobre la vida y el futuro.
                        </>
                      }
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
                  Si te identificas con alguno de estos síntomas, no estás solo.
                  Da el primer paso hacia la recuperación y reserva tu sesión
                  hoy mismo.{" "}
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

export default Service1;

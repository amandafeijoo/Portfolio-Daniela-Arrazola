import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  Tabs,
  Tab,
  keyframes,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { img } from "../utils/imagePath";
import "@fontsource/playfair-display";
import Reserva from "./Reserva";

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

const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

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
      src="  https://res.cloudinary.com/dhikp5azp/image/upload//f_auto,q_auto,w_800/v1746012631/2_u0dr3m.png"
      alt="Regulación emocional"
      loading="lazy"
      width="100%"
      style={{ borderRadius: "inherit", display: "block" }}
    />
  </Box>
);

const Service2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // 📌 Detección de móvil

  const [expanded, setExpanded] = useState(true);
  const handleChange = () => {
    setExpanded(!expanded);
  };
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
                  Aprende a gestionar tus emociones para reducir el estrés y
                  mejorar tu salud mental
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
                  {/* Primera parte en negrita */}
                  ¿Alguna vez sentiste que una emoción te domina por completo?
                  La ira, el miedo, la tristeza o la vergüenza no son enemigos:
                  son señales internas que nos ayudan a entender lo que
                  necesitamos y cómo nos afecta el mundo que nos rodea. El
                  problema no es sentir, sino no saber{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    cómo regular lo que sentimos
                  </Box>
                  .
                  <br />
                  <br />
                  El estrés constante, los duelos, el rechazo o la decepción
                  pueden dejar huellas profundas. Si no aprendemos a
                  procesarlas, estas emociones pueden convertirse en bloqueos
                  que afectan nuestra autoestima, nuestras relaciones y nuestro
                  bienestar físico y mental. Aunque parezca “normal” vivir en
                  modo alerta, tu sistema nervioso no está diseñado para
                  sostener ese estado de forma continua. En consulta, te
                  acompaño a{" "}
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    reentrenar tu cuerpo y mente
                  </Box>
                  , para que puedas salir del modo supervivencia y vivir desde
                  un lugar más sereno y consciente.
                  <br />
                  <br />
                  En terapia psicológica aprenderás a:
                </Typography>

                <List>
                  {[
                    {
                      primary: "Identificar y nombrar cada emoción,",
                      secondary: "comprendiendo su causa y función.",
                    },
                    {
                      primary: "Gestionar su intensidad,",
                      secondary: "sin reprimir ni reaccionar impulsivamente.",
                    },
                    {
                      primary: "Transformarlas en recursos internos,",
                      secondary: "que potencien tu crecimiento y bienestar.",
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
                    Sentir no es el problema, el desafío es aprender a gestionar
                    lo que sientes con equilibrio y conciencia.
                  </Box>
                  <br />
                  ¿Te gustaría recuperar el control emocional y vivir con más
                  estabilidad y bienestar?
                  <br />
                  <br />
                  <Box component="span" sx={{ fontWeight: "bold" }}>
                    Inicia tu proceso de bienestar emocional.
                  </Box>
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

export default Service2;

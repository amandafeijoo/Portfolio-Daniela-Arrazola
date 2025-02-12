import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCommentDots,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppContact = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [language, setLanguage] = useState("");
  const [message, setMessage] = useState("");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    setMessage("");
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/4798315132?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const messages = {
    es: {
      consulta:
        "Hola Daniela, me gustaría obtener más información sobre tus servicios de terapia psicológica. ¿Podrías ayudarme?",
      reserva:
        "Hola Daniela, me gustaría reservar una consulta. ¿Cuáles son tus horarios disponibles?",
      pago: "Hola Daniela, quisiera saber más sobre las opciones de pago. ¿Podrías enviarme los detalles?",
    },
    no: {
      consulta:
        "Hei Daniela, jeg vil gjerne få mer informasjon om dine psykologiske tjenester. Kan du hjelpe meg?",
      reserva:
        "Hei Daniela, jeg vil gjerne bestille en konsultasjon. Hvilke tidspunkter er tilgjengelige?",
      pago: "Hei Daniela, jeg ønsker å vite mer om betalingsalternativene dine. Kan du sende meg detaljene?",
    },
    en: {
      consulta:
        "Hello Daniela, I would like to get more information about your psychological therapy services. Could you help me?",
      reserva:
        "Hello Daniela, I would like to book a consultation. What are your available times?",
      pago: "Hello Daniela, I would like to know more about your payment options. Could you send me the details?",
    },
  };

  return (
    <Box textAlign="center" p={2} position="relative">
      <IconButton
        onClick={() => setShowOptions(!showOptions)}
        sx={{
          color: "#128C7E",
          fontSize: "2.9rem",
          "&:hover": {
            color: "#f5eedc",
          },
        }}
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </IconButton>

      {showOptions && (
        <Box
          mt={2}
          p={3}
          backgroundColor="#f5eedc"
          border="2px solid #d2b48c"
          borderRadius={2}
          boxShadow="0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)"
        >
          <Typography
            variant="h6"
            sx={{ fontFamily: "Playfair Display", marginBottom: 2 }}
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ color: "#305445", marginRight: "8px" }}
            />
            {language === "es" ? (
              "Contacta Daniela via WhatsApp"
            ) : language === "no" ? (
              "Kontakt Daniela via WhatsApp"
            ) : language === "en" ? (
              "Contact Daniela via WhatsApp"
            ) : (
              <>
                Contacta Daniela via WhatsApp /{" "}
                <Box component="span" display="block">
                  Kontakt Daniela via WhatsApp
                </Box>
              </>
            )}
          </Typography>

          {/* Language Selector */}
          <Typography
            variant="body1"
            mt={2}
            sx={{ fontFamily: "Playfair Display" }}
          >
            <FontAwesomeIcon icon={faGlobe} style={{ color: "#305445" }} />
            {language === "es"
              ? "Selecciona un idioma"
              : language === "no"
              ? "Velg et språk"
              : language === "en"
              ? "Select a language"
              : "Selecciona un idioma / Velg et språk"}
          </Typography>
          <Select
            fullWidth
            value={language}
            onChange={handleLanguageChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>Selecciona un idioma / Velg et språk</em>
            </MenuItem>
            <MenuItem value="es">Español 🇪🇸</MenuItem>
            <MenuItem value="no">Norsk 🇳🇴</MenuItem>
            <MenuItem value="en">English 🇬🇧</MenuItem>
          </Select>

          {/* Message Type Selector */}
          {language && (
            <>
              <Typography
                variant="body1"
                mt={2}
                sx={{ fontFamily: "Playfair Display" }}
              >
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ color: "#305445" }}
                />{" "}
                {language === "es"
                  ? "Selecciona tu consulta:"
                  : language === "no"
                  ? "Velg forespørselen din:"
                  : "Select your inquiry:"}
              </Typography>
              <Select
                fullWidth
                value={message}
                onChange={handleMessageChange}
                displayEmpty
              >
                <MenuItem value="">
                  <em>
                    {language === "es"
                      ? "Selecciona una opción"
                      : language === "no"
                      ? "Velg et alternativ"
                      : "Select an option"}
                  </em>
                </MenuItem>
                <MenuItem value={messages[language].consulta}>
                  {messages[language].consulta}
                </MenuItem>
                <MenuItem value={messages[language].reserva}>
                  {messages[language].reserva}
                </MenuItem>
                <MenuItem value={messages[language].pago}>
                  {messages[language].pago}
                </MenuItem>
              </Select>
            </>
          )}

          {/* Button to open WhatsApp */}
          {message && (
            <Button
              variant="contained"
              color="success"
              startIcon={
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#f5eedc" }}
                />
              }
              onClick={handleWhatsAppRedirect}
              sx={{
                mt: 2,
                fontFamily: "Playfair Display",
                fontSize: "1rem",
                textTransform: "none",
                backgroundColor: "#128C7E",
                "&:hover": { backgroundColor: "#305445" },
              }}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: "#f5eedc", marginRight: "8px" }}
              />{" "}
              {language === "es"
                ? "Enviar mensaje a WhatsApp"
                : language === "no"
                ? "Send melding til WhatsApp"
                : "Send message to WhatsApp"}
            </Button>
          )}
        </Box>
      )}
    </Box>
  );
};

export default WhatsAppContact;

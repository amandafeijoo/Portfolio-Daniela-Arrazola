import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";
import WhatsAppContact from "./WhatsAppContact";

const ContactContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("/images/contact.svg"); 
  background-size: cover;
  background-position: center;
  background-color: #e8ddce;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const WhatsAppContainer = styled.div`
  font-size: 2em;
  margin-top: -10px;
  margin-right: -20px;
  position: absolute; 
  width: 300px;
  height: auto;
  overflow: visible;
  z-index: 200; 
`;

const ContactInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ContactInfo = styled(Box)`
  background-color: #e8ddce;
  padding: 30px;
  border-radius: 15px;
  color: rgb(142, 122, 96);
  width: 120%;
  margin-left: 90px;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
  text-align: left;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1rem;

  svg {
    margin-right: 10px;
    color: rgb(142, 122, 96); 
    font-size: 1.3rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  margin-top: 70px;
  margin-right: 70px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  cursor: pointer;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const QuestionBubble = styled(Box)`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 15px;
  border-radius: 20px;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  color: #4b3f2f;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <ContactContainer>
      {/* Sección de Contacto con Iconos arriba */}
      <ContactInfoContainer>
        <WhatsAppContainer>
          <WhatsAppContact />
        </WhatsAppContainer>
        <Box
          position="absolute"
          top="300px"
          background="white"
          padding="15px"
          borderRadius="10px"
          border="2px solid #d2b48c"
          boxShadow="0px 5px 15px rgba(0, 0, 0, 0.6)"
          zIndex="100"
          marginLeft="1290px"
          width="250px"
        >
          <Typography fontSize="1.1rem" fontWeight="bold">
            Preguntas Frecuentes
          </Typography>
          <Typography fontSize="0.9rem">
            Aquí puedes ver las preguntas más comunes sobre la terapia.
          </Typography>
          <button onClick={() => navigate("/faq")}>Ir a FAQ</button>
        </Box>
        <ContactInfo>
          <Typography variant="h5" fontWeight="bold" sx={{ marginBottom: 2 }}>
            CONTÁCTAME
          </Typography>
          <InfoItem>
            <a href="tel:+479831513">
              <FaPhoneAlt /> +47 9831513
            </a>
          </InfoItem>
          <InfoItem>
            <a href="mailto:danielaarrazolabenitez@gmail.com">
              <FaEnvelope /> danielaarrazolabenitez@gmail.com
            </a>
          </InfoItem>
          <InfoItem>
            <FaMapMarkerAlt /> Madrid, España
          </InfoItem>
          <Typography fontWeight="bold" sx={{ marginBottom: 1 }}>
            <FaClock /> Horario:
          </Typography>
          <Typography>Lunes - Jueves: 10:00-14:00 y 16:00-20:00</Typography>
          <Typography>Viernes: 09:00-15:00</Typography>
        </ContactInfo>
      </ContactInfoContainer>

      {/* Sección del Móvil con el Video */}
      <VideoContainer onClick={() => navigate("/faq")}>
        <QuestionBubble>¿Cuánto tiempo debo hacer terapia?</QuestionBubble>
        <video autoPlay loop muted playsInline preload="metadata">
          <source src="/images/contact.mp4" type="video/mp4" loading="lazy" />
          Tu navegador no soporta el video.
        </video>
      </VideoContainer>
    </ContactContainer>
  );
};

export default ContactSection;

import { useEffect } from "react";
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


const colors = {
  greenLight:  '#ABC4AA',
  green:       '#8AA398',
  greenDark:   '#40513B',
  beige:       '#EBDCC8',
  brown:       '#8B7355',
};

const ContactContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_1600/v1745570838/Historia_de_Instagram_Lista_de_Precios_de_Joyas_Elegante_Negro_y_Beige_V%C3%ADdeo_qxuzag_di9opo.jpg");
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
    padding: 30px;
  }
`;



/* 🔹 Ajuste para subir el icono de WhatsApp */
const WhatsAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
  position: absolute;
  top: 180px; /* 🔥 Más arriba en iPhone 15 Pro */
  right: -30px;

  @media (max-width: 768px) {
    position: relative;
    top: 10px;
    right: 0;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

const ContactInfoContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContactInfo = styled(Box)`
  background-color: #e8ddce;
  padding: 30px;
  border-radius: 15px;
  color: rgb(142, 122, 96);
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.8);
  text-align: left;

  @media (max-width: 768px) {
    width: 120%;
    padding: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 15px;
  font-size: 1rem;
  flex-wrap: nowrap;

  svg {
    color: rgb(142, 122, 96);
    font-size: 1.3rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

/* 🔹 Ajuste para el Video */
const VideoContainer = styled(Box)`
  position: relative;
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  cursor: pointer;

  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin-top: 30px;
  }
`;

const FAQBox = styled(Box)`
  position: absolute;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  display: grid;
  gap: 0.5rem;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  background: ${colors.beige};
  color: rgb(56, 72, 59);
  border: 2px solid #d2b48c;
  z-index: 100;
  width: 250px;
  text-align: center;
/* aquí estilo el button interno */
button {
    background-color:  ${colors.greenLight};
    color:             ${colors.greenDark};
    padding:           0.75rem 1.5rem;
    border:            none;
    border-radius:     0.5rem;
    font-size:         1rem;
    font-weight:       600;
    cursor:            pointer;
    transition:        background-color 0.2s ease, transform 0.1s ease;
    box-shadow:        0 4px 8px rgba(0,0,0,0.1);
  }

  button:hover {
    background-color: ${colors.green};
    transform:        translateY(-2px);
  }

  button:active {
    background-color: ${colors.greenDark};
    color:            #fff;
    transform:        translateY(0);
  }


  @media (max-width: 768px) {
    width: 90%;
    margin-top: -10px;
  }
`;



const QuestionBubble = styled(Box)`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(230, 215, 201, 0.9);
  padding: 10px 15px;
  border-radius: 20px;
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 1rem;
  color: rgb(47, 57, 48);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const ContactSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


  return (
    <ContactContainer>
      {/* Sección de Contacto con Iconos arriba */}
      <ContactInfoContainer>
        <WhatsAppContainer>
          <WhatsAppContact />
        </WhatsAppContainer>
        <ContactInfo>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{
              marginBottom: 2,
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
            }}
          >
            CONTÁCTAME
          </Typography>

          <InfoItem>
            <a href="tel:+479831513">
              <FaPhoneAlt />
              <Typography
                sx={{
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                +47 9831513
              </Typography>
            </a>
          </InfoItem>

          <InfoItem>
            <a href="mailto:danielaarrazolabenitez@gmail.com">
              <FaEnvelope />
              <Typography
                sx={{
                  fontSize: { xs: "0.rem", sm: "1rem", md: "1.1rem" },
                }}
              >
                danielaarrazolabenitez@gmail.com
              </Typography>
            </a>
          </InfoItem>

          <InfoItem>
            <FaMapMarkerAlt />
            <Typography
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Madrid, España
            </Typography>
          </InfoItem>

          <Typography
            fontWeight="bold"
            sx={{
              marginBottom: 1,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
            }}
          >
            <FaClock /> Horario:
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Lunes - Jueves: 10:00-14:00 y 16:00-20:00
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            }}
          >
            Viernes: 09:00-15:00
          </Typography>
        </ContactInfo>
      </ContactInfoContainer>
       {/* Sección de Video */}
       <VideoContainer onClick={() => navigate("/faq")}>
  <QuestionBubble>¿Cuánto tiempo debo hacer terapia?</QuestionBubble>

  <video
    autoPlay
    loop
    muted
    playsInline
    preload="none"
    poster="https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_800/v1745570838/Historia_de_Instagram_Lista_de_Precios_de_Joyas_Elegante_Negro_y_Beige_V%C3%ADdeo_qxuzag_di9opo.jpg"
  >
    <source
      src="https://res.cloudinary.com/dhikp5azp/video/upload/f_auto,q_auto,w_800/v1745570161/Work_wholeheartedly_and_you_will_get_good_results.-6_cs9hlf.mp4"
      type="video/mp4"
    />
    Tu navegador no soporta el video.
  </video>

  <FAQBox>
    <Typography fontSize="1.1rem" fontWeight="bold">
      Preguntas Frecuentes
    </Typography>
    <Typography fontSize="0.9rem">
      Aquí puedes ver las preguntas más comunes sobre la terapia.
    </Typography>
    <button onClick={() => navigate("/faq")}>Ir a FAQ</button>
  </FAQBox>
</VideoContainer>

    </ContactContainer>
  );
};

export default ContactSection;

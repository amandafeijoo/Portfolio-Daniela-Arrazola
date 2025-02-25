import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import WhatsAppContact from "./WhatsAppContact";

// 📌 Definimos la animación de flotación
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); } /* 🔥 Sube 8px */
  100% { transform: translateY(0px); }
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 70px;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

// 📌 Contenedor Flotante Circular
const FloatingContainer = styled.div`
  position: relative; /* Agrega esta línea */
  top: -50px;
  right: -100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
    z-index: 1; 
`;

// 📌 Botón flotante con animación
const FloatingButton = styled.div`
  width: 87px;
  height: 87px;
  background-color: rgb(127, 153, 136);
  border: 2px solid #c0a080;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${floatAnimation} 3s infinite ease-in-out; /* 🔥 Se mueve arriba y abajo */

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

// 📌 Video con estilos mejorados
const Video = styled.video`
  width: 120%;
  height: auto;
  border-radius: 10px;
  margin-left: 160px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;

  @media (min-width: 768px) {
    width: 200%;
  }
`;

const ReservationVideo = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate("/faq");
  };

  return (
    <VideoContainer>
      {/* 📌 Contenedor Flotante para WhatsApp y FAQ */}
      <FloatingContainer>
        <FloatingButton>
          <WhatsAppContact />
        </FloatingButton>
        <FloatingButton onClick={handleFaqClick}>
          <img src="/images/faq.svg" alt="FAQ" />
        </FloatingButton>
      </FloatingContainer>

      {/* 📌 Video */}
      <Video autoPlay loop muted>
        <source src="/images/reserva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default ReservationVideo;

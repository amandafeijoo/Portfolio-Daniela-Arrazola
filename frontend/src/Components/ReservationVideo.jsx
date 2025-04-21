import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import WhatsAppContact from "./WhatsAppContact";
import { img } from "../utils/imagePath";


// 📌 Animación flotante
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// 📌 Contenedor Principal Responsivo
const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px; 
  margin: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`;

// 📌 Contenedor Flotante (los botones estarán en fila en iPhone 15 Pro)
const FloatingContainer = styled.div`
  display: flex;
  flex-direction: row; /* 🔥 Siempre en fila */
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;


`;

// 📌 Botón flotante con animación
const FloatingButton = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgb(127, 153, 136);
  border: 2px solid #c0a080;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${floatAnimation} 3s infinite ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

// 📌 Video sin cortes y con altura ajustada automáticamente
const Video = styled.video`
  width: 100%;
  height: auto; /* 🔥 Se adapta sin cortar */
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
  object-fit: contain; /* 🔥 Evita recortes */

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 5px;
  }
`;

const ReservationVideo = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate("/faq");
  };

  return (
    <VideoContainer>
      {/* 📌 Contenedor de botones flotantes */}
      <FloatingContainer>
        <FloatingButton>
          <WhatsAppContact />
        </FloatingButton>
        <FloatingButton onClick={handleFaqClick}>
        <img src={img("faq.svg")} alt="FAQ" />
        </FloatingButton>
      </FloatingContainer>

      {/* 📌 Video sin cortes */}
      <Video autoPlay loop muted playsInline controlsList="nofullscreen">
      <source src={img("reserva.mp4")} type="video/mp4" />
        Tu navegador no soporta el video.
      </Video>
    </VideoContainer>
  );
};

export default ReservationVideo;

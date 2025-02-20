import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WhatsAppContact from "./WhatsAppContact";

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;

  @media (min-width: 768px) {
    width: 200%;
  }
`;

const Image = styled.img`
  width: 80%;
  margin-top: 10px;
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 768px) {
    width: 50%;
    margin-top: 2px;
  }
`;

const WhatsAppContainer = styled.div`
  font-size: 2em;
  margin-top: -30px;
  margin-right: -70px;
  position: relative;
  width: 300px;
  height: auto;
  overflow: visible;

  @media (max-width: 768px) {
    width: 80%; /* Ajusta el tamaño del contenedor de WhatsApp para dispositivos móviles */
    margin-right: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  margin-right: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    width: 140px;
    margin-top: -50px;
  }
`;

const ReservationVideo = () => {
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate("/faq");
  };

  return (
    <VideoContainer>
      <FlexContainer>
        <WhatsAppContainer>
          <WhatsAppContact />
        </WhatsAppContainer>
        <Image src="/images/faq.svg" alt="FAQ" onClick={handleFaqClick} />
      </FlexContainer>
      <Video autoPlay loop muted>
        <source src="/images/reserva.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default ReservationVideo;

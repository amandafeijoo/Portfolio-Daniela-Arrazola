import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WhatsAppContact from "./WhatsAppContact";

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  padding: 10px;
`;

const Video = styled.video`
  width: 200%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Image = styled.img`
  width: 50%;
  margin-top: 2px;
  border-radius: 10px;
  transition: transform 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
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
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
  margin-right: 50px;
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

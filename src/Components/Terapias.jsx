import React from "react";
import styled from "styled-components";

const TerapiasContainer = styled.div`
  width: 75%;
  height: 700px;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: sticky; /* Cambiado a sticky */
  top: 0; /* Para que se quede en la parte superior al hacer scroll */
  z-index: 2;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;

  @media (max-width: 1024px) {
    /* iPad Pro */
    width: 80%;
    margin-top: 15px;
    margin-bottom: 50px;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    width: 85%;
    margin-top: 10px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    width: 90%;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    width: 95%;
    margin-top: 5px;
    margin-bottom: 70px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  background-color: #d2b48c;
  border-radius: 15px;
`;

const Video = styled.video`
  width: 90%;
  height: 90%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 3px solid #d2b48c;
`;

const Terapias = () => {
  return (
    <TerapiasContainer>
      <VideoContainer>
        <Video src="/images/terapia.mp4" autoPlay loop muted playsInline />
      </VideoContainer>
    </TerapiasContainer>
  );
};

export default Terapias;

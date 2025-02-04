import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faClock,
  faUsers,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  position: relative;
  border: 2px solid #d2b48c;
  text-align: center;
  margin-bottom: 100px;
  background-color: #f5f5dc;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  margin-bottom: 150px;
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.6) 50%,
    rgba(85, 124, 112, 0.2) 85%
  );
  background-size: 200% 200%;
  animation: move 10s ease infinite;
  @keyframes move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(
    auto-fit,
    minmax(400px, 1fr)
  ); 
  gap: 50px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  margin: 20px;
  margin-bottom: 90px;
  background-size: 200% 200%;
  width: 95%;
  overflow: hidden;
  margin: 0 auto;
  background-color: #d4cbb5;
`;

const InfoBox = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.bgColor};
  border-radius: 15px;
  border: 2px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  color: #f5eedc;
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(85, 124, 112, 0.2);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    transform: translateY(-12px);
  }
`;

const IconWrapper = styled.div`
  margin: 0 0 10px 0;
  color: #305445;
  background-color: #f5eedc;
  border-radius: 30%;
  padding: 12px;
  font-size: 1;
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #793535;
  border: 1px solid #793535;
  margin-bottom: 40px;

  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(34, 139, 34, 0.3);
  }
`;

const InfoContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const InfoTitle = styled.h3`
  margin: 0;
  font-size: 1em;
  text-align: center;
  margin-bottom: 20px;
  color: #4b3f2f;
  font-family: "Playfair Display", serif;
`;

const InfoContent = styled.p`
  margin: 5px 0 0 0;
  margin-bottom: 0px;
  margin-top: 10px;
  font-size: 0.9em;
  text-align: center;
  color: #305445;
`;

const InfoBoxes = () => {
  const [scrollY, setScrollY] = useState(0);
  const [direction, setDirection] = useState("down");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) {
        setDirection("down");
      } else {
        setDirection("up");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <Container>
      <InfoContainer>
        <InfoBox
          bgColor="rgba(34, 139, 34, 0.3)"
          animate={{ x: direction === "down" ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={faVideo} size="2x" />
          </IconWrapper>
          <InfoContentWrapper>
            <InfoTitle>
              ¿EN QUÉ PLATAFORMA REALIZAREMOS LA CONSULTA ONLINE?
            </InfoTitle>
            <InfoContent>A través de la plataforma online Zoom.</InfoContent>
          </InfoContentWrapper>
        </InfoBox>
        <InfoBox
          bgColor="rgba(34, 139, 34, 0.2)"
          animate={{ x: direction === "down" ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </IconWrapper>
          <InfoContentWrapper>
            <InfoTitle>¿DURACIÓN Y TIEMPO DE LAS CONSULTAS?</InfoTitle>
            <InfoContent>⏱ 60 minutos por sesión.</InfoContent>
          </InfoContentWrapper>
        </InfoBox>
        <InfoBox
          bgColor="rgba(34, 139, 34, 0.2)"
          animate={{ x: direction === "down" ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={faUsers} size="2x" />
          </IconWrapper>
          <InfoContentWrapper>
            <InfoTitle>¿CON QUIÉN TRABAJO?</InfoTitle>
            <InfoContent>Trabajo con adultos mayores de 18 años.</InfoContent>
          </InfoContentWrapper>
        </InfoBox>
        <InfoBox
          bgColor="rgba(34, 139, 34, 0.4)"
          animate={{ x: direction === "down" ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <IconWrapper>
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
          </IconWrapper>
          <InfoContentWrapper>
            <InfoTitle>FORMAS DE PAGO</InfoTitle>
            <InfoContent>Paypal, Bizum (España) y Vipps (Noruega).</InfoContent>
          </InfoContentWrapper>
        </InfoBox>
      </InfoContainer>
    </Container>
  );
};

export default InfoBoxes;

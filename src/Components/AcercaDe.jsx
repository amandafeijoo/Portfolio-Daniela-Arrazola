import React from "react";
import styled from "styled-components";
import "@fontsource/playfair-display"; 

const Container = styled.div`
  position: relative;
  border: 2px solid #d2b48c;
  text-align: center;
  margin-bottom: 150px; 
  background-color: #f5f5dc; 
  padding: 20px; 
  border-radius: 15px; 
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4); 
  margin: 0 auto;
  width: 85%;
  max-width: 1000px;
  height: 1140px; 
  overflow: hidden;
  position: relative;
  margin-top: 50px;
  margin-bottom: 50px; 
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

  @media (max-width: 1024px) { /* iPad Pro */
    width: 92%;
    padding: 15px;
  }

  @media (max-width: 834px) { /* iPad Air */
    width: 97%;
    padding: 10px;
  }

  @media (max-width: 768px) { /* iPad Mini */
    width: 97%;
    padding: 10px;
    height: 920px; /* Adjusted height for iPad Mini */
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    width: 102%;
    padding: 17px;
    height: 888px; /* Adjusted height for iPhone */
  }
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 490px;
  border-radius: 20%;
  border: 2px solid white;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  position: absolute;
  top: -50px; 
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) { /* iPad Mini */
    width: 300px;
    height: 370px;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    width: 250px;
    height: 300px;
    
  }
`;

const ProfileImageBottom = styled(ProfileImage)`
  top: auto;
  bottom: 25px; 
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  align-items: center;

  @media (max-width: 768px) { /* iPad Mini */
    bottom: 30px;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    bottom: 58px; 
  }
`;

const TextContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 100px; 
  color: #4b3f2f;
  font-family: "Playfair Display", serif;
  text-align: justify;
  position: relative;
  background-color: #d2b48c; 
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  margin: 0 auto;
  width: 80%;
  height: 700px; 

  @media (max-width: 768px) { /* iPad Mini */
    width: 90%;
    padding: 30px;
    height: auto;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    width: 95%;
    padding: 20px;
    height: auto;
    margin-top: 10px;
  }
`;

const ReadMoreButton = styled.button`
  font-family: "Playfair Display", serif;
  position: absolute;
  bottom: 70px;
  right: 150px;
  padding: 18px 20px;
  background: rgba(75, 63, 47, 0.6); 
  color: #f5eedc; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  transition: background 0.3s;
  margin-top: 20px; /* Added margin-top */

  &:hover {
    background: linear-gradient(
      45deg,
      rgba(58, 47, 36, 0.8),
      rgba(58, 47, 36, 0.5)
    ); 
  }

  @media (max-width: 768px) { /* iPad Mini */
    bottom: 50px;
    right: 100px;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    bottom: 7px;
    right: 150px;
    padding: 10px 12px;
    font-size: 12px;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2em;
  color: #6f4e37; 
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 700; 

  @media (max-width: 768px) { /* iPad Mini */
    font-size: 1.8em;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    font-size: 1.5em;
  }
`;

const StyledH2 = styled.h2`
  font-size: 3em;
  color: #4b3f2f;
  margin-bottom: 15px;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) { /* iPad Mini */
    font-size: 2.5em;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    font-size: 2em;
  }
`;

const StyledP = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  color: #4b3f2f;
  margin-bottom: 10px;
  font-family: "Playfair Display", serif;

  @media (max-width: 768px) { /* iPad Mini */
    font-size: 1em;
  }

  @media (max-width: 430px) { /* iPhone 15, iPhone 15 Pro */
    font-size: 0.9em;
  }
`;

const AcercaDe = () => {
  return (
    <Container>
      <TextContainer>
        <StyledH1>Acerca de</StyledH1>
        <StyledH2>Daniela Arrazola</StyledH2>
        <StyledP>
          La vida no viene con un manual, y como tú, yo también estoy en
          constante aprendizaje. Mi mayor impulso como terapeuta es mi propia
          humanidad: sé lo que es enfrentarse a días difíciles, sentir que no
          puedes con todo y, aun así, buscar una forma de avanzar.
        </StyledP>
        <StyledP>
          Inicié mi camino en Criminología, con un Máster en Seguridad Privada y
          la titulación de Detective Privado. Sin embargo, encontré mi verdadera
          vocación en la Psicología, donde puedo ayudarte a cuidar tu salud
          mental.
        </StyledP>
        <StyledP>
          Cuando no estoy trabajando, puedes encontrarme disfrutando de la
          naturaleza, bailando, viajando o explorando experiencias
          gastronómicas. Estas pasiones me ayudan a reconectar y seguir
          creciendo, tanto personal como profesionalmente.
        </StyledP>
      </TextContainer>
      <ReadMoreButton>Leer más</ReadMoreButton>
      <ProfileImageBottom src="images/profile.svg" alt="Profile" />
    </Container>
  );
};

export default AcercaDe;

import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "@fontsource/playfair-display";

const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const FullAcercaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #557c70;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Name = styled.h1`
  font-size: 4.5em;
  color: "rgba(255, 255, 255, 0.2)";
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 20px;
`;

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5);
  background-color: #8fa99e;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones */
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }
`;

const Section2 = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.6),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5);
  background-color: #7f918e;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones */
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  max-width: 40%;
  font-size: 1.1em;
  line-height: 1.6;
  color: #4b3f2f;
  font-family: "Playfair Display", serif;
  text-align: justify;
  background-color: #f5eedc;
  border: 3px solid #b07241;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.9),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  height: 550px;
  transition: all 0.3s ease-in-out;
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 50%;
  padding: 10px;
  align-items: center;
  animation: ${moveAnimation} 3s infinite; 
`;

const Video = styled.video`
  width: 70%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const FullAcerca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <FullAcercaContainer>
      <Name>Daniela Arrázola</Name>
      <Section>
        <ContentContainer>
          <TextContainer>
            Quiero compartirte un pedacito de mi historia, porque creo que la
            conexión genuina empieza desde la autenticidad.
            <br />
            Mi vida ha sido todo menos lineal, llena de momentos de reinvención.
            <br />
            Nací en Colombia, crecí en Noruega y, finalmente, elegí España para
            cumplir mis sueños. En cada etapa, me tocó empezar de cero,
            adaptarme a nuevas realidades y aprender a vivir en culturas muy
            distintas. Aunque los retos fueron grandes, hoy agradezco este
            recorrido que me ha dado visión única sobre el valor de las
            transiciones y el crecimiento personal. Si alguna vez te has sentido
            perdido o sin rumbo, quiero que sepas que yo también he estado allí.
          </TextContainer>
          <VideoContainer>
            <Video autoPlay loop muted>
              <source src="/images/acerca1.1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
        </ContentContainer>
      </Section>
      <ContentContainer>
        <VideoContainer>
          <Video autoPlay loop muted>
            <source src="/images/acerca3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
        <TextContainer>
          Sabía que quería dejar una huella positiva, y fue así como decidí
          estudiar Criminología y Psicología, movida por la necesidad de
          acompañar a personas con realidades difíciles como el tráfico humano,
          especialmente en mujeres y niñas. Sin embargo, decidí inclinarme por
          la psicología, la cual me ha enseñado que cada persona tiene una
          historia, pero también el poder de escribir nuevas páginas. Después de
          10 años de formación, mi misión es clara: quiero que quienes lleguen a
          mí se vayan mejor de lo que llegaron.
          <br />
          Me considero extrovertida y profundamente sensible, creo que ambas
          cualidades me permiten conectar conmigo misma y con los demás. Me
          mueve una curiosidad infinita por aprender, crecer y nutrirme de
          experiencias que expandan mi visión del mundo.
        </TextContainer>
      </ContentContainer>
      <Section2>
        <ContentContainer>
          <TextContainer>
            El verde es el color de este proyecto porque representa dos partes
            fundamentales de mi historia: la belleza de la naturaleza noruega y
            la fuerza de las esmeraldas colombianas. Para mí, el verde es
            sinónimo de vida, crecimiento y conexión.
            <br />
            Cuando no trabajo me encontrarás disfrutando del sol y de los
            paisajes naturales, también bailando diferentes ritmos
            latinoamericanos, visitando algún rincón del mundo o disfrutando de
            increíbles experiencias gastronómicas.
            <br />
            Gracias a mi historia de vida y a mis constantes viajes entre ambos
            países, puedo ofrecerte terapia en los dos idiomas: noruego y
            español.
          </TextContainer>
          <VideoContainer>
            <Video autoPlay loop muted>
              <source src="/images/acerca2.2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          </VideoContainer>
        </ContentContainer>
      </Section2>
    </FullAcercaContainer>
  );
};

export default FullAcerca;

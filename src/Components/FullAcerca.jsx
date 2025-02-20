import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import "@fontsource/playfair-display";

const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const FullAcercaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #557c70;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border: 2px solid #d2b48c;
  width: 100%;
  max-width: 1400px;
  margin: auto;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #f5eedc;
  margin-bottom: 20px;
  font-family: "Playfair Display", serif;
  text-align: center;
  padding: 20px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #8fa99e;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Section2 = styled(Section)`
  background-color: #7f918e;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  width: 100%;
  font-size: clamp(1rem, 2vw, 1.1rem);
  line-height: 1.6;
  color: #4b3f2f;
  font-family: "Playfair Display", serif;
  text-align: justify;
  background-color: #f5eedc;
  border: 2px solid #b07241;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 100%;
  padding: 10px;
  animation: ${moveAnimation} 3s infinite;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const Video = styled.video`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
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
            </Video>
          </VideoContainer>
        </ContentContainer>
      </Section>

      <Section>
        <ContentContainer>
          <VideoContainer>
            <Video autoPlay loop muted>
              <source src="/images/acerca3.mp4" type="video/mp4" />
            </Video>
          </VideoContainer>
          <TextContainer>
            Sabía que quería dejar una huella positiva, y fue así como decidí
            estudiar Criminología y Psicología, movida por la necesidad de
            acompañar a personas con realidades difíciles como el tráfico
            humano, especialmente en mujeres y niñas. Sin embargo, decidí
            inclinarme por la psicología, la cual me ha enseñado que cada
            persona tiene una historia, pero también el poder de escribir nuevas
            páginas. Después de 10 años de formación, mi misión es clara: quiero
            que quienes lleguen a mí se vayan mejor de lo que llegaron.
            <br />
            Me considero extrovertida y profundamente sensible, creo que ambas
            cualidades me permiten conectar conmigo misma y con los demás. Me
            mueve una curiosidad infinita por aprender, crecer y nutrirme de
            experiencias que expandan mi visión del mundo.
          </TextContainer>
        </ContentContainer>
      </Section>

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
            </Video>
          </VideoContainer>
        </ContentContainer>
      </Section2>
    </FullAcercaContainer>
  );
};

export default FullAcerca;

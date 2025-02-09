import React from "react";
import styled from "styled-components";

const FullAcercaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Name = styled.h1`
  font-size: 2.5em;
  color: #4b3f2f;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  font-size: 1.2em;
  line-height: 1.6;
  color: #333;
`;

const VideoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Video = styled.video`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 400px; /* Aumenta el ancho de las imágenes */
  height: auto;
  margin: 0 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
  border-radius: 15px;
`;

const FullAcerca = () => {
  return (
    <FullAcercaContainer>
      <Name>Daniela Arrázola</Name>
      <ContentContainer>
        <TextContainer>
          Quiero compartirte un pedacito de mi historia, porque creo que la
          conexión genuina empieza desde la autenticidad.
          <br />
          Mi vida ha sido todo menos lineal, llena de momentos de reinvención.
          <br />
          Nací en Colombia, crecí en Noruega y, finalmente, elegí España para
          cumplir mis sueños. En cada etapa, me tocó empezar de cero, adaptarme
          a nuevas realidades y aprender a vivir en culturas muy distintas.
          Aunque los retos fueron grandes, hoy agradezco este recorrido que me
          ha dado visión única sobre el valor de las transiciones y el
          crecimiento personal. Si alguna vez te has sentido perdido o sin
          rumbo, quiero que sepas que yo también he estado allí.
        </TextContainer>
        <VideoContainer>
          <Video autoPlay loop muted>
            <source src="/images/acerca1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </ContentContainer>
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
      <ContentContainer>
        <TextContainer>
          El verde es el color de este proyecto porque representa dos partes
          fundamentales de mi historia: la belleza de la naturaleza noruega y la
          fuerza de las esmeraldas colombianas. Para mí, el verde es sinónimo de
          vida, crecimiento y conexión.
          <br />
          Cuando no trabajo me encontrarás disfrutando del sol y de los paisajes
          naturales, también bailando diferentes ritmos latinoamericanos,
          visitando algún rincón del mundo o disfrutando de increíbles
          experiencias gastronómicas.
          <br />
          Gracias a mi historia de vida y a mis constantes viajes entre ambos
          países, puedo ofrecerte terapia en los dos idiomas: noruego y español.
        </TextContainer>
        <VideoContainer>
          <Video autoPlay loop muted>
            <source src="/images/acerca2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
        </VideoContainer>
      </ContentContainer>
      <ImagesContainer>
        <Image src="/images/acerca1.svg" alt="Acerca 1" />
        <Image src="/images/acerca2.svg" alt="Acerca 2" />
        <Image src="/images/acerca3.svg" alt="Acerca 3" />
      </ImagesContainer>
    </FullAcercaContainer>
  );
};

export default FullAcerca;

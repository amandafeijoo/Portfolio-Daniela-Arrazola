// src/components/FullAcerca.jsx
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import "@fontsource/playfair-display";
import { Typography, Box } from "@mui/material";

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
  background-color: rgb(104, 144, 132);
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  border: 2px solid #d2b48c;
  width: 100%;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 15px;
    width: 95%;
  }
  @media (max-width: 320px) {
    padding: 10px;
    width: 100%;
    max-width: 110%;
  }
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
  width: 90%;
  max-width: 700px;
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
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 90%;
    padding: 18px;
  }
  @media (max-width: 393px) {
    width: 130%;
    max-width: 230%;
    font-size: 1rem;
    line-height: 1.7;
    margin-left: -33px;
    padding: 18px;
  }
  @media (min-width: 1024px) {
    max-width: 700px;
    padding: 25px;
  }
`;

const MediaContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
  animation: ${moveAnimation} 3s infinite;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

// Componente para imagen responsiva Cloudinary
import PropTypes from "prop-types";

function ResponsiveImage({ publicId, alt }) {
  const base = `https://res.cloudinary.com/dhikp5azp/image/upload`;
  const flags = `f_auto,q_auto,dpr_auto`;
  const widths = [320, 640, 960, 1280];
  const srcSet = widths
    .map((w) => `${base}/${flags},w_${w}/${publicId}.png ${w}w`)
    .join(", ");

  return (
    <img
      src={`${base}/${flags},w_640/${publicId}.png`}
      srcSet={srcSet}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
      loading="lazy"
      alt={alt}
      style={{
        width: "60%",
        height: "auto",
        borderRadius: "15px",
        boxShadow: [
          "0 0 5px 2px rgba(0, 0, 0, 0.3)",
          "0 0 10px 4px rgba(34, 139, 34, 0.2)",
          "0 0 15px 6px rgba(0, 0, 0, 0.5)",
        ].join(", "),
      }}
    />
  );
}

// Removed duplicate ResponsiveImage.propTypes declaration

const FullAcerca = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // Preload
    const imgs = [
      "v1746407263/1_oy23bt",
      "v1746407262/3_khk7e6",
      "v1746407261/2_jvx6dl",
    ];
    imgs.forEach((id) => {
      const i = new Image();
      i.src = `https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_640/${id}.png`;
    });
  }, []);

  return (
    <FullAcercaContainer>
      <Name>Daniela Arrázola</Name>

      <Section>
        <ContentContainer>
          <TextContainer>
            {/* Título grande */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                textAlign: "left",
                mb: 2,
              }}
            >
              Sobre mí
            </Typography>

            {/* Texto descriptivo */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              La vida no viene con un manual, y como tú, yo también estoy en
              constante aprendizaje. Mi mayor impulso como terapeuta es mi
              propia humanidad: Nací en Colombia, crecí en Noruega y elegí
              España como mi hogar. Cada país dejó algo en mí, me invitó a
              soltar lo conocido y también me obligó a empezar de nuevo. Aprendí
              a cambiar de idioma, de casa, de piel. Me adapté, me esforcé por
              encajar, y sin darme cuenta, fui dejando partes de mí en el
              intento. Hasta que comprendí que poner límites no me aleja de los
              demás, me acerca a mí misma. Desde entonces, los límites se
              convirtieron en un puente hacia mi autenticidad. Me han ayudado a
              vivir con coherencia, a cuidar mi bienestar emocional y a
              enseñarle al mundo cómo deseo ser tratada. Por eso hoy, desde mi
              experiencia y formación como psicóloga especializada en límites y
              regulación emocional, acompaño a personas que se han perdido de
              tanto dar, ceder o callar. A quienes desean aprender a decir
              “hasta aquí”, pero no saben cómo hacerlo sin culpa, sin miedo o
              sin dañar sus relaciones.
            </Typography>
          </TextContainer>
          <MediaContainer>
            <ResponsiveImage
              publicId="v1746407263/1_oy23bt"
              alt="Primera imagen ilustrativa"
            />
          </MediaContainer>
        </ContentContainer>
      </Section>

      <Section>
        <ContentContainer>
          {/* Imagen a la izquierda (o arriba en móvil) */}
          <MediaContainer>
            <ResponsiveImage
              publicId="v1746407262/3_khk7e6"
              alt="Segunda imagen ilustrativa"
            />
          </MediaContainer>

          {/* Texto con dos bloques de título + párrafo */}
          <TextContainer>
            {/* Título principal */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                textAlign: "left",
                mb: 2,
              }}
            >
              De lo forense a lo emocional
            </Typography>

            {/* Párrafo descriptivo */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              Mi trayectoria comenzó en el mundo de la Criminología, con
              especialidad en Seguridad Privada y formación como Detective
              Privado. Aunque mi camino evolucionó hacia la psicología, esa base
              me dio herramientas valiosas para entender al ser humano desde
              múltiples perspectivas.
            </Typography>

            {/* Segundo título */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                textAlign: "left",
                mb: 2,
              }}
            >
              Una vida con propósito, dentro y fuera de consulta
            </Typography>

            {/* Segundo párrafo */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              Me considero una persona extrovertida y profundamente sensible.
              Esa mezcla de energía y sensibilidad es lo que me permite conectar
              de forma auténtica, tanto conmigo misma como con quienes acompaño
              en terapia.
              <br />
              <br />
              Tengo una curiosidad infinita por aprender, crecer y nutrirme de
              experiencias que amplíen mi visión del mundo. Porque para mí, el
              desarrollo personal no es solo un concepto: es un estilo de vida.
            </Typography>
          </TextContainer>
        </ContentContainer>
      </Section>

      <Section2>
        <ContentContainer>
          {/* Texto a la izquierda (o arriba en móvil) */}
          <TextContainer>
            {/* Título en negrita y responsivo */}
            <Typography
              component="h3"
              sx={{
                fontFamily: "Playfair Display",
                fontWeight: 700,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.5rem" },
                textAlign: "Left",
                mb: 2,
              }}
            >
              Mi tiempo libre
            </Typography>

            {/* Lista de actividades */}
            <Box
              component="ul"
              sx={{
                pl: 3,
                mb: 3,
                "& li": {
                  fontFamily: "Playfair Display",
                  fontSize: { xs: "0.95rem", sm: "1rem" },
                  lineHeight: 1.6,
                  mb: 1,
                },
              }}
            >
              <li>Disfrutando del sol y los paisajes naturales</li>
              <li>Bailando ritmos latinoamericanos</li>
              <li>Descubriendo nuevos rincones del mundo</li>
              <li>
                Viviendo experiencias gastronómicas que despierten los sentidos
              </li>
            </Box>

            {/* Párrafo final */}
            <Typography
              component="p"
              sx={{
                fontFamily: "Playfair Display",
                fontSize: { xs: "0.95rem", sm: "1rem" },
                lineHeight: 1.6,
              }}
            >
              El verde esmeralda es más que un color para mí: es el símbolo de
              mi historia y mis raíces. Representa la belleza natural de Noruega
              y la fuerza vital de las esmeraldas colombianas. En mi trabajo
              como psicóloga, este verde se convierte en vida, conexión y
              crecimiento. Son los valores que me guían al acompañarte en tu
              proceso terapéutico, para que también tú puedas florecer desde tu
              esencia.
            </Typography>
          </TextContainer>

          {/* Imagen a la derecha (o abajo en móvil) */}
          <MediaContainer>
            <ResponsiveImage
              publicId="v1746407261/2_jvx6dl"
              alt="Tercera imagen ilustrativa"
            />
          </MediaContainer>
        </ContentContainer>
      </Section2>
    </FullAcercaContainer>
  );
};

ResponsiveImage.propTypes = {
  publicId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default FullAcerca;

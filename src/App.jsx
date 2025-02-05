import React from "react";
import styled from "styled-components";
import Inicio from "./Components/Inicio";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Temas from "./Components/Temas";
import Terapias from "./Components/Terapias";
import InfoBoxes from "./Components/InfoBoxes";
import AcercaDe from "./Components/Acercade";
import ContactForm from "./Components/ContactForm";
import Precios from "./Components/Precios";
import Footer from "./Components/Footer";
import ImagenDaniela from "./Components/ImagenDaniela";

// Crear un contenedor estilizado
const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);  background-color: #8FA99E; /* Fondo de color ligeramente diferente */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones */
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  }
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  z-index: ${props => props.zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8FA99E; /* Fondo de color ligeramente diferente */
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);  border: 2px solid #d2b48c;

`;

const Container = styled.div`
  height: 300vh; /* Ajusta esta altura según sea necesario */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Section>
        <Header />
      </Section>
      <Section>
        <Inicio />
      </Section>
      <Section>
        <ImagenDaniela />
      </Section>
      <Container>
        <StickySection zIndex={1}>
          <Temas />
        </StickySection>
        <StickySection zIndex={2}>
          <Terapias />
        </StickySection>
        <StickySection zIndex={3}>
          <Precios />
        </StickySection>
      </Container>
      <Section>
        <InfoBoxes />
      </Section>
      <Section>
        <AcercaDe />
      </Section>
      <Section>
        <ContactForm />
      </Section>
      <Section>
        <Footer />
      </Section>
    </>
  );
}

export default App;

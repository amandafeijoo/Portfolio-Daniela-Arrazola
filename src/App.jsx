import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Inicio from "./Components/Inicio";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Temas from "./Components/Temas";
import Terapias from "./Components/Terapias";
import InfoBoxes from "./Components/InfoBoxes";
import AcercaDe from "./Components/AcercaDe";
import ContactForm from "./Components/ContactForm";
import Precios from "./Components/Precios";
import Footer from "./Components/Footer";
import ImagenDaniela from "./Components/ImagenDaniela";
import FullAcerca from "./Components/FullAcerca"; // Importa el componente FullAcerca
import Services from "./Components/Services";
import Contact from "./Components/Contact";

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #8fa99e;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transiciones */
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh; /* Ocupa toda la altura de la ventana */
  z-index: ${(props) => props.zIndex};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8fa99e;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Container = styled.div`
  height: 300vh;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Section>
        <Header />
      </Section>
      <Routes>
        <Route
          path="/"
          element={
            <>
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
            </>
          }
        />
        <Route
          path="/acerca-de"
          element={
            <Section>
              <AcercaDe />
            </Section>
          }
        />
        <Route
          path="/full-acerca"
          element={
            <Section>
              <FullAcerca />
            </Section>
          }
        />
        <Route
          path="/contacto"
          element={
            <Section>
              <ContactForm />
            </Section>
          }
        />
        <Route
          path="/servicios"
          element={
            <Section>
              <Services />
            </Section>
          }
        />
        <Route
          path="/contact"
          element={
            <Section>
              <Contact />
            </Section>
          }
        />
      </Routes>
      <Section>
        <Footer />
      </Section>
    </Router>
  );
}

export default App;

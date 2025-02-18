import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./Components/Home";
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
import FullAcerca from "./Components/FullAcerca"; 
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Reserva from "./Components/Reserva";
import Calendar from "./Components/Calendar";
import Service from "./Components/Service1";
import Service2 from "./Components/Service2";
import Service3 from "./Components/Service3";
import Service4 from "./Components/Service4";
import Service5 from "./Components/Service5";
import Service6 from "./Components/Service6";
import Service7 from "./Components/Service7";
import Service8 from "./Components/Service8";
import Service9 from "./Components/Service9";
import Service10 from "./Components/Service10";
import Service11 from "./Components/Service11";
import Service12 from "./Components/Service12";
import Service13 from "./Components/Service13";
import ImageTextEffect from "./Components/ImageTextEffect";
import InfiniteScrollGallery from "./Components/InfiniteScrollGallery";
import PricingCards from "./Components/PricingCards";
import InfoBoxesReserva from "./Components/InfoBoxesReserva";

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
                <Home />
              </Section>
              <Section>
                <ImagenDaniela />
              </Section>
              <Container>
                <StickySection zIndex={0}>
                  <ImageTextEffect />
                </StickySection>
                <StickySection zIndex={1}>
                  <InfiniteScrollGallery />
                </StickySection>
                <StickySection zIndex={2}>
                  <PricingCards />
                </StickySection>
              </Container>
              <Section>
                <InfoBoxesReserva />
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
        <Route
          path="/reserva"
          element={
            <Section>
              <Reserva />
            </Section>
          }
        />
        <Route
          path="/calendar"
          element={
            <Section>
              <Calendar />
            </Section>
          }
        />
        <Route
          path="/service1"
          element={
            <Section>
              <Service />
            </Section>
          }
        />
        <Route
          path="/service2"
          element={
            <Section>
              <Service2 />
            </Section>
          }
        />
        <Route
          path="/service3"
          element={
            <Section>
              <Service3 />
            </Section>
          }
        />
        <Route
          path="/service4"
          element={
            <Section>
              <Service4 />
            </Section>
          }
        />
        <Route
          path="/service5"
          element={
            <Section>
              <Service5 />
            </Section>
          }
        />
        <Route
          path="/service6"
          element={
            <Section>
              <Service6 />
            </Section>
          }
        />
        <Route
          path="/service7"
          element={
            <Section>
              <Service7 />
            </Section>
          }
        />
        <Route
          path="/service8"
          element={
            <Section>
              <Service8 />
            </Section>
          }
        />
        <Route
          path="/service9"
          element={
            <Section>
              <Service9 />
            </Section>
          }
        />
        <Route
          path="/service10"
          element={
            <Section>
              <Service10 />
            </Section>
          }
        />
        <Route
          path="/service11"
          element={
            <Section>
              <Service11 />
            </Section>
          }
        />
        <Route
          path="/service12"
          element={
            <Section>
              <Service12 />
            </Section>
          }
        />
        <Route
          path="/service13"
          element={
            <Section>
              <Service13 />
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

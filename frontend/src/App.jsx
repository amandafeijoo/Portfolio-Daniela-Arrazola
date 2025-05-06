import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import HeroSocialLinks from './Components/HeroSocialLinks';
import CookieConsent from "react-cookie-consent";
import "@fontsource/playfair-display";



// Importación de componentes con Lazy Loading
const Home = lazy(() => import("./Components/Home"));
const AcercaDe = lazy(() => import("./Components/AcercaDe"));
const ImagenDaniela = lazy(() => import("./Components/ImagenDaniela"));
const FullAcerca = lazy(() => import("./Components/FullAcerca"));
const Services = lazy(() => import("./Components/Services"));
const Contact = lazy(() => import("./Components/Contact"));
const Reserva = lazy(() => import("./Components/Reserva"));
const Calendar = lazy(() => import("./Components/Calendar"));
const Service1 = lazy(() => import("./Components/Service1"));
const Service2 = lazy(() => import("./Components/Service2"));
const Service3 = lazy(() => import("./Components/Service3"));
const Service4 = lazy(() => import("./Components/Service4"));
const Service5 = lazy(() => import("./Components/Service5"));
const Service6 = lazy(() => import("./Components/Service6"));
const Service7 = lazy(() => import("./Components/Service7"));
const Service8 = lazy(() => import("./Components/Service8"));
const Service9 = lazy(() => import("./Components/Service9"));
const Service10 = lazy(() => import("./Components/Service10"));
const Service11 = lazy(() => import("./Components/Service11"));
const Service12 = lazy(() => import("./Components/Service12"));
const Service13 = lazy(() => import("./Components/Service13"));
const ImageTextEffect = lazy(() => import("./Components/ImageTextEffect"));
const InfiniteScrollGallery = lazy(() => import("./Components/InfiniteScrollGallery"));
const PricingCards = lazy(() => import("./Components/PricingCards"));
const InfoBoxesReserva = lazy(() => import("./Components/InfoBoxesReserva"));
const FAQSection = lazy(() => import("./Components/FAQSection"));
const Testimonials = lazy(() => import("./Components/Testimonials"));
const PrivacyPolicy = lazy(() => import("./Components/PrivacyPolicy"));
const Login = lazy(() => import("./Components/Login"));
const AdminDashboard = lazy(() => import("./Components/AdminDashboard"));
const LegalNotice = lazy(() => import("./Components/LegalNotice"));
const CookiesPolicy = lazy(() => import("./Components/CookiesPolicy"));
const Footer = lazy(() => import("./Components/Footer"));
const TestimonialForm = lazy(() => import("./Components/TestimonialForm"));
const ReservaExitosa = lazy(() => import("./Components/ReservaExitosa"));
const ReservaCancelada = lazy(() => import("./Components/ReservaCancelada"));

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #8fa99e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StickySection = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  /* overflow:hidden; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #8fa99e;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
  z-index: 10;
`;

const Container = styled.div`
  min-height: 300vh;
  display: flex;
  flex-direction: column;
  width: 100%; 
  /* max-width: 100vw; */
  margin: 0 auto;
  padding: 0;
  /* overflow-x: hidden; */

`;

const MainWrapper = styled.main`
  padding-top: 155px; /* deja hueco para el Header */
  width: 100%;
  /* overflow-x: hidden; */
  

`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <HeroSocialLinks /> 
      <MainWrapper>
      <Suspense fallback={<div>Loading...</div>}>
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
                  <StickySection style={{ zIndex: 1 }}>
                    <ImageTextEffect />
                  </StickySection>
                  <StickySection style={{ zIndex: 2 }}>
                    <InfiniteScrollGallery />
                  </StickySection>
                  <StickySection style={{ zIndex: 3 }}>
                    <PricingCards />
                  </StickySection>
                </Container>
                <Section>
                  <InfoBoxesReserva />
                </Section>
                <Section>
                  <Testimonials />
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
                <Service1 />
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
          <Route
            path="/faq"
            element={
              <Section>
                <FAQSection />
              </Section>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <Section>
                <PrivacyPolicy />
              </Section>
            }
          />
          <Route
            path="/login"
            element={
              <Section>
                <Login />
              </Section>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <Section>
                <AdminDashboard />
              </Section>
            }
          />
          <Route
            path="/legal-notice"
            element={
              <Section>
                <LegalNotice />
              </Section>
            }
          />
          <Route
            path="/cookies-policy"
            element={
              <Section>
                <CookiesPolicy />
              </Section>
            }
          />
          <Route
            path="/testimonios"
            element={
              <Section>
                <TestimonialForm />
              </Section>
            }
          />
          <Route
            path="/reserva-exitosa"
            element={
              <Section>
                <ReservaExitosa />
              </Section>
            }
          />
          <Route
            path="/reserva-cancelada"
            element={
              <Section>
                <ReservaCancelada />
              </Section>
            }
          />
        </Routes>
      </Suspense>
      </MainWrapper>
      <Section>
        <Footer />
      </Section>

       {/* Banner de Cookies */}
       <CookieConsent
  location="bottom"
  cookieName="mi_consentimiento_cookies"
  style={{
    background: "rgb(138, 158, 142)", // fondo suave, verde salvia claro
    border: "2px solid rgb(60, 75, 67)",

    color: "#2e4036",       // texto oscuro pero no negro
    fontFamily: "'Playfair Display', serif",
    padding: "22px",
    fontSize: "15px",
    boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.08)",
  }}
  buttonStyle={{
    background: "transparent",
    color: "#2e4036",
    fontFamily: "'Playfair Display', serif",
    border: "2px solid #2e4036",
    borderRadius: "6px",
    padding: "10px 18px",
    marginLeft: "10px",
    cursor: "pointer",
  }}
  declineButtonStyle={{
    background: "transparent",
    color: "#6e3c2b", // tono tierra cálido
    fontFamily: "'Playfair Display', serif",
    border: "2px solid #6e3c2b",
    borderRadius: "6px",
    padding: "10px 18px",
    marginLeft: "10px",
    cursor: "pointer",
  }}
  buttonText="Aceptar todas"
  declineButtonText="Rechazar"
  enableDeclineButton
  expires={150}
>
  Usamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia. Puedes aceptarlas, rechazarlas o configurarlas.
  <a
    href="/cookies-policy"
    style={{
      color: "#2c2c2c",
      fontWeight: "bold",
      marginLeft: "8px",
      textDecoration: "underline dotted",
      transition: "color 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.color = "#6e3c2b")}
    onMouseOut={(e) => (e.target.style.color = "#2e4036")}
  >
    Leer más
  </a>
</CookieConsent>
    </Router>
    
  );
}

export default App;

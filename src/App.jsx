import React from "react";
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

function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Inicio />
      <ImagenDaniela />
      <Temas />
      <Terapias />
      <Precios />
      <InfoBoxes />
      <AcercaDe />
      <ContactForm />
      <Footer />

    </>
  );
}

export default App;

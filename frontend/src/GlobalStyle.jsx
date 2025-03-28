import { createGlobalStyle } from "styled-components";
import "@fontsource/playfair-display";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #9FB0A2;
    overflow-x: hidden;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Playfair Display', serif;
    margin-top: 130px;
  }

  html {
    width: 100vw;
  }

  * {
    box-sizing: border-box;
  }

  .futura-day {
    background-color: #a1ad7f !important;
    color: white !important;
    border-radius: 50%;
  }

  .pasada-day {
    background-color: #d0c9c0 !important;
    color: #333 !important;
    border-radius: 50%;
  }

  /* 📌 Estilo personalizado para el día actual en el calendario */
  .react-calendar__tile--now {
    border: 2px solid #4b3f2f !important;
    border-radius: 50%;
    background: transparent !important;
    color: #4b3f2f !important;
    font-weight: bold;
  }

  /* Estilos específicos para iPhone 15 y iPhone 15 Pro */
  @media (max-width: 430px) {
    body {
      font-size: 14px;
    }

    .footer-container {
      flex-direction: column;
      text-align: center;
    }

    .footer-container img {
      margin-bottom: 10px;
    }

    .footer-container .social-icons {
      justify-content: center;
    }
  }

  /* Estilos específicos para iPad y iPad Mini */
  @media (min-width: 768px) and (max-width: 1024px) {
    body {
      font-size: 16px;
    }

    .footer-container {
      flex-direction: row;
      justify-content: space-between;
    }

    .footer-container img {
      margin-bottom: 0;
    }

    .footer-container .social-icons {
      justify-content: flex-end;
    }
  }
`;

export default GlobalStyle;


// background-color: #557C70;
// background-color: #A1AD7F;
// background-color: #9FB0A2;
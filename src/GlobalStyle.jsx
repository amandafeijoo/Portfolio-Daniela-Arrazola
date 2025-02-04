import { createGlobalStyle } from "styled-components";
import "@fontsource/playfair-display";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #9FB0A2;
    margin: 0;
    font-family: 'Playfair Display', serif;
  }

  /* Estilos generales para todos los dispositivos */
  * {
    box-sizing: border-box;
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

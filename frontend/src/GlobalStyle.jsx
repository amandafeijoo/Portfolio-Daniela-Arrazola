// src/GlobalStyle.js
import { createGlobalStyle } from "styled-components";
import "@fontsource/playfair-display";

export default createGlobalStyle`
  /* 1) Reset de box-sizing, márgenes y paddings */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* 2) Asegura que html, body y #root ocupen 100% */
  html, body, #root {
    width: 100%;
    height:100%;
    margin: 0;
    padding: 0;
    overflow-y:auto;
    overflow-x: hidden;

  }

  /* 3) Estilos base del body */
  body {
    background-color: #9FB0A2;
    font-family: 'Playfair Display', serif;
  }

  /* 4) Anulación de los márgenes negativos del Grid de MUI */
  .MuiGrid-root.MuiGrid-container {
    /* Elimina el negative margin que genera overflow */
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
  }
  .MuiGrid-root.MuiGrid-item {
    /* Restaura el padding interno correcto (theme.spacing(2) / 2 = 8px) */
    padding-left: 8px !important;
    padding-right: 8px !important;
  }

  /* 5) Tus estilos de calendario y media-queries */
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
  .react-calendar__tile--now {
    border: 2px solid #4b3f2f !important;
    border-radius: 50%;
    background: transparent !important;
    color: #4b3f2f !important;
    font-weight: bold;
  }

  @media (max-width: 430px) {
    body { font-size: 14px; }
    .footer-container { flex-direction: column; text-align: center; }
    .footer-container img { margin-bottom: 10px; }
    .footer-container .social-icons { justify-content: center; }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    body { font-size: 16px; }
    .footer-container { flex-direction: row; justify-content: space-between; }
    .footer-container img { margin-bottom: 0; }
    .footer-container .social-icons { justify-content: flex-end; }
  }
`;



// background-color: #557C70;
// background-color: #A1AD7F;
// background-color: #9FB0A2;
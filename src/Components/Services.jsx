import React, { useEffect } from "react";
import { List, ListItem, ListItemText, Box, Typography, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";
import Service7 from "./Service7";
import Service8 from "./Service8";
import Service9 from "./Service9";
import Service10 from "./Service10";
import Service11 from "./Service11";
import Service12 from "./Service12";
import Service13 from "./Service13";
import "@fontsource/playfair-display";

const theme = createTheme({
  typography: {
    fontFamily: "Playfair Display, serif",
  },
});

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box display="flex">
      <Box 
        width="20%" 
        p={2} 
        sx={{ 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          overflowY: 'auto', 
          backgroundColor: '#d2b48c', // Fondo para el índice
          border: '1px solid #d2b48c', // Borde
          borderRadius: '0 25px 25px 0', // Bordes redondeados
          boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', 
          transform: 'translateX(-100%)', // Esconde el índice
            transition: 'transform 0.3s ease-in-out', // Transición para mostrar/esconder
            '&:hover': {
              transform: 'translateX(0)', // Muestra el índice al hacer hover
            },
        }}
      >
          <List component="nav">
            <ListItem button onClick={() => handleScroll("service1")}>
              <ListItemText primary="Ansiedad y Depresión" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service2")}>
              <ListItemText primary="Regulación emocional" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service3")}>
              <ListItemText primary="Autoestima y Conocimiento Personal" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service4")}>
              <ListItemText primary="Duelo y Cambios" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service5")}>
              <ListItemText primary="Conflictos interpersonales" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service6")}>
              <ListItemText primary="Habilidades sociales" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service7")}>
              <ListItemText primary="Crianza" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service8")}>
              <ListItemText primary="Productividad y gestión del tiempo" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service9")}>
              <ListItemText primary="Crecimiento personal y hábitos saludables" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service10")}>
              <ListItemText primary="Fobias" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service11")}>
              <ListItemText primary="Trastorno Obsesivo Compulsivo" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service12")}>
              <ListItemText primary="Trastornos del Neurodesarrollo" />
            </ListItem>
            <ListItem button onClick={() => handleScroll("service13")}>
              <ListItemText primary="Trastornos de la conducta alimentaria" />
            </ListItem>
          </List>
        </Box>
        <Box flexGrow={2} p={2}>
        <Typography 
  variant="h1" 
  sx={{ 
    fontFamily: "Playfair Display", 
    marginBottom: 2, 
    fontSize: '5em', // Ajusta el tamaño de la fuente a 3em
    color: '#305445', // Color del texto
    textAlign: 'center', // Centra el texto
  }}
>
  Servicios
</Typography>
          <div id="service1"><Service1 /></div>
          <div id="service2"><Service2 /></div>
          <div id="service3"><Service3 /></div>
          <div id="service4"><Service4 /></div>
          <div id="service5"><Service5 /></div>
          <div id="service6"><Service6 /></div>
          <div id="service7"><Service7 /></div>
          <div id="service8"><Service8 /></div>
          <div id="service9"><Service9 /></div>
          <div id="service10"><Service10 /></div>
          <div id="service11"><Service11 /></div>
          <div id="service12"><Service12 /></div>
          <div id="service13"><Service13 /></div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Services;
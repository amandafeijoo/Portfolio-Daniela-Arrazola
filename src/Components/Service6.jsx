import React, { useEffect } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";

const Image = () => (
  <Box sx={{ width: '72%', marginBottom: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', borderRadius: 2, overflow: 'hidden', border: '2px solid #d2b48c' }}>
    <img src="/images/6.svg" alt="Service Image" width="100%" style={{ borderRadius: 'inherit' }} />
  </Box>
);

const Service6 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Box sx={{ margin: 2, padding: 2, border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', backgroundColor: '#f5eedc', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', zIndex: 1, '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image />
          <Box sx={{ width: '100%', marginBottom: 2 }}>
            <Accordion sx={{ margin: 2, backgroundColor: '#f5eedc', border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'rgba(48, 84, 69, 0.8)', color: '#f5eedc' }}>
                <Typography variant="h5" component="h2" sx={{ fontFamily: 'Playfair Display' }}>
                  Las habilidades sociales son como un puente que nos conecta con los demás.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Para algunas personas, cruzarlo es fácil y natural, mientras que para otras puede sentirse como un camino inestable, lleno de inseguridades y miedo al juicio. No se trata solo de timidez, sino de dificultades reales que pueden generar aislamiento, ansiedad y sufrimiento. Existen trastornos relacionados con problemas en las habilidades sociales, entre ellos encontramos el Trastorno de Ansiedad Social. Estas condiciones pueden hacer que el contacto con los demás sea una fuente constante de angustia, afectando la vida personal, académica y laboral.
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                  En terapia, trabajamos juntos para:
                </Typography>
                <List>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Identificar pensamientos que generan ansiedad y que te impiden expresarte con seguridad." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Desarrollar estrategias para interactuar sin miedo al rechazo o la crítica." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Romper patrones de evitación que refuerzan el aislamiento." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Practicar habilidades sociales en un espacio seguro y libre de juicio." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                </List>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Las relaciones humanas no deberían sentirse como un terreno minado. Si te cuesta conectar con los demás o sientes que el miedo te limita, recuerda: las habilidades sociales no son un "don" con el que se nace, sino una capacidad que se puede aprender y fortalecer.
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                  No tienes que hacerlo solo. Estoy aquí para ayudarte a cruzar ese puente.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ width: '70%', marginTop: 2 }}>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Service6;
import React, { useEffect } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";

const Image = () => (
    <Box sx={{ width: '72%', marginBottom: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', borderRadius: 2, overflow: 'hidden', border: '2px solid #d2b48c' }}>
      <img src="/images/12.svg" alt="Service Image" width="100%" style={{ borderRadius: 'inherit' }} onError={(e) => { e.target.onerror = null; e.target.src = '/images/placeholder.png'; }} />
    </Box>
  );

const Service12 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
    <Box sx={{ margin: 2, padding: 2, border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', backgroundColor: '#f5eedc', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', zIndex: 1, '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Image />
          <Accordion sx={{ margin: 2, backgroundColor: '#f5eedc', border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'rgba(48, 84, 69, 0.8)', color: '#f5eedc' }}>
              <Typography variant="h5" component="h2" sx={{ fontFamily: 'Playfair Display' }}>
                Los trastornos del neurodesarrollo son condiciones que afectan el funcionamiento del cerebro y el desarrollo de habilidades cognitivas, emocionales y sociales.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                Son formas diferentes de procesar el mundo y las emociones, y, con el apoyo profesional adecuado, se puede llevar una vida más satisfactoria.
              </Typography>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                Trastorno del Espectro Autista (TEA)
              </Typography>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
              Las personas con TEA pueden
experimentar desafíos en áreas como la
comunicación, la interacción social y el
comportamiento. Tal vez te resulte difícil:
                </Typography>
              <List>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Leer las señales sociales, hacer amigos o entender las emociones de los demás." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Las rutinas y los intereses específicos pueden ser muy importantes para ti." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="A veces las transiciones o los cambios pueden generar ansiedad." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
              </List>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                Trastorno por Déficit de Atención e Hiperactividad (TDAH)
              </Typography>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
              El TDAH se caracteriza por dificultades
para prestar atención, mantenerse
concentrado y controlar impulsos. Las
personas con TDAH suelen tener
dificultades para:
                </Typography>
              <List>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Organizar tareas, seguir instrucciones o terminar proyectos." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="A menudo, el impulso de actuar antes de pensar puede generar dificultades en las relaciones y en el entorno académico o laboral." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
              </List>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                Dislexia
              </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                La dislexia es una dificultad específica de
aprendizaje que afecta la capacidad para
leer y escribir con fluidez. Las personas con
dislexia pueden tener problemas para:
                </Typography>
              <List>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Reconocer palabras escritas." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Hacer coincidir sonidos con letras." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
                <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                  <ListItemText primary="Comprender textos con rapidez." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                </ListItem>
              </List>
              <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
              Trastornos de la Comunicación 
              </Typography>
                  <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Los trastornos de la comunicación afectan la
forma en que una persona expresa sus
pensamientos y sentimientos.
                </Typography> 
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                Pueden
involucrar problemas en la pronunciación, el
uso adecuado del lenguaje o incluso
dificultades para comprender lo que otros
están diciendo.Esto puede generar:
                </Typography>
                <List>
                    <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                        <ListItemText primary="Frustración" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                        <ListItemText primary="Aislamiento" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                    </ListItem>
                    <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                        <ListItemText primary=" Sensación de desconexión" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                    </ListItem>
                </List>         
              </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Container>
  );
};

export default Service12;
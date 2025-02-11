import React, { useEffect } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";


const Image = () => (
    <Box sx={{ width: '72%', marginBottom: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', borderRadius: 2, overflow: 'hidden', border: '2px solid #d2b48c' }}>
      <img src="/images/3.svg" alt="Service Image" width="100%" style={{ borderRadius: 'inherit' }} />
    </Box>
  );

const Service3 = () => {
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
                  La relación más importante de tu vida es la que tienes contigo mismo.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Tu autoestima define cómo te valoras, cómo te hablas y cómo te enfrentas al mundo. Si te miras al espejo y sientes que no eres suficiente… es momento de cambiar esa narrativa. En terapia, trabajamos en cada uno de los pilares de la autoestima:
                </Typography>
                <List>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Autoconocimiento" secondary="Aprenderás a identificar tus fortalezas y áreas de mejora, entendiendo quién eres realmente." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Autoconcepto" secondary="Descubrirás cómo te percibes y qué creencias tienes sobre ti mismo, para transformarlas en pensamientos más positivos y realistas." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Autoevaluación" secondary="Desarrollarás un criterio propio para analizar tus logros y errores sin castigarte, sino aprendiendo de ellos." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Autoaceptación" secondary="Entenderás que aceptarte no significa conformarte, sino reconocer quién eres sin juicios ni rechazos." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Autorespeto" secondary="Aprenderás a darte el valor que mereces, a poner límites y a priorizarte sin sentir culpa." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                </List>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                Una autoestima saludable impacta en todas las áreas de tu vida: desde la toma de decisiones hasta la calidad de tus relaciones. En terapia aprenderás a reconstruirla desde la raíz.
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

export default Service3;
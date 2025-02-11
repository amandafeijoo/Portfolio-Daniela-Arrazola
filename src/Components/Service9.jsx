import React, { useEffect } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText,keyframes } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";


const moveAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Image = () => (
    <Box
      sx={{
        width: "72%",
        marginBottom: 2,
        boxShadow:
          "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
        overflow: "hidden",
        border: "2px solid #d2b48c",
        animation: `${moveAnimation} 3s infinite`,
      }}
    >
      <img
        src="/images/9.svg"
        alt="Service Image"
        width="100%"
        style={{ borderRadius: "inherit" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/placeholder.png";
        }}
      />
    </Box>
  );

const Service9 = () => {
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
                  Imagina que tu bienestar es un jardín.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Cada pensamiento, hábito y elección es una semilla que siembras. Algunas darán frutos llenos de energía y satisfacción, mientras que otras pueden absorber tus fuerzas y limitar tu crecimiento. La clave está en aprender a cultivar lo que realmente nutre tu vida.
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                  El crecimiento personal no es un destino, sino un proceso continuo de autoconocimiento y mejora. Se trata de aprender a identificar lo que te impulsa y lo que te frena, desarrollar habilidades para gestionar emociones y construir hábitos que te ayuden a sentirte mejor, tanto física como mentalmente.
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                  En sesión, trabajamos juntos para:
                </Typography>
                <List>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Identificar creencias limitantes y transformarlas en pensamientos que te potencien." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Reemplazar hábitos dañinos por prácticas saludables y sostenibles." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Equilibrar tu bienestar emocional, físico y mental sin caer en la autoexigencia extrema." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Definir objetivos alineados con lo que realmente quieres y necesitas, no con lo que los demás esperan de ti." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                </List>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Los hábitos saludables no se tratan solo de alimentación y ejercicio, sino también de descanso, relaciones sanas y amor propio. Si sientes que te cuesta avanzar o que repites patrones que no te hacen bien, es momento de cambiar el enfoque. El crecimiento personal no es un lujo, es la base para una vida plena y consciente.
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6, marginTop: 2 }}>
                  Tú tienes el poder de transformar tu historia, un pequeño paso a la vez.
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

export default Service9;
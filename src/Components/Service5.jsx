import React, { useEffect,useState } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText,keyframes } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";
import Reserva from './Reserva';

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
      src="/images/5.svg"
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

const Service5 = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Container>
      <Box sx={{ margin: 2, padding: 2, border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', backgroundColor: '#f5eedc', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', zIndex: 1, '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image />
          <Box sx={{ width: '100%', marginBottom: 2 }}>
          <Accordion expanded={expanded} onChange={handleChange} sx={{ margin: 2, backgroundColor: "#f5eedc", border: "2px solid #d2b48c", borderRadius: 2, boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'rgba(48, 84, 69, 0.8)', color: '#f5eedc' }}>
                <Typography variant="h5" component="h2" sx={{ fontFamily: 'Playfair Display' }}>
                  Las relaciones son espejos. A través de ellas, nos descubrimos a nosotros mismos, nos enfrentamos a nuestras heridas y aprendemos a crecer.
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Pero cuando surgen conflictos, esos espejos pueden volverse distorsionados, mostrando solo el dolor, la frustración y la distancia. El problema no es discutir, sino cómo lo hacemos. Si los conflictos con tu pareja, tu familia o tus amigos se han vuelto una constante, tal vez es momento de detenerte y mirar más allá de la problemática. En terapia, exploramos juntos:
                </Typography>
                <List>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Identificar el origen del conflicto" secondary="Patrones, heridas del pasado, expectativas no expresadas." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Aprender a comunicarte con asertividad" secondary="Expresar lo que sientes sin atacar, callar o evitar el problema." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Gestionar las emociones intensas" secondary="Para no reaccionar impulsivamente cuando te sientes frustrado, rechazado o dolido." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                  <ListItem sx={{ backgroundColor: '#fff', margin: 1, borderRadius: 1, boxShadow: 1 }}>
                    <ListItemText primary="Fortalecer la relación y recuperar la conexión" secondary="Desde el respeto, la empatía y la conexión real." sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display' }} />
                  </ListItem>
                </List>
                <Typography variant="body1" sx={{ color: '#4b3f2f', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
                  Resolver conflictos no significa "ganar" una discusión, sino construir relaciones más sanas y satisfactorias.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box sx={{ width: '70%', marginTop: 2 }}>
          </Box>
        </Box>
      </Box>
    </Container>
    <Reserva />
    </>
  );
};

export default Service5;
import React, { useEffect } from 'react';
import { Container, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "@fontsource/playfair-display";

const Image = () => (
    <Box sx={{ width: '72%', marginBottom: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', borderRadius: 2, overflow: 'hidden', border: '2px solid #d2b48c' }}>
      <img src="/images/2.svg" alt="Service Image" width="100%" style={{ borderRadius: 'inherit' }} />
    </Box>
  );

const Service = ({ title, description }) => (
  <Accordion sx={{ margin: 2, backgroundColor: '#f5eedc', border: '2px solid #d2b48c', borderRadius: 2, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)' }}>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: 'rgba(48, 84, 69, 0.8)', color: '#f5eedc' }}>
      <Typography variant="h5" component="h2" sx={{ fontFamily: 'Playfair Display' }}>
        {title}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography variant="body1" sx={{ color: '#013220', fontFamily: 'Playfair Display', textAlign: 'justify', lineHeight: 1.6 }}>
        {description}
      </Typography>
    </AccordionDetails>
  </Accordion>
);

const Service2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Box sx={{ margin: 2, padding: 2, border: '2px solid #ccc', borderRadius: 3, boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.6), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.5)', backgroundColor: '#7f918e', transition: 'transform 0.3s ease, box-shadow 0.3s ease', position: 'relative', zIndex: 1, '&:hover': { transform: 'translateY(-5px)', boxShadow: 8 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image />
          <Box sx={{ width: '70%', marginBottom: 2 }}>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Service
              title="¿Alguna vez sentiste que emociones como la ira, el miedo, la tristeza o la vergüenza te dominan?"
              description="Las emociones son brújulas internas que nos guían y cumplen una función vital: nos preparan para la acción, nos informan sobre nuestro estado y nos ayudan a relacionarnos con el mundo. Sin embargo, cuando no sabemos gestionarlas, pueden convertirse en una carga."
            />
            <Service
              title="El estrés, la decepción, el rechazo, la sensación de estar herido o experimentar un duelo pueden generar bloqueos emocionales"
              description="que afectan nuestra autoestima, nuestro equilibrio físico y emocional. Y aunque hoy en día parezca 'normal' vivir con estrés constante, no significa que sea saludable ni que sea la modalidad correcta de afrontar los desafíos de la vida. Nuestro cuerpo no está diseñado para estar en alerta todo el tiempo. Es necesario reeducarlo, enseñarle a salir del estado de supervivencia y permitir que nuestro sistema nervioso se regule. En terapia, aprenderás a: Identificar cada emoción, comprender su mensaje y regular su impacto en tu vida. No se trata de reprimir lo que sientes, sino de escucharlo, entenderlo y comprender su utilidad para transformarla en una gran herramienta de crecimiento."
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Service2;
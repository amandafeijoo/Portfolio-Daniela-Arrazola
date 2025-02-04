import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import "@fontsource/playfair-display";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  margin-top: 100px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  height: 100%;
  border: 2px solid #d2b48c;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
    console.log('Form data:', formData);
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          margin: '0 auto',
          padding: 2,
          backgroundColor: 'rgba(245, 238, 220, 0.9)',
          boxShadow: '0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)', // Aquí se establece el boxShadow personalizado
          border: '2px solid #d2b48c', // Aquí se establece el borde
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center', marginBottom: 2, fontFamily: 'Playfair Display', color: '#793535' }}>
          CONTACTO
        </Typography>
        <TextField
          label="nombre completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& input": {
                fontFamily: 'Playfair Display',
                color: '#305445',
              },
            },
            "& .MuiInputLabel-root": {
              fontFamily: 'Playfair Display',
              color: '#305445',
            },
          }}
        />
        <TextField
          label="correo electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& input": {
                fontFamily: 'Playfair Display',
                color: '#305445',
              },
            },
            "& .MuiInputLabel-root": {
              fontFamily: 'Playfair Display',
              color: '#305445',
            },
          }}
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& input": {
                fontFamily: 'Playfair Display',
                color: '#305445',
              },
            },
            "& .MuiInputLabel-root": {
              fontFamily: 'Playfair Display',
              color: '#305445',
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            fontFamily: 'Playfair Display',
            fontSize: '1.1em',
            backgroundColor: 'rgba(48,84,69,0.5)',
            border: '2px solid #4A6F5E',
            borderRadius: '25px',
            color: '#F5EEDC',
            display: 'flex',
            textDecoration: 'none',
            boxSizing: 'border-box',
            transition: 'background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(245,238,220,0.5)',
              color: '#305445',
            },
            '& svg': {
              color: 'white',
              marginRight: '8px',
            },
          }}
        >
          enviar
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
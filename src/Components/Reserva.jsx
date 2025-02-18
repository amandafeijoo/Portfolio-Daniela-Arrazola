import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import Calendar from "./Calendar";
import "@fontsource/playfair-display";
import ReservationVideo from "./ReservationVideo";
import InfoBoxesReserva from "./InfoBoxesReserva";
import AddToCalendar from "react-add-to-calendar";
import styled from "styled-components";

const Section = styled.div`
  margin: 20px 0;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #8fa99e;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-5px); /* Efecto de elevación al pasar el ratón */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Reserva = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedConsultationType, setSelectedConsultationType] = useState("");
  const [comments, setComments] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí  manejar el envío del formulario
    console.log({
      firstName,
      email,
      selectedDate,
      selectedTime,
      selectedOption,
      selectedConsultationType,
      comments,
      privacyAccepted,
    });
  };

  const options = [
    "Ansiedad y Depresión",
    "Regulación emocional",
    "Autoestima y Conocimiento Personal",
    "Duelo y Cambios",
    "Conflictos interpersonales",
    "Habilidades sociales",
    "Crianza",
    "Productividad y gestión del tiempo",
    "Crecimiento personal y hábitos saludables",
    "Fobias",
    "Trastorno Obsesivo Compulsivo",
    "Trastornos del Neurodesarrollo",
    "Trastornos de la conducta alimentaria",
  ];

  const consultationTypes = [
    "Consulta inicial",
    "Seguimiento",
    "Terapia Individual - 80€ ",
    "Terapia de Pareja - 105€",
    'Pack 4 Sesiones - 300€"',
  ];

  const event = selectedDate
    ? {
        title: "Reserva de sesión",
        description: "Consulta con la Psicóloga Daniela Arrázola Benítez",
        location: "Online",
        startTime: selectedDate.toISOString(),
        endTime: new Date(
          selectedDate.getTime() + 60 * 60 * 1000
        ).toISOString(),
      }
    : null;

  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid item xs={12} md={8} sx={{ marginTop: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "rgba(48, 84, 69, 0.6)",
              fontFamily: "Playfair Display",
              zIndex: 10,
              position: "relative",
              width: "100%",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "4.5rem",
              marginLeft: "-100px",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            Reserva tu Terapia
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: 3,
              backgroundColor: "#f5eedc",
              border: "2px solid #d2b48c",
              borderRadius: "25px",
              boxShadow:
                "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              width: "80%",
              fontFamily: "Playfair Display",
              marginBottom: 10, // Agregado marginBottom
            }}
          >
            <TextField
              label="Nombre Completo"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
              InputProps={{ style: { fontFamily: "Playfair Display" } }}
            />
            <TextField
              label="Correo Electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
              InputProps={{ style: { fontFamily: "Playfair Display" } }}
            />
            <Calendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
            <TextField
              select
              label="Motivo de la consulta"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
              InputProps={{ style: { fontFamily: "Playfair Display" } }}
            >
              {options.map((option) => (
                <MenuItem
                  key={option}
                  value={option}
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Tipo de terapia"
              value={selectedConsultationType}
              onChange={(e) => setSelectedConsultationType(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
              InputProps={{ style: { fontFamily: "Playfair Display" } }}
            >
              {consultationTypes.map((type) => (
                <MenuItem
                  key={type}
                  value={type}
                  sx={{ fontFamily: "Playfair Display" }}
                >
                  {type}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Comentarios"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
              InputProps={{ style: { fontFamily: "Playfair Display" } }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  name="privacyAccepted"
                  color="primary"
                />
              }
              label={
                <Typography
                  sx={{ fontFamily: "Playfair Display", fontStyle: "italic" }}
                >
                  He leído y acepto las políticas de privacidad
                </Typography>
              }
            />
            <Typography
              sx={{
                fontFamily: "Playfair Display",
                fontSize: "0.7em",
                marginTop: "8px",
                marginBottom: "10px",
              }}
            >
              Al enviar el formulario se solicitan datos como tu email y nombre
              que se almacenan en una cookie para que no tengas que volver a
              completarlos en próximos envíos. Para enviar el formulario debes
              aceptar nuestra política de privacidad. Responsable de los datos:
              Daniela Arrázola Benítez | Finalidad: Responder a solicitudes del
              formulario | Legitimación: Tu consentimiento expreso |
              Destinatario: Daniela Arrázola Benítez (datos almacenados sólo en
              cliente email) | Derechos: Tienes derecho al acceso,
              rectificación, supresión, limitación, portabilidad y olvido de tus
              datos.
            </Typography>
            {event && (
              <AddToCalendar
                event={event}
                buttonLabel="Agregar a mi calendario"
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{
                fontFamily: "Playfair Display",
                width: "100%",
                fontSize: "1.1em",
                backgroundColor: "rgba(48,84,69,0.5)",
                border: "2px solid #4A6F5E",
                borderRadius: "20px",
                color: "#F5EEDC",
                display: "flex",
                textDecoration: "none",
                boxSizing: "border-box",
                transition:
                  "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(245,238,220,0.5)",
                  color: "#305445",
                },
                "& svg": {
                  color: "white",
                  marginRight: "8px",
                },
              }}
            >
              Reservar
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ marginTop: 4 }}>
          <ReservationVideo />
        </Grid>
      </Grid>
      <Section>
        <InfoBoxesReserva />
      </Section>
    </>
  );
};

export default Reserva;

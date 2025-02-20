import { useState, useEffect } from "react";
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
import Swal from "sweetalert2";

// 📌 Contenedor de fondo con más tamaño y bordes dorados
const BackgroundContainer = styled.div`
  background-color: rgb(132, 151, 139);
  padding: 60px;
  border-radius: 25px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  border: 4px solid #c0a080;
  max-width: 1350px;
  margin-bottom: 40px;
  margin: auto;
`;

// 📌 Estilos para el título mejorado
const Title = styled(Typography)`
  font-family: "Playfair Display";
  font-size: 3em !important;
  font-weight: bold !important;
  text-align: center;
  color: #f5eedc;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
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

  const [errors, setErrors] = useState({
    firstName: false,
    email: false,
    selectedDate: false,
    selectedOption: false,
    selectedConsultationType: false,
    privacyAccepted: false,
  });

  // 🔹 Expresión regular para validar un email
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {
      firstName: firstName.trim() === "",
      email: email.trim() === "" || !validateEmail(email), // 📌 Verifica el formato
      selectedDate: !selectedDate,
      selectedOption: selectedOption.trim() === "",
      selectedConsultationType: selectedConsultationType.trim() === "",
      privacyAccepted: !privacyAccepted,
    };

    setErrors(newErrors);

    // 📌 Si hay errores, mostrar alerta y no enviar
    if (Object.values(newErrors).some((error) => error)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, completa todos los campos obligatorios.",
        confirmButtonColor: "#c0a080",
      });
      return;
    }

    // 📌 Si todo está bien, enviar la reserva
    Swal.fire({
      icon: "success",
      title: "¡Reserva exitosa!",
      text: "Tu cita ha sido reservada correctamente.",
      confirmButtonColor: "#4A6F5E",
    });

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

    // 📌 Resetear formulario después de la reserva
    setFirstName("");
    setEmail("");
    setSelectedDate(null);
    setSelectedTime("");
    setSelectedOption("");
    setSelectedConsultationType("");
    setComments("");
    setPrivacyAccepted(false);
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
    "Terapia Individual - 80€ ",
    "Terapia de Pareja - 105€",
    "Pack 4 Sesiones - 300€",
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
      <BackgroundContainer>
        <Title variant="h4">Reserva tu Terapia</Title>

        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                p: 4,
                backgroundColor: "#f5eedc",
                border: "3px solid #d2b48c",
                borderRadius: "25px",
                boxShadow:
                  "0 6px 12px rgba(0, 0, 0, 0.3), 0 0 10px 3px rgba(34, 139, 34, 0.2)",
                width: "100%",
                marginTop: "20px",
                fontFamily: "Playfair Display",
              }}
            >
              <TextField
                label="Nombre Completo"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                margin="normal"
                error={errors.firstName} // 📌 Aplica error si el campo está vacío
                helperText={errors.firstName ? "Este campo es obligatorio" : ""}
                required
              />
              <TextField
                label="Correo Electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                error={errors.email} // 📌 Aplica error si el campo está vacío
                helperText={
                  errors.email ? "Introduce un correo electrónico válido" : ""
                }
                required
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
                error={errors.selectedOption} // 📌 Aplica error si el campo está vacío
                helperText={
                  errors.selectedOption ? "Este campo es obligatorio" : ""
                }
                required
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
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
                error={errors.selectedConsultationType} // 📌 Aplica error si el campo está vacío
                helperText={
                  errors.selectedConsultationType
                    ? "Este campo es obligatorio"
                    : ""
                }
                required
              >
                {consultationTypes.map((type) => (
                  <MenuItem key={type} value={type}>
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
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={privacyAccepted}
                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                    color="primary"
                    error={errors.privacyAccepted} // 📌 Aplica error si el campo está vacío
                    helperText={
                      errors.privacyAccepted ? "Este campo es obligatorio" : ""
                    }
                    required
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
              {event && (
                <AddToCalendar
                  event={event}
                  buttonLabel="Agregar a mi calendario"
                />
              )}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  fontSize: "1.2em",
                  backgroundColor: "#4A6F5E",
                  border: "2px solid #c0a080",
                  borderRadius: "20px",
                  color: "#F5EEDC",
                  marginTop: "10px",
                  transition:
                    "background-color 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#c0a080",
                    color: "#305445",
                  },
                }}
              >
                Reservar
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <ReservationVideo />
          </Grid>
        </Grid>
      </BackgroundContainer>

      <InfoBoxesReserva />
    </>
  );
};

export default Reserva;

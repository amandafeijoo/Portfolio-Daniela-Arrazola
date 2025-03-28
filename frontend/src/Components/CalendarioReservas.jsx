import { useState } from "react";
import { Typography, Box, Card, Stack } from "@mui/material";
import styled from "styled-components";
import { FaExclamationCircle, FaCalendarAlt, FaCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

// 👉 Función para formatear fecha en formato YYYY-MM-DD
const normalizarFecha = (fecha) => {
  const f = new Date(fecha);
  return `${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, "0")}-${String(f.getDate()).padStart(2, "0")}`;
};

// 📦 Estilos del contenedor


// 📦 Estilos del calendario
const StyledCalendar = styled(Calendar)`
  border: 6px solid rgb(211, 190, 151);
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  background: white;
  padding: 10px;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const StyledCard = styled(Card).attrs({
    elevation: 0,            // ❌ Quita sombra por defecto
    variant: "outlined",     // ✅ Evita el background white por defecto
  })`
    && {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.05)
      ) !important;
      backdrop-filter: blur(6px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
      color: #4b3f2f;
    }
  `;
  

// 📦 Leyenda de colores
const LegendItem = ({ color, label }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <FaCircle color={color} size={12} />
    <Typography variant="body2">{label}</Typography>
  </Stack>
);

LegendItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const CalendarioReservas = ({ reservasEfectuadas = [], diasConReserva = {} }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const reservasDelDia = reservasEfectuadas.filter(
    (reserva) =>
      normalizarFecha(reserva.fecha_reserva) === normalizarFecha(selectedDate)
  );

  return (
<> 
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{
          mb: { xs: 1, sm: 2 },
          color: "rgb(55, 30, 10)",
          fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.4rem" },
          textAlign: "center", // ✅ Centrar el texto
        }}
      >
        <FaCalendarAlt /> Calendario de Reservas
      </Typography>

      <StyledCalendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) => {
          const fechaKey = normalizarFecha(date);
          if (diasConReserva[fechaKey] === "cancelada") return "cancelada-day";
          if (diasConReserva[fechaKey] === "futura") return "futura-day";
          if (diasConReserva[fechaKey] === "pasada") return "pasada-day";
          return "";
        }}
      />

      {/* Leyenda de colores */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        sx={{ mt: 2 }}
      >
        <LegendItem color="#a1ad7f" label="Reserva futura" />
        <LegendItem color="#d0c9c0" label="Reserva pasada" />
        {/* <LegendItem color="#c27b7b" label="Reserva cancelada" /> */}
      </Stack>

      <Box sx={{ mt: 3, textAlign: "left" }}>
        <Typography fontWeight="bold" sx={{ color: "rgb(43, 24, 8)", mb: 1 }}>
          Reservas del {selectedDate.toLocaleDateString("es-ES")}
        </Typography>

        {reservasDelDia.length > 0 ? (
          reservasDelDia.map((reserva) => (
            <StyledCard key={reserva.id} sx={{ mb: 1, p: 2 }}>
              <Typography>
                <strong>{reserva.nombre_completo}</strong> —{" "}
                {reserva.hora_reserva_formateada}
              </Typography>
              <Typography variant="body2" color="rgb(55, 30, 10)">
  <a
    href={`mailto:${reserva.email}`}
    style={{
      color: "rgb(55, 30, 10)", // Cambia el color del enlace
      textDecoration: "none", // Opcional: elimina el subrayado
    }}
  >
    {reserva.email}
  </a>{" "}
  | {reserva.tipo_terapia}
</Typography>
              <Typography variant="body2">{reserva.motivo_consulta}</Typography>
              {reserva.comentarios && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  💬 {reserva.comentarios}
                </Typography>
              )}
            </StyledCard>
          ))
        ) : (
          <Typography color="rgb(40, 34, 29)">
            <FaExclamationCircle /> No hay reservas para este día.
          </Typography>
        )}
      </Box>
</>
  );
};

CalendarioReservas.propTypes = {
  reservasEfectuadas: PropTypes.array.isRequired,
  diasConReserva: PropTypes.object.isRequired,
};

export default CalendarioReservas;


import { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import {
  FaCalendarAlt,
  FaCheck,
  FaTimes,
  FaTrash,
  FaUserCheck,
} from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const DashboardContainer = styled(Box)`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-image: url("/images/contact.svg"); 
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
`;

const Section = styled(Paper)`
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const StyledCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  background: white;
  padding: 10px;
`;

const TestimonialCard = styled(Box)`
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  background-color: #b07241 !important;
  color: white !important;
  text-transform: none !important;
  font-weight: bold !important;
  border-radius: 25px !important;
  padding: 8px 20px !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;

  &:hover {
    background-color: #8c5a34 !important;
  }
`;

const AdminDashboard = () => {
  const [reservas, setReservas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    fetch("/api/reservas")
      .then((res) => res.json())
      .then((data) => setReservas(data));

    fetch("/api/testimonios")
      .then((res) => res.json())
      .then((data) => setTestimonios(data));
  }, []);

  const handleCancelReserva = (id) => {
    fetch(`/api/reservas/${id}/cancelar`, { method: "DELETE" }).then(() =>
      setReservas(reservas.filter((reserva) => reserva.id !== id))
    );
  };

  const handleApproveTestimonial = (id) => {
    fetch(`/api/testimonios/${id}/aprobar`, { method: "PATCH" }).then(() => {
      setTestimonios((prev) =>
        prev.map((testimonio) =>
          testimonio.id === id ? { ...testimonio, aprobado: true } : testimonio
        )
      );
    });
  };

  const handleDeleteTestimonial = (id) => {
    fetch(`/api/testimonios/${id}`, { method: "DELETE" }).then(() =>
      setTestimonios(testimonios.filter((t) => t.id !== id))
    );
  };

  return (
    <DashboardContainer>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          mb: 4,
          color: "#4b3f2f",
          fontFamily: "Playfair Display",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FaUserCheck /> Panel de Administración
      </Typography>

      {/* Sección de Reservas con Calendario */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#4b3f2f",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FaCalendarAlt /> Reservas Activas
        </Typography>
        <StyledCalendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date }) => {
            const reservaEnFecha = reservas.find(
              (reserva) =>
                new Date(reserva.fecha).toDateString() === date.toDateString()
            );
            return reservaEnFecha ? (
              <span style={{ color: "red" }}>●</span>
            ) : null;
          }}
        />
        <Box mt={4}>
          <Typography variant="h6" fontWeight="bold" sx={{ color: "#4b3f2f" }}>
            📌 Reservas para {selectedDate.toDateString()}
          </Typography>
          {reservas
            .filter(
              (reserva) =>
                new Date(reserva.fecha).toDateString() ===
                selectedDate.toDateString()
            )
            .map((reserva) => (
              <TestimonialCard key={reserva.id}>
                <Typography>
                  {reserva.cliente} - {reserva.hora}
                </Typography>
                <StyledButton onClick={() => handleCancelReserva(reserva.id)}>
                  <FaTimes /> Cancelar
                </StyledButton>
              </TestimonialCard>
            ))}
        </Box>
      </Section>

      {/* Sección de Testimonios */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#4b3f2f",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          📝 Gestión de Testimonios
        </Typography>
        {testimonios.length === 0 ? (
          <Typography>No hay testimonios aún.</Typography>
        ) : (
          testimonios.map((testimonio) => (
            <TestimonialCard key={testimonio.id}>
              <Typography>
                {testimonio.cliente}: {testimonio.mensaje}
              </Typography>
              <Box>
                {!testimonio.aprobado && (
                  <StyledButton
                    onClick={() => handleApproveTestimonial(testimonio.id)}
                    sx={{ backgroundColor: "#355E3B !important" }}
                  >
                    <FaCheck /> Aprobar
                  </StyledButton>
                )}
                <StyledButton
                  onClick={() => handleDeleteTestimonial(testimonio.id)}
                  sx={{ backgroundColor: "#8c5a34 !important" }}
                >
                  <FaTrash /> Eliminar
                </StyledButton>
              </Box>
            </TestimonialCard>
          ))
        )}
      </Section>
    </DashboardContainer>
  );
};

export default AdminDashboard;

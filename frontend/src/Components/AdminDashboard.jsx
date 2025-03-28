import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  FaTimes,
  FaUserCheck,
  FaExclamationCircle,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Swal from "sweetalert2";
import TestimoniosAdmin from "./TestimoniosAdmin";
import CalendarioReservas from "./CalendarioReservas";

const DashboardContainer = styled(Box)`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-image: url("/images/adminfoto.svg");
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px; // Ajusta el padding en tablet y móvil
  }
`;

const LogoutButton = styled(IconButton)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgb(100, 124, 105) !important;
  color: white !important;
  padding: 10px !important;
  border-radius: 50% !important;
  transition: all 0.3s ease !important;

  &:hover {
    background-color: #8c5a34 !important;
  }
`;
const Section = styled(Box)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  padding: 25px;
  border-radius: 12px;
  margin-top: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;





const CancelButton = styled(Button)`
  background-color: #cbbf9b !important; // Beige suave
  color: #4b3f2f !important; // Marrón oscuro
  font-weight: bold !important;
  border-radius: 25px !important;
  padding: 8px 20px !important;
  text-transform: none !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;

  &:hover {
    background-color: #b7aa85 !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const AdminDashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [reservas, setReservas] = useState([]);
  const [reservasCanceladas, setReservasCanceladas] = useState([]);
  const [reservasEfectuadas, setReservasEfectuadas] = useState([]);
  const [diasConReserva, setDiasConReserva] = useState({}); // ✅ Cambiar de array a objeto

  const handleLogout = () => {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión se cerrará y necesitarás volver a iniciar sesión.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b07241",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // 📌 Borrar tokens y redirigir
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("role");

        Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          text: "Has cerrado sesión correctamente.",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/login"); // Redirige al login
        }, 2000);
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/reservas/")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error("Error: La API no devolvió una lista de reservas", data);
          return;
        }
  
        const now = new Date();
        const activas = [];
        const efectuadas = [];
        const canceladas = [];
        const diasReserva = {};
  
        data.forEach((reserva) => {
          const fechaReserva = new Date(reserva.fecha_reserva);
          const fechaKey = fechaReserva.toISOString().split("T")[0];
  
          const [hours, minutes] = reserva.hora_reserva_formateada
            ? reserva.hora_reserva_formateada.split(":").map(Number)
            : [0, 0];
  
          const fechaHoraInicio = new Date(
            fechaReserva.getFullYear(),
            fechaReserva.getMonth(),
            fechaReserva.getDate(),
            hours,
            minutes
          );
  
          const fechaHoraFin = new Date(fechaHoraInicio.getTime() + 60 * 60 * 1000);
  
          if (reserva.cancelada) {
            canceladas.push(reserva);
            // Solo marcar como cancelada si aún no existe otro tipo
            if (!diasReserva[fechaKey]) {
              diasReserva[fechaKey] = "cancelada";
            }
          } else if (fechaHoraFin > now) {
            activas.push(reserva);
            diasReserva[fechaKey] = "futura"; // tiene prioridad sobre cancelada
          } else {
            efectuadas.push(reserva);
            diasReserva[fechaKey] = "pasada"; // tiene prioridad sobre cancelada
          }
        });
  
        setReservas(activas);
        setReservasEfectuadas(efectuadas);
        setReservasCanceladas(canceladas);
        setDiasConReserva(diasReserva);
      })
      .catch((error) => console.error("Error obteniendo reservas:", error));
  }, []);
  

  const handleCancelReserva = (id) => {
    fetch(`http://localhost:8000/api/reservas/${id}/cancelar/`, {
      method: "PATCH",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cancelar la reserva");
        }
        return response.json();
      })
      .then((data) => {
        // ✅ Actualizar el estado de las reservas
        setReservasCanceladas([...reservasCanceladas, data.reserva]);
        setReservas(reservas.filter((reserva) => reserva.id !== id));

        // ✅ Agregar la fecha al calendario como cancelada
        const fechaKey = new Date(data.reserva.fecha_reserva).toDateString();
        setDiasConReserva((prev) => ({ ...prev, [fechaKey]: "cancelada" }));

        // ✅ Mostrar alerta de éxito con SweetAlert2
        Swal.fire({
          icon: "success",
          title: "Reserva cancelada",
          text: "La reserva ha sido cancelada exitosamente.",
          confirmButtonColor: "#b07241",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cancelar la reserva. Inténtalo de nuevo.",
          confirmButtonColor: "#d33",
        });
      });
  };

  return (
    <DashboardContainer>
      {/* 🔹 Botón de Logout con Tooltip */}
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-end", sm: "flex-end" }, // 🔹 Derecha en todas las pantallas
          alignItems: "center",
          position: "absolute", // 🔹 Para moverlo con `top` y `right`
          top: { xs: "10px", sm: "20px" }, // 🔹 Más arriba solo en móviles
          right: { xs: "15px", sm: "150px" }, // 🔹 Más a la derecha en móviles
          zIndex: 10, // 🔹 Para que siempre se vea encima de otros elementos
        }}
      >
        <Tooltip title="Cerrar sesión">
          <LogoutButton
            onClick={handleLogout}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.2rem" }, // 🔹 Tamaño adaptable
              padding: { xs: "6px", sm: "10px" }, // 🔹 Menos padding en móviles
              borderRadius: "8px",
            }}
          >
            <FaSignOutAlt size={18} />
          </LogoutButton>
        </Tooltip>
      </Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{
          textAlign: "center",
          mt: { xs: 6, sm: 3, md: 4 }, // 📌 Menos margen en móviles
          mb: { xs: 2, sm: 3, md: 4 }, // 📌 Menos margen en móviles
          color: "rgb(42, 23, 8)",
          fontSize: { xs: "1.4rem", sm: "2rem", md: "2rem" }, // 📌 Tamaño adaptable
        }}
      >
        <FaUserCheck /> Panel de Administración
      </Typography>

      {/* 📅 Calendario de Reservas */}
    
      <CalendarioReservas
  reservasEfectuadas={[...reservas, ...reservasEfectuadas]} // ✅ Unificas ambas
  diasConReserva={diasConReserva}
/>

   

      <Divider sx={{ margin: "30px 0" }} />

      {/* 📌 Reservas Actuales */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: { xs: 1, sm: 2 }, // 📌 Menos margen en móviles
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" }, // 📌 Tamaño adaptable
          }}
        >
          📌 Reservas Actuales
        </Typography>

        {reservas.length === 0 ? (
          <Typography color="rgb(40, 34, 29)">
            <FaExclamationCircle /> No hay reservas activas.
          </Typography>
        ) : (
          <Box sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Motivo</TableCell>
                  <TableCell>Tipo Terapia</TableCell>
                  <TableCell>Comentarios</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservas.map((reserva) => (
                  <TableRow key={reserva.id}>
                    <TableCell>{reserva.nombre_completo}</TableCell>
                    <TableCell>
                      <a
                        href={`mailto:${reserva.email}`}
                        style={{
                          color: "#4B3F2F",
                          textDecoration: "underline",
                        }}
                      >
                        {reserva.email}
                      </a>
                    </TableCell>
                    <TableCell>{reserva.fecha_reserva_formateada}</TableCell>
                    <TableCell>{reserva.hora_reserva_formateada}</TableCell>
                    <TableCell>{reserva.motivo_consulta}</TableCell>
                    <TableCell>{reserva.tipo_terapia}</TableCell>
                    <TableCell>{reserva.comentarios}</TableCell>
                    <TableCell>
                      <CancelButton
                        onClick={() => handleCancelReserva(reserva.id)}
                      >
                        <FaTimes /> Cancelar
                      </CancelButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Section>

      <Divider sx={{ margin: "30px 0" }} />

      {/* ✅ Reservas Efectuadas */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: { xs: 1, sm: 2 }, // 📌 Menos margen en móviles
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" }, // 📌 Tamaño adaptable
          }}
        >
          <FaHistory /> Reservas Efectuadas
        </Typography>

        {reservasEfectuadas.length === 0 ? (
          <Typography color="rgb(40, 34, 29)">
            <FaExclamationCircle /> No hay reservas efectuadas.
          </Typography>
        ) : (
          <Box sx={{ overflowX: "auto" }}>
            <Table>
              <TableBody>
                {reservasEfectuadas.map((reserva) => (
                  <TableRow key={reserva.id}>
                    <TableCell>{reserva.nombre_completo}</TableCell>
                    <TableCell>{reserva.fecha_reserva_formateada}</TableCell>
                    <TableCell>{reserva.hora_reserva_formateada}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Section>

      <Divider sx={{ margin: "30px 0" }} />
      {/* ❌ Reservas Canceladas */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: { xs: 1, sm: 2 }, // 📌 Reduce margen en móviles
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" }, // 📌 Tamaño adaptable
          }}
        >
          <FaTimes /> Reservas Canceladas
        </Typography>

        {reservasCanceladas.length === 0 ? (
          <Typography color="rgb(40, 34, 29)">
            <FaExclamationCircle /> No hay reservas canceladas.
          </Typography>
        ) : (
          <Box sx={{ overflowX: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Motivo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservasCanceladas.map((reserva) => (
                  <TableRow key={reserva.id}>
                    <TableCell>{reserva.nombre_completo}</TableCell>
                    <TableCell>{reserva.email}</TableCell>
                    <TableCell>{reserva.fecha_reserva_formateada}</TableCell>
                    <TableCell>{reserva.hora_reserva_formateada}</TableCell>
                    <TableCell>{reserva.motivo_consulta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Section>
      <Divider sx={{ margin: "30px 0" }} />
      <TestimoniosAdmin />
    </DashboardContainer>
  );
};

export default AdminDashboard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { img } from "../utils/imagePath";
import { API_URL } from "../utils/config";
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
import "@fontsource/playfair-display";
import styled from "styled-components";
import Swal from "sweetalert2";
import TestimoniosAdmin from "./TestimoniosAdmin";
import CalendarioReservas from "./CalendarioReservas";

const DashboardContainer = styled(Box)`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
  background-image: url(${img("adminfoto.svg")});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
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
  background-color: #cbbf9b !important;
  color: #4b3f2f !important;
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
  const [diasConReserva, setDiasConReserva] = useState({});
  const handleLogout = async () => {
    const refresh = localStorage.getItem("refreshToken");

    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión se cerrará y se invalidarán tus credenciales.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#b07241",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`${API_URL}/api/logout/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify({ refresh }),
          });
        } catch (error) {
          console.error("Error al cerrar sesión", error);
        }

        // Limpiar tokens del localStorage
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("role");

        Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    });
  };

  const reenviarCorreo = async (reservaId) => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(`${API_URL}/api/testimonios/enviar-correo/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ reserva_id: reservaId }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Correo reenviado",
          text: "El testimonio fue enviado correctamente.",
          confirmButtonColor: "#b07241",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data?.error || "No se pudo reenviar el testimonio.",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error reenviando correo:", error);
      Swal.fire({
        icon: "error",
        title: "Error inesperado",
        text: "Hubo un problema al reenviar el correo.",
        confirmButtonColor: "#d33",
      });
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/api/reservas/`)
    .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          console.error(
            "Error: La API no devolvió una lista de reservas",
            data
          );
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

          const fechaHoraFin = new Date(
            fechaHoraInicio.getTime() + 60 * 60 * 1000
          );

          if (reserva.cancelada) {
            canceladas.push(reserva);
            if (!diasReserva[fechaKey]) {
              diasReserva[fechaKey] = "cancelada";
            }
          } else if (fechaHoraFin > now) {
            activas.push(reserva);
            diasReserva[fechaKey] = "futura";
          } else {
            efectuadas.push(reserva);
            diasReserva[fechaKey] = "pasada";
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
    fetch(`${API_URL}/api/reservas/${id}/cancelar/`, {
      method: "PATCH",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo cancelar la reserva");
        }
        return response.json();
      })
      .then((data) => {
        setReservasCanceladas([...reservasCanceladas, data.reserva]);
        setReservas(reservas.filter((reserva) => reserva.id !== id));
  
        const fechaKey = new Date(data.reserva.fecha_reserva).toDateString();
        setDiasConReserva((prev) => ({ ...prev, [fechaKey]: "cancelada" }));
  
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
          justifyContent: { xs: "flex-end", sm: "flex-end" },
          alignItems: "center",
          position: "absolute",
          top: { xs: "10px", sm: "20px" },
          right: { xs: "15px", sm: "150px" },
          zIndex: 10,
        }}
      >
        <Tooltip title="Cerrar sesión">
          <LogoutButton
            onClick={handleLogout}
            sx={{
              fontSize: { xs: "0.9rem", sm: "1.2rem" },
              padding: { xs: "6px", sm: "10px" },
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
          mt: { xs: 6, sm: 3, md: 4 },
          mb: { xs: 2, sm: 3, md: 4 },
          color: "rgb(42, 23, 8)",
          fontSize: { xs: "1.4rem", sm: "2rem", md: "2rem" },
        }}
      >
        <FaUserCheck /> Panel de Administración
      </Typography>

      {/* 📅 Calendario de Reservas */}

      <CalendarioReservas
        reservasEfectuadas={[...reservas, ...reservasEfectuadas]}
        diasConReserva={diasConReserva}
      />

      <Divider sx={{ margin: "30px 0" }} />

      {/* 📌 Reservas Actuales */}
      <Section>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: { xs: 1, sm: 2 },
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
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
            mb: { xs: 1, sm: 2 },
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
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
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Acción</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reservasEfectuadas.map((reserva) => (
                  <TableRow key={reserva.id}>
                    <TableCell>{reserva.nombre_completo}</TableCell>
                    <TableCell>{reserva.fecha_reserva_formateada}</TableCell>
                    <TableCell>{reserva.hora_reserva_formateada}</TableCell>
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
                    <TableCell>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={() => reenviarCorreo(reserva.id)}
                        sx={{
                          borderColor: "#4B3F2F",
                          color: "#4B3F2F",
                          fontWeight: "bold",
                          textTransform: "none",
                          borderRadius: "25px",
                          padding: "6px 16px",
                          "&:hover": {
                            backgroundColor: "#f5f0e6",
                            borderColor: "#8B6C42",
                          },
                        }}
                      >
                        📧 Reenviar Testimonio
                      </Button>
                    </TableCell>
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
            mb: { xs: 1, sm: 2 },
            color: "rgb(55, 30, 10)",
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.5rem" },
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
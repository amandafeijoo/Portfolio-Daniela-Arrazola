import { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Divider,  Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { 
  FaCalendarAlt, 
  FaCheck, 
  FaTimes, 
  FaTrash, 
  FaUserCheck, 
  FaExclamationCircle, 
  FaHistory
} from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import Swal from "sweetalert2";


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
  background: rgba(255, 255, 255, 0.85);
  padding: 25px;
  border-radius: 12px;
  margin-top: 25px;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
`;

const Card = styled(Box)`
  background: white;
  padding: 15px;
  border-radius: 12px;
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

const StyledCalendar = styled(Calendar)`
  border: none;
  border-radius: 10px;
  border: 6px solid rgb(211, 190, 151); // Dorado suave
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
  background: white;
  padding: 10px;
`;

const AdminDashboard = () => {
  const [reservas, setReservas] = useState([]);
  const [reservasCanceladas, setReservasCanceladas] = useState([]);
  const [reservasEfectuadas, setReservasEfectuadas] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [diasConReserva, setDiasConReserva] = useState({}); // ✅ Cambiar de array a objeto
  const [testimoniosPendientes, setTestimoniosPendientes] = useState([]);
  const [testimoniosAprobados, setTestimoniosAprobados] = useState([]);
  const [testimoniosEliminados, setTestimoniosEliminados] = useState([]);

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
        const diasReserva = {}; // ✅ Usar un objeto en lugar de un Set()

        data.forEach((reserva) => {
          const fechaReserva = new Date(reserva.fecha_reserva);
          const fechaKey = fechaReserva.toISOString().split("T")[0]; // ✅ Formato YYYY-MM-DD

          if (reserva.cancelada) {
            canceladas.push(reserva);
            diasReserva[fechaKey] = "cancelada"; // ✅ Guardar estado
          } else if (fechaReserva >= now) {
            activas.push(reserva);
            diasReserva[fechaKey] = "futura"; // ✅ Guardar estado
          } else {
            efectuadas.push(reserva);
            diasReserva[fechaKey] = "pasada"; // ✅ Guardar estado
          }
        });

        setReservas(activas);
        setReservasEfectuadas(efectuadas);
        setReservasCanceladas(canceladas);
        setDiasConReserva(diasReserva); // ✅ Actualizar el estado con el objeto de fechas
      })
      .catch((error) => console.error("Error obteniendo reservas:", error));
  }, []);
  

const handleCancelReserva = (id) => {
fetch(`http://localhost:8000/api/reservas/${id}/cancelar/`, { method: "PATCH" })
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
  
  const handleApproveTestimonial = (id) => {
    fetch(`http://localhost:8000/api/testimonios/${id}/aprobar/`, { method: "PATCH" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo aprobar el testimonio");
        }
        return response.json();
      })
      .then(() => {
        setTestimoniosPendientes((prev) => prev.filter((t) => t.id !== id));
        setTestimoniosAprobados((prev) => [
          ...prev,
          testimoniosPendientes.find((t) => t.id === id),
        ]);
  
        // ✅ Alerta de éxito
        Swal.fire({
          icon: "success",
          title: "Testimonio aprobado",
          text: "El testimonio ha sido aprobado correctamente.",
          confirmButtonColor: "#b07241",
        });
      })
      .catch((error) => {
        console.error(error); // ✅ Evita el error de TypeScript
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo aprobar el testimonio. Inténtalo de nuevo.",
          confirmButtonColor: "#d33",
        });
      });
  };
  
  
  const handleDeleteTestimonial = (id) => {
    const testimonioAEliminar = testimoniosPendientes.find((t) => t.id === id) || 
                                 testimoniosAprobados.find((t) => t.id === id);
  
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/api/testimonios/${id}/eliminar/`, { method: "DELETE" })
          .then((response) => {
            if (!response.ok) {
              throw new Error("No se pudo eliminar el testimonio.");
            }
            return response.json();
          })
          .then(() => {
            setTestimoniosPendientes((prev) => prev.filter((t) => t.id !== id));
            setTestimoniosAprobados((prev) => prev.filter((t) => t.id !== id));
  
            if (testimonioAEliminar) {
              setTestimoniosEliminados((prev) => [...prev, testimonioAEliminar]);
            }
  
            Swal.fire({
              icon: "success",
              title: "Testimonio eliminado",
              text: "El testimonio ha sido eliminado correctamente.",
              confirmButtonColor: "#b07241",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Hubo un problema al eliminar el testimonio.",
              confirmButtonColor: "#d33",
            });
            console.error("Error eliminando testimonio:", error);
          });
      }
    });
  };
  
  return (
    <DashboardContainer>
      <Typography variant="h4" fontWeight="bold" sx={{ textAlign: "center", mb: 4, color: "rgb(71, 53, 39)" }}>
        <FaUserCheck /> Panel de Administración
      </Typography>

      {/* 📅 Calendario de Reservas */}
      <Section>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
          <FaCalendarAlt /> Calendario de Reservas
        </Typography>
        <StyledCalendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileClassName={({ date }) => {
            const fechaKey = date.toISOString().split("T")[0]; // ✅ Convertir a formato YYYY-MM-DD
            if (diasConReserva[fechaKey] === "cancelada") return "cancelada-day";
            if (diasConReserva[fechaKey] === "futura") return "futura-day";
            if (diasConReserva[fechaKey] === "pasada") return "pasada-day";
            return "";
          }}
        />
      </Section>

      <Divider sx={{ margin: "30px 0" }} />

{/* 📌 Reservas Actuales */}
<Section>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
    📌 Reservas Actuales
  </Typography>
  {reservas.length === 0 ? (
    <Typography color="gray"><FaExclamationCircle /> No hay reservas activas.</Typography>
  ) : (
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
            <TableCell>{reserva.email}</TableCell>
            <TableCell>{reserva.fecha_reserva_formateada}</TableCell>
            <TableCell>{reserva.hora_reserva_formateada}</TableCell>
            <TableCell>{reserva.motivo_consulta}</TableCell>
            <TableCell>{reserva.tipo_terapia}</TableCell>
            <TableCell>{reserva.comentarios}</TableCell>
            <TableCell>
              <Button onClick={() => handleCancelReserva(reserva.id)} variant="contained" color="secondary">
                <FaTimes /> Cancelar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )}
</Section>

<Divider sx={{ margin: "30px 0" }} />

{/* ✅ Reservas Efectuadas */}
<Section>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
    <FaHistory /> Reservas Efectuadas
  </Typography>
  {reservasEfectuadas.length === 0 ? (
    <Typography color="gray"><FaExclamationCircle /> No hay reservas efectuadas.</Typography>
  ) : (
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
  )}
</Section>

<Divider sx={{ margin: "30px 0" }} />
{/* ❌ Reservas Canceladas */}
<Section>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
    <FaTimes /> Reservas Canceladas
  </Typography>
  {reservasCanceladas.length === 0 ? (
    <Typography color="gray">
      <FaExclamationCircle /> No hay reservas canceladas.
    </Typography>
  ) : (
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
  )}
</Section>

<Divider sx={{ margin: "30px 0" }} />

{/* ✅ Testimonios Aprobados */}
<Section>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
    ✅ Testimonios Aprobados
  </Typography>
  {testimoniosAprobados.length === 0 ? (
    <Typography color="gray"><FaExclamationCircle /> No hay testimonios aprobados.</Typography>
  ) : (
    testimoniosAprobados.map((testimonio) => (
      <Card key={testimonio.id}>
        <Typography>{testimonio.nombre_cliente}: {testimonio.mensaje}</Typography>
      </Card>
    ))
  )}
</Section>

<Divider sx={{ margin: "30px 0" }} />

{/* 🕒 Testimonios Pendientes de Aprobación y Eliminados */}
<Section>
  <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
    🕒 Testimonios Pendientes y Eliminados
  </Typography>

  {/* 🔹 Testimonios Pendientes */}
  {testimoniosPendientes.length === 0 && testimoniosEliminados.length === 0 ? (
    <Typography color="gray"><FaExclamationCircle /> No hay testimonios pendientes ni eliminados.</Typography>
  ) : (
    <>
      {testimoniosPendientes.map((testimonio) => (
        <Card key={testimonio.id}>
          <Typography>{testimonio.nombre_cliente}: {testimonio.mensaje}</Typography>
          <StyledButton onClick={() => handleApproveTestimonial(testimonio.id)}>
            <FaCheck /> Aprobar
          </StyledButton>
          <StyledButton onClick={() => handleDeleteTestimonial(testimonio.id)}>
            <FaTrash /> Eliminar
          </StyledButton>
        </Card>
      ))}

      {/* 🔹 Testimonios Eliminados */}
      {testimoniosEliminados.length > 0 && (
        <>
          <Divider sx={{ margin: "20px 0" }} />
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "#8c5a34" }}>
            🗑️ Testimonios Eliminados
          </Typography>
          {testimoniosEliminados.map((testimonio) => (
            <Card key={testimonio.id} sx={{ backgroundColor: "#f5d0d0" }}>
              <Typography>{testimonio.nombre_cliente}: {testimonio.mensaje}</Typography>
            </Card>
          ))}
        </>
      )}
    </>
  )}
</Section>



    </DashboardContainer>
  );
};

export default AdminDashboard;







import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import styled from "styled-components";
import Swal from "sweetalert2"; // ✅ Importa SweetAlert2

const FormContainer = styled(Paper)`
  background: rgb(219, 193, 172);
  padding: 25px;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #b07241 !important;
  color: white !important;
  font-weight: bold !important;
  margin-top: 15px !important;
`;

const TestimonialForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [reservaId, setReservaId] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("reserva_id");
    if (id) {
      setReservaId(id);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!reservaId) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se encontró una reserva válida.",
        confirmButtonColor: "#b07241",
      });
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8000/api/testimonios/crear/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reserva_id: reservaId,
          nombre_cliente: nombre,
          email_cliente: email,
          mensaje,
        }),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "¡Gracias por tu testimonio!",
          text: "Tu testimonio se ha enviado correctamente.",
          confirmButtonColor: "#b07241",
        });
  
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el testimonio.",
          confirmButtonColor: "#b07241",
        });
      }
    } catch (error) { // ✅ Aquí es donde debe estar el catch
      console.error("Error de conexión:", error);
      Swal.fire({
        icon: "error",
        title: "Error de Conexión",
        text: "No se pudo conectar con el servidor.",
        confirmButtonColor: "#b07241",
      });
    }
  };
  
      

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: 'url("/images/contact.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <FormContainer elevation={3}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, color: "#4b3f2f" }}>
          Deja tu Testimonio
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Nombre" fullWidth value={nombre} onChange={(e) => setNombre(e.target.value)} sx={{ mb: 2 }} required />
          <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} required />
          <TextField label="Mensaje" fullWidth multiline rows={4} value={mensaje} onChange={(e) => setMensaje(e.target.value)} sx={{ mb: 2 }} required />
          <StyledButton type="submit" variant="contained">Enviar Testimonio</StyledButton>
        </form>
      </FormContainer>
    </Box>
  );
};

export default TestimonialForm;


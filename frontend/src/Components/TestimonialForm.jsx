import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { img } from "../utils/imagePath";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import styled from "styled-components";
import Swal from "sweetalert2";
import "@fontsource/playfair-display";

const FormContainer = styled(Paper)`
  background: rgb(219, 193, 172);
  padding: 25px;
  border-radius: 20px;
  max-width: 500px;
  margin: auto;
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 600px) {
    background: transparent; /* 👈 Se elimina el fondo en móviles */
    box-shadow: none;      
    padding: 15px;
  }
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
  const [imagen, setImagen] = useState(null);
  const [reservaId, setReservaId] = useState(null);
  const [searchParams] = useSearchParams();
  const [consentimiento, setConsentimiento] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const id = searchParams.get("reserva_id");
    if (id) {
      setReservaId(id);
    }
  }, [searchParams]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagen(e.target.files[0]);
    }
  };

  const handleConsentimientoChange = (e) => {
    setConsentimiento(e.target.checked);
  };

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

    if (!consentimiento) {
      Swal.fire({
        icon: "error",
        title: "Consentimiento requerido",
        text: "Debes aceptar los términos para enviar el testimonio.",
        confirmButtonColor: "#b07241",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("reserva_id", reservaId);
      formData.append("nombre_cliente", nombre);
      formData.append("email_cliente", email);
      formData.append("mensaje", mensaje);
      formData.append("consentimiento", consentimiento);
      if (imagen) {
        formData.append("imagen", imagen);
      }

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/testimonios/crear/`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "¡Gracias por tu testimonio!",
          text: "Tu testimonio ha sido enviado y está pendiente de aprobación.",
          timer: 3000,
          confirmButtonColor: "#b07241",
        });

        // Limpiar campos
        setNombre("");
        setEmail("");
        setMensaje("");
        setImagen(null);
        setConsentimiento(false);

        // Redirigir al inicio
        navigate("/");
      } else {
        const errorData = await response.json();
        if (errorData.error === "Ya existe un testimonio para esta reserva") {
          Swal.fire({
            icon: "error",
            title: "Testimonio ya existente",
            text: "Ya has dejado un testimonio. No se pueden dejar 2 testimonios.",
            confirmButtonColor: "#b07241",
          });
        } else if (errorData.error === "El correo no coincide con la reserva") {
          Swal.fire({
            icon: "error",
            title: "Correo no registrado",
            text: "El correo proporcionado no coincide con la reserva.",
            confirmButtonColor: "#b07241",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar el testimonio.",
            confirmButtonColor: "#b07241",
          });
        }
      }
    } catch (error) {
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
        backgroundImage: `url(${img("contact.svg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <FormContainer elevation={3}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            mb: 2,
            color: "#4b3f2f",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          Deja tu Testimonio
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            sx={{ mb: 2, fontFamily: "'Playfair Display', serif" }}
            required
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2, fontFamily: "'Playfair Display', serif" }}
            required
          />
          <TextField
            label="Mensaje"
            fullWidth
            multiline
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            sx={{ mb: 2, fontFamily: "'Playfair Display', serif" }}
            required
          />
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            style={{ marginBottom: "15px" }}
          />
          <Typography
            variant="body2"
            sx={{ mb: 2, fontFamily: "'Playfair Display', serif" }}
          >
            Sube tu foto (*opcional)
          </Typography>

          {imagen && (
            <Box
              sx={{
                mb: 2,
                textAlign: "center",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              <Typography variant="body2">Imagen seleccionada:</Typography>
              <img
                src={URL.createObjectURL(imagen)}
                alt="Vista previa"
                style={{
                  width: "100px",
                  height: "auto",
                  margin: "10px auto",
                  display: "block",
                }}
              />
              <Button
                variant="outlined"
                color="error"
                onClick={() => setImagen(null)}
              >
                Eliminar foto
              </Button>
            </Box>
          )}
          <FormControl required sx={{ alignItems: "flex-start", mt: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="consentimiento"
                  sx={{ color: " #8fa99e" }}
                  checked={consentimiento}
                  onChange={handleConsentimientoChange}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b3f2f",
                    fontFamily: "'Playfair Display', serif",
                    textAlign: "justify",
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  He leído y acepto que mi testimonio, junto con mi nombre y, si
                  lo incluyo, mi fotografía, pueda ser publicado en la web{" "}
                  <strong>danielapsicologia.com</strong>. Entiendo que puedo
                  solicitar su eliminación en cualquier momento.
                </Typography>
              }
            />
            <FormHelperText
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "12px",
                color: "#4b3f2f",
                pl: 4.5,
              }}
            >
              (*Campo obligatorio)
            </FormHelperText>
          </FormControl>

          <StyledButton type="submit" variant="contained">
            Enviar Testimonio
          </StyledButton>
        </form>
      </FormContainer>
    </Box>
  );
};

export default TestimonialForm;

// src/components/TestimonialForm.jsx

import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { API_URL } from "../utils/config";
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
    background: transparent;
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Leer reserva_id de la query
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
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se encontró una reserva válida.",
        confirmButtonColor: "#b07241",
      });
    }
    if (!consentimiento) {
      return Swal.fire({
        icon: "error",
        title: "Consentimiento requerido",
        text: "Debes aceptar los términos para enviar el testimonio.",
        confirmButtonColor: "#b07241",
      });
    }

    try {
      const formData = new FormData();
      formData.append("reserva_id", reservaId);
      formData.append("nombre_cliente", nombre);
      formData.append("email_cliente", email);
      formData.append("mensaje", mensaje);
      formData.append("consentimiento", consentimiento);
      if (imagen) formData.append("imagen", imagen);

      const response = await fetch(`${API_URL}/api/testimonios/crear/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        await Swal.fire({
          icon: "success",
          title: "¡Gracias por tu testimonio!",
          text: "Tu testimonio ha sido enviado y está pendiente de aprobación.",
          timer: 3000,
          confirmButtonColor: "#b07241",
        });
        // limpiar
        setNombre("");
        setEmail("");
        setMensaje("");
        setImagen(null);
        setConsentimiento(false);
        navigate("/");
      } else {
        const errorData = await response.json().catch(() => ({}));
        const msg =
          errorData.error ||
          "Hubo un problema al enviar el testimonio.";
        Swal.fire({
          icon: "error",
          title: "Error",
          text: msg,
          confirmButtonColor: "#b07241",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error de Conexión",
        text: "No se pudo conectar con el servidor.",
        confirmButtonColor: "#b07241",
      });
    }
  };

  // URL optimizada de Cloudinary
  const cloudinaryBg =
    "https://res.cloudinary.com/dhikp5azp/image/upload/" +
    "f_auto,q_auto,w_800/" +
    "v1745570838/Historia_de_Instagram_Lista_de_Precios_de_Joyas_Elegante_Negro_y_Beige_V%C3%ADdeo_qxuzag_di9opo.jpg";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: {
          xs: "none",
          sm: `url("${cloudinaryBg}")`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Playfair Display', serif",
      }}
    >
      <FormContainer elevation={3}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: "#4b3f2f" }}
        >
          Deja tu Testimonio
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Mensaje"
            fullWidth
            multiline
            rows={4}
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            sx={{ mb: 2 }}
            required
          />

          {/* Input de imagen */}
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            style={{ marginBottom: "15px" }}
          />
          <Typography variant="body2" sx={{ mb: 2 }}>
            Sube tu foto (*opcional)
          </Typography>

          {/* Preview de imagen */}
          {imagen && (
            <Box sx={{ mb: 2, textAlign: "center" }}>
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
                loading="lazy"
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
                  sx={{ color: "#8fa99e" }}
                  checked={consentimiento}
                  onChange={handleConsentimientoChange}
                />
              }
              label={
                <Typography
                  variant="body2"
                  sx={{
                    color: "#4b3f2f",
                    fontSize: "14px",
                    lineHeight: 1.5,
                  }}
                >
                  He leído y acepto que mi testimonio, junto con mi nombre
                  y, si lo incluyo, mi fotografía, pueda ser publicado en la
                  web <strong>danielapsicologia.com</strong>.
                </Typography>
              }
            />
            <FormHelperText sx={{ pl: 4.5, fontSize: "12px" }}>
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


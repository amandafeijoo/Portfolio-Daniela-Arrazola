// src/components/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/config";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import styled from "styled-components";
import "@fontsource/playfair-display";


// URL optimizada de Cloudinary
const cloudinaryBg =
  "https://res.cloudinary.com/dhikp5azp/image/upload/" +
  "f_auto,q_auto,w_800/" +
  "v1745570838/Historia_de_Instagram_Lista_de_Precios_de_Joyas_Elegante_Negro_y_Beige_V%C3%ADdeo_qxuzag_di9opo.jpg";

// 📌 Contenedor principal
const LoginContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("${cloudinaryBg}");
  background-size: cover;
  background-position: center;
  background-color: rgba(232, 221, 206, 0.9);
`;

// 📌 Tarjeta de Login estilizada
const LoginBox = styled(motion.div)`
  background: rgba(245, 238, 220, 0.9);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
  border: 2px solid #b07241;
`;

// Botón estilizado
const StyledButton = styled(Button)`
  background-color: #b07241;
  color: #fff;
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  padding: 12px;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #8c6b52;
  }
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((show) => !show);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/users/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        if (username === "psicoarrazola") {
          localStorage.setItem("role", "admin");
          Swal.fire({
            icon: "success",
            title: "¡Bienvenido!",
            text: "Inicio de sesión exitoso",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => navigate("/admin-dashboard"), 2000);
        } else {
          Swal.fire({
            icon: "warning",
            title: "Acceso denegado",
            text: "No tienes permisos de administrador.",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en el inicio de sesión",
          text: "Usuario o contraseña incorrectos.",
        });
      }
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      Swal.fire({
        icon: "error",
        title: "Error del servidor",
        text: "No se pudo conectar al servidor. Intenta más tarde.",
      });
    }
  };

  return (
    <LoginContainer>
      <LoginBox
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: "Playfair Display", fontWeight: "bold", color: "#4b3f2f" }}
        >
          Administrador
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, fontFamily: "Playfair Display", color: "#654828" }}
        >
          Ingrese sus credenciales
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Usuario"
            variant="outlined"
            sx={{
              mb: 2,
              background: "#fff",
              borderRadius: "5px",
              "& .MuiInputBase-input": { fontSize: { xs: "0.9rem", sm: "1rem" } },
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            inputProps={{ autoCapitalize: "none", autoCorrect: "off", spellCheck: false }}
          />

          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            sx={{ mb: 3, background: "#fff", borderRadius: "5px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <StyledButton type="submit" fullWidth>
            Iniciar Sesión
          </StyledButton>
        </form>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;


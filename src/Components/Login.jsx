import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";
import "@fontsource/playfair-display";

// 📌 Contenedor principal 
const LoginContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("/images/contact.svg"); /* Imagen de fondo */
  background-size: cover;
  background-position: center;
  background-color: rgba(232, 221, 206, 0.9); /* Fondo de respaldo */
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔹 Simulación de login para administrador
    if (email === "admin@example.com" && password === "admin123") {
      localStorage.setItem("role", "admin"); // Guarda el rol en localStorage
      navigate("/admin-dashboard"); 
    } else {
      alert("Usuario o contraseña incorrectos");
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
          sx={{
            fontFamily: "Playfair Display",
            fontWeight: "bold",
            color: "#4b3f2f",
          }}
        >
          Administrador
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginBottom: "20px",
            fontFamily: "Playfair Display",
            color: "#654828",
          }}
        >
          Ingrese sus credenciales
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Correo Electrónico"
            variant="outlined"
            sx={{
              marginBottom: "15px",
              background: "#fff",
              borderRadius: "5px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            variant="outlined"
            sx={{
              marginBottom: "20px",
              background: "#fff",
              borderRadius: "5px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

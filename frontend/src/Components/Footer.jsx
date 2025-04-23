import { Box, Typography, Link, Divider } from "@mui/material";
import styled from "styled-components";
import "@fontsource/playfair-display";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FooterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5eedc;
  border-top: 2px solid #d2b48c;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const FooterText = styled(Typography)`
  font-family: "Playfair Display";
  color: rgb(85, 119, 103);
  margin: 5px 0;
`;

const FooterLinks = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 5px;

  a {
    color: rgb(61, 88, 80);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #2c7a7b;
    }
  }
`;

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <FooterContainer>
      <FooterLinks>
        <Link onClick={() => handleNavigate("/terms")}>
          Términos y Condiciones
        </Link>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#557c70" }} />
        <Link onClick={() => handleNavigate("/privacy-policy")}>
          Política de Privacidad
        </Link>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#557c70" }} />
        <Link onClick={() => handleNavigate("/legal-notice")}>Aviso Legal</Link>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#557c70" }} />
        <Link onClick={() => handleNavigate("/cookies-policy")}>
          Política de Cookies
        </Link>
        <Divider orientation="vertical" flexItem sx={{ bgcolor: "#557c70" }} />
        <Link onClick={() => handleNavigate("/faq")}>Preguntas Frecuentes</Link>
      </FooterLinks>

      <FooterText variant="body2">
        © {new Date().getFullYear()} Creado por webcode-art.com | Daniela Arrázola
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;

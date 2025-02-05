import React from "react";
import { Box, Typography, Link } from "@mui/material";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "@fontsource/playfair-display";

const FooterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #557c70;
  border-top: 2px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 250px;
  margin-left: 80px;
`;

const SocialIcons = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-right: 80px;
  font-size: 40px;
  a {
    color: #f5eedc;
    transition: color 0.3s;

    &:hover {
      color: #305445;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/images/logoDaniela.svg" alt="Logo Daniela" />
      <Box textAlign="center">
        <Typography
          variant="body1"
          sx={{ fontFamily: "Playfair Display", color: "#f5eedc" }}
        >
          danielaarrazolabenitez@gmail.com
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontFamily: "Playfair Display", color: "#f5eedc" }}
        >
          +47 98315132
        </Typography>
        <Link
          href="/faq"
          sx={{
            fontFamily: "Playfair Display",
            color: "#f5eedc",
            display: "block",
            marginTop: "10px",
          }}
        >
          Preguntas Frecuentes
        </Link>
      </Box>
      <SocialIcons>
        <Box>
          <Link href="https://www.instagram.com" target="_blank" rel="noopener">
            <InstagramIcon />
          </Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener">
            <FacebookIcon />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener">
            <LinkedInIcon />
          </Link>
        </Box>
        <Box mt={2}>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Playfair Display", color: "#f5eedc" }}
          >
            Copyright © 2024 Daniela Arrazola
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: "Playfair Display", color: "#f5eedc" }}
          >
            Reservados todos los derechos
          </Typography>
          <Link
            href="/privacy-policy"
            sx={{
              fontFamily: "Playfair Display",
              color: "#f5eedc",
              display: "block",
              marginTop: "10px",
              fontSize: "0.3em",
            }}
          >
            Políticas de Privacidad
          </Link>
        </Box>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;

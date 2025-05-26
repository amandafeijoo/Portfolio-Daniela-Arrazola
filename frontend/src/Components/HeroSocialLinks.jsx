// src/components/HeroSocialLinks.jsx
import { Box, IconButton } from "@mui/material";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function HeroSocialLinks() {
  return (
    <Box
     id="hero-social-links"
      sx={{
        position: "absolute",
        top: "50%",
        right: { xs: 8, md: 24 },
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        zIndex: 1000,
      }}
    >
      {[
        { icon: FaFacebook, href: "https://facebook.com" },
        { icon: FaLinkedin,  href: "https://linkedin.com" },
        { icon: FaInstagram, href: "https://instagram.com/psicoarrazola" },
      ].map(({ icon: Icon, href }) => (
        <IconButton
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          size="small"        // ① padding más reducido
          sx={{
            bgcolor: "rgba(245,238,220,0.8)",
            color: "#305445",
            "&:hover": { color: "#4b3f2f" },
            // ② icono más pequeño en móvil, recupera en md+
            fontSize: { xs: "0.9rem", md: "1.7rem" },
          }}
        >
          <Icon />
        </IconButton>
      ))}
    </Box>
  );
}


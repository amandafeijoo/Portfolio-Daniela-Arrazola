import { Box, IconButton, Divider, Typography } from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function SocialLinks() {
  return (
    <>
      {/* Iconos de redes */}
      <Box display="flex" justifyContent="center" mt={1} mb={1}>
        <IconButton
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#305445",
            "&:hover": { color: "#4b3f2f" },
          }}
        >
          <FaFacebook />
        </IconButton>
        <IconButton
          href="https://www.instagram.com/psicoarrazola"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#305445",
            "&:hover": { color: "#4b3f2f" },
          }}
        >
          <FaInstagram />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/daniela-a-9b2845199/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#305445",
            "&:hover": { color: "#4b3f2f" },
          }}
        >
          <FaLinkedin />
        </IconButton>
      </Box>

      <Divider />

      {/* Email, WhatsApp y Footer */}
      <Box textAlign="center" mt={3}>
        <Typography
          variant="body2"
          sx={{
            fontSize: "1em",
            fontFamily: "Playfair Display",
            color: "#305445",
          }}
        >
          danielaarrazolabenitez@gmail.com
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
          <FaWhatsapp style={{ marginRight: 8, color: "#305445" }} />
          <Typography
            variant="body2"
            sx={{
              fontSize: "1em",
              fontFamily: "Playfair Display",
              color: "#305445",
            }}
          >
            +47 98315132
          </Typography>
        </Box>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8em",
            marginTop: 2,
            fontFamily: "Playfair Display",
            color: "#305445",
          }}
        >
          © {new Date().getFullYear()} Creado por webcode-art.com | Daniela
          Arrazola
        </Typography>
      </Box>
    </>
  );
}

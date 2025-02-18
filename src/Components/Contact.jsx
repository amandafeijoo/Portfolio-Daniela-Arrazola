import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import WhatsAppContact from "./WhatsAppContact";

const Contact = () => {
  return (
    <Container>
      <Box textAlign="center" py={5} position="relative">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "150%",
                maxWidth: "1500px",
                margin: "0 auto",
                position: "relative",
                boxShadow:
                  "0 0 5px 2px rgba(0, 0, 0, 0.7), 0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2)",
                borderRadius: "25px",
                overflow: "hidden",
                border: "2px solid #d2b48c",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="/images/contacto.svg"
                alt="Contacto"
                style={{ width: "100%", height: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Playfair Display",
                  color: "#654828",
                  position: "absolute",
                  bottom: "50px",
                  right: "250px",
                }}
              >
                <Link
                  href="/faq"
                  color="inherit"
                  underline="always"
                  sx={{
                    "&:hover": {
                      color: "#305445",
                      textDecoration: "underline",
                    },
                  }}
                >
                  Preguntas Frecuentes (FAQ)
                </Link>
              </Typography>
              <Grid
                container
                justifyContent="center"
                spacing={1}
                sx={{
                  position: "absolute",
                  top: "10%",
                  left: "92%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                <Grid item>
                  <IconButton
                    color="inherit"
                    href="https://www.instagram.com/psicoarrazola?igsh=Y3l4NzI2cGRsMGx4"
                    sx={{
                      color: "#654828",
                      fontSize: "2rem",
                      "&:hover": {
                        color: "#128C7E",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color="inherit"
                    href="https://www.facebook.com"
                    sx={{
                      color: "#654828",
                      fontSize: "2rem",
                      "&:hover": {
                        color: "#128C7E",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    color="inherit"
                    href="https://www.linkedin.com/in/daniela-a-9b2845199/"
                    sx={{
                      color: "#654828",
                      fontSize: "2rem",
                      "&:hover": {
                        color: "#128C7E",
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                marginLeft: "-125px",
                marginTop: "15px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <WhatsAppContact />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;

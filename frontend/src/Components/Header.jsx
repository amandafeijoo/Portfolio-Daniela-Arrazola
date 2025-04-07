import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/playfair-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuToggle = (event) => {
    if (anchorEl) {
      handleMenuClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setIsSubMenuOpen(false);
  };

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  const handleNavigateHome = () => {
    handleMenuClose();
    navigate("/");
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleNavigateFullAcerca = () => {
    handleMenuClose();
    navigate("/full-acerca");
  };

  const handleNavigateContacto = () => {
    handleMenuClose();
    navigate("/contact");
  };

  const handleReservaClick = () => {
    navigate("/reserva");
  };

  const handleNavigateService1 = () => {
    handleMenuClose();
    navigate("/service1");
  };
  const handleNavigateService2 = () => {
    handleMenuClose();
    navigate("/service2");
  };
  const handleNavigateService3 = () => {
    handleMenuClose();
    navigate("/service3");
  };
  const handleNavigateService4 = () => {
    handleMenuClose();
    navigate("/service4");
  };
  const handleNavigateService5 = () => {
    handleMenuClose();
    navigate("/service5");
  };
  const handleNavigateService6 = () => {
    handleMenuClose();
    navigate("/service6");
  };
  const handleNavigateService7 = () => {
    handleMenuClose();
    navigate("/service7");
  };
  const handleNavigateService8 = () => {
    handleMenuClose();
    navigate("/service8");
  };
  const handleNavigateService9 = () => {
    handleMenuClose();
    navigate("/service9");
  };
  const handleNavigateService10 = () => {
    handleMenuClose();
    navigate("/service10");
  };
  const handleNavigateService11 = () => {
    handleMenuClose();
    navigate("/service11");
  };
  const handleNavigateService12 = () => {
    handleMenuClose();
    navigate("/service12");
  };
  const handleNavigateService13 = () => {
    handleMenuClose();
    navigate("/service13");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#557c70", // #557c70,#f5eedc,#4a6f5e
          zIndex: 20000,
          height: "100px",
          "@media (max-width: 600px)": {
            padding: "10px 10px",
            height: "80px",
          },
        }}
      >
        <Box
          sx={{
            position: "fixed",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 20000,
            "@media (max-width: 600px)": {
              right: "1px",
              gap: "5px",
            },
          }}
        >
          <IconButton
            sx={{
              color: " #f5eedc",
              "@media (max-width: 600px)": {
                fontSize: "1.2em",
              },
            }}
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </IconButton>
          <IconButton
            sx={{
              color: "#f5eedc",
              "@media (max-width: 600px)": {
                fontSize: "1.2em",
              },
            }}
            href="https://www.linkedin.com/in/daniela-a-9b2845199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </IconButton>
          <IconButton
            sx={{
              color: "#f5eedc",
              "@media (max-width: 600px)": {
                fontSize: "1.2em",
              },
            }}
            href="https://www.instagram.com/psicoarrazola?igsh=Y3l4NzI2cGRsMGx4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{
              position: "absolute",
              left: "20px",
              color: "#f5eedc",
              fontSize: "1.3em",
              "@media (max-width: 600px)": {
                left: "10px",
              },
            }}
          >
            <MenuIcon sx={{ fontSize: "1.7em" }} />
          </IconButton>
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              pointerEvents: "none", // Desactiva clics en el contenedor
            }}
          >
            <Box
              component="img"
              src="publicidad/images/logo.svg"
              alt="Logo Daniela"
              onClick={handleClick}
              sx={{
                display: "block",
                width: {
                  xs: "90px",
                  sm: "110px",
                  md: "130px",
                  lg: "150px",
                  xl: "180px",
                }, // 🔥 Ajuste dinámico según el dispositivo
                height: "auto",
                objectFit: "contain",
                pointerEvents: "auto", // ✅ Solo la imagen recibe los clics
                cursor: "pointer",
              }}
            />
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#f5eedc",
                backdropFilter: "blur(10px)",
                marginTop: "25px",
                border: "2px solid #d2b48c",
                boxShadow: "0 0 5px 2px rgba(0, 0, 0, 0.9)",
                borderRadius: "10px",
                width: isSubMenuOpen ? "700px" : "450px",
                height: isSubMenuOpen ? "auto" : "520px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                "@media (max-width: 600px)": {
                  width: isSubMenuOpen ? "90%" : "80%",
                  padding: "10px",
                },
              },
            }}
          >
            <MenuItem
              onClick={handleNavigateHome}
              sx={{
                fontSize: "1.5em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
                "@media (max-width: 600px)": {
                  fontSize: "1.2em",
                },
              }}
            >
              Inicio
            </MenuItem>
            <MenuItem
              onClick={handleNavigateFullAcerca}
              sx={{
                fontSize: "1.5em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
                "@media (max-width: 600px)": {
                  fontSize: "1.2em",
                },
              }}
            >
              Acerca de
            </MenuItem>
            <MenuItem
              onClick={handleSubMenuToggle}
              sx={{
                fontSize: "1.5em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
                "@media (max-width: 600px)": {
                  fontSize: "1.2em",
                },
              }}
            >
              Servicios
            </MenuItem>
            {isSubMenuOpen && (
              <>
                <MenuItem
                  onClick={handleNavigateService1}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Ansiedad y Depresión
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService2}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Regulación emocional
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService3}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Autoestima y Conocimiento Personal
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService4}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Duelo y Cambios
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService5}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Conflictos interpersonales
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService6}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Habilidades sociales
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService7}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Crianza
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService8}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Productividad y gestión del tiempo
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService9}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Crecimiento personal y hábitos saludables
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService10}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Fobias
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService11}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Trastorno Obsesivo Compulsivo
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService12}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Trastornos del Neurodesarrollo
                </MenuItem>
                <MenuItem
                  onClick={handleNavigateService13}
                  sx={{
                    fontSize: "1em",
                    fontFamily: "Playfair Display",
                    color: "#8b6f5a",
                    "@media (max-width: 600px)": {
                      fontSize: "0.8em",
                    },
                  }}
                >
                  Trastornos de la conducta alimentaria
                </MenuItem>
              </>
            )}
            <MenuItem
              onClick={handleNavigateContacto}
              sx={{
                fontSize: "1.5em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
                "@media (max-width: 600px)": {
                  fontSize: "1.2em",
                },
              }}
            >
              Contacto
            </MenuItem>
            <MenuItem
              onClick={handleReservaClick}
              sx={{
                fontSize: "1.5em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
                "@media (max-width: 600px)": {
                  fontSize: "1.2em",
                },
              }}
            >
              Reserva
            </MenuItem>
            <Divider />
            <Box display="flex" justifyContent="center" mt={1} mb={1}>
              <IconButton
                color="inherit"
                href="https://www.facebook.com"
                sx={{
                  color: "#305445",
                  "&:hover": {
                    color: "#4b3f2f",
                  },
                }}
              >
                <FaFacebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.instagram.com/psicoarrazola?igsh=Y3l4NzI2cGRsMGx4"
                sx={{
                  color: "#305445",
                  "&:hover": {
                    color: "#4b3f2f",
                  },
                }}
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://www.linkedin.com/in/daniela-a-9b2845199/"
                sx={{
                  color: "#305445",
                  "&:hover": {
                    color: "#4b3f2f",
                  },
                }}
              >
                <FaLinkedin />
              </IconButton>
            </Box>
            <Divider />
            <Box textAlign="center" mt={3}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1em",
                  fontFamily: "Playfair Display",
                  color: "#305445",
                  marginLeft: "27px",
                }}
              >
                danielaarrazolabenitez@gmail.com
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1em",
                  marginLeft: "87px",
                  fontFamily: "Playfair Display",
                  color: "#305445",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaWhatsapp style={{ marginRight: "8px" }} />
                +47 98315132
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8em",
                  marginTop: "40px",
                  fontFamily: "Playfair Display",
                  color: "#305445",
                }}
              >
                © 2025 Daniela Arrázola
              </Typography>
            </Box>
          </Menu>
        </Box>
        <Box
          sx={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 20000,
            cursor: "pointer", // Hace que todo el área sea clickeable
            "@media (max-width: 600px)": {
              right: "10px",
              gap: "5px",
            },
          }}
          onClick={handleLoginClick} // Hace clic en toda la caja
        >
          {/* Ícono de administrador */}
          <FontAwesomeIcon
            icon={faUserShield}
            size="lg"
            style={{ color: "#f5eedc" }}
          />

          {/* Texto "Login" */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Playfair Display",
              color: "#f5eedc",
              "@media (max-width: 600px)": {
                fontSize: "0.9em",
              },
            }}
          >
            {/* Login */}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Header;

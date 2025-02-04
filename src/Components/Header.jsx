import React, { useState } from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/playfair-display";

const TopHeader = styled.div`
  display: flex;
  padding: 12px 0;
  height: 45px;
  margin-top: 0px;
  justify-content: center;
  align-items: center;
  background-color: #a1ad7f;
  color: white;
  padding: 5px 20px;
  font-size: 0.9em;
  color: #f5eedc;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

const BottomHeader = styled.div`
  display: flex;
  height: 90px;
  justify-content: space-between;
  align-items: center;
  background-color: #557c70;
  color: white;
  padding: 10px 20px;
  font-size: 1em;

  @media (max-width: 768px) {
    flex-direction: row;
    height: auto;
    padding: 10px;
  }

  @media (max-width: 430px) {
    padding: 10px 5px;
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const CenterButton = styled.div`
  margin: auto;

  @media (max-width: 768px) {
    margin: 10px 0;
    display: flex; /* Add flex display */
    align-items: center; /* Center items vertically */
  }
`;

const Button = styled.button`
  background-color: rgba(48, 84, 69, 0.5);
  font-family: "Playfair Display", serif;
  color: #f5eedc;
  border: 2px solid #4a6f5e;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.4);
  padding: 17px 20px;
  font-size: 1.1em;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: rgba(245, 238, 220, 0.5);
    color: #305445;
  }

  & svg {
    color: white;
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 1em;
    margin: 0;
    margin-left: 85px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5em;

  a {
    color: #f5eedc;
    transition: color 0.3s;

    &:hover {
      color: #305445;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
    gap: 10px;
  }
`;
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TopHeader>
        <SocialIcons>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </SocialIcons>
      </TopHeader>
      <BottomHeader>
        <CenterButton>
          <Button>RESERVAR MI CONSULTA</Button>
        </CenterButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{
            marginLeft: "-10px", 
          }}
        >
          <MenuIcon
            sx={{
              fontSize: "1.7em", 
              color: "#f5f5dc", 
            }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              backgroundColor: "rgba(210, 180, 140, 0.9)",       
              backdropFilter: 'blur(10px)',
              border: "2px solid #6f4e37",
              borderRadius: "10px",
              width: "350px",
              height: "400px",
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: "1.5em",
              fontFamily: "Playfair Display",
              color: "#4b3f2f",
            }}
          >
            Inicio
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: "1.5em",
              fontFamily: "Playfair Display",
              color: "#4b3f2f",
            }}
          >
            Acerca
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: "1.5em",
              fontFamily: "Playfair Display",
              color: "#4b3f2f",
            }}
          >
            Servicios
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            sx={{
              fontSize: "1.5em",
              fontFamily: "Playfair Display",
              color: "#4b3f2f",
            }}
          >
            Contacto
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
              href="https://www.instagram.com"
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
              href="https://www.linkedin.com"
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
          <Box textAlign="center" mt={1}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
              }}
            >
              arrazoladanii@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
              }}
            >
              +34620664428
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.1em",
                fontFamily: "Playfair Display",
                color: "#4b3f2f",
              }}
            >
              © 2025 Daniela Arrazola
            </Typography>
          </Box>
        </Menu>
      </BottomHeader>
    </>
  );
};

export default Header;

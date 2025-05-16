import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { img } from "../../utils/imagePath";
import SocialLinks from "./SocialLinks";
import { mainLinks, servicesLinks } from "./navConfig";

export default function MobileMenu({ handlers }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subOpen, setSubOpen] = useState(false);

  // Toggle main menu
  const toggleMenu = (e) => {
    setAnchorEl(prev => (prev ? null : e.currentTarget));
    if (anchorEl) setSubOpen(false);
  };
  const closeMenu = () => {
    setAnchorEl(null);
    setSubOpen(false);
  };

  // Toggle “Servicios” submenu
  const toggleSubMenu = () => setSubOpen(prev => !prev);

  return (
    <>
      {/* ─── Hamburger button (mobile only) ─── */}
      <IconButton
        aria-label="menu"
        onClick={toggleMenu}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          color: "#f5eedc",
          zIndex: 20002,              
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* ─── Centered logo (mobile only) ─── */}
      <Box
        component="img"
        src={img("logo.svg")}
        alt="Logo Daniela"
        onClick={handlers.handleNavigateHome}
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          width: { xs: 87, sm: 90, md: 130 },
          zIndex: 20002,             
        }}
      />

      {/* ─── The dropdown drawer ─── */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}

        // ensure the popover itself sits above reserva-bar
        sx={{ zIndex: 20001 }}

        // position it right below the header + reserva bar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}

        PaperProps={{
          sx: {
            mt: 1,                    
            backgroundColor: "#f5eedc",
            backdropFilter: "blur(10px)",
            border: "2px solid #d2b48c",
            borderRadius: "10px",
            width: "80%",
            maxWidth: 450,
            px: 2,
            py: 1,
            zIndex: 20001,            
          },
        }}
      >
        {/* Primary links */}
        {mainLinks.map(({ label, handler }) => (
          <MenuItem
            key={label}
            onClick={() => {
              handlers[handler]();
              closeMenu();
            }}
            sx={{ fontFamily: "Playfair Display", fontSize: "1.2em" }}
          >
            {label}
          </MenuItem>
        ))}

        {/* “Servicios” submenu toggle */}
        <MenuItem
          onClick={toggleSubMenu}
          sx={{ fontFamily: "Playfair Display", fontSize: "1.2em" }}
        >
          Servicios
        </MenuItem>
        {subOpen &&
          servicesLinks.map(({ label, handler }) => (
            <MenuItem
              key={label}
              onClick={() => {
                handlers[handler]();
                closeMenu();
              }}
              sx={{
                fontFamily: "Playfair Display",
                fontSize: "1em",
                pl: 4,
                color: "#8b6f5a",
              }}
            >
              {label}
            </MenuItem>
          ))}

        <Divider sx={{ my: 1 }} />

        {/* Social, email, whatsapp */}
        <SocialLinks />
      </Menu>
    </>
  );
}

MobileMenu.propTypes = {
  handlers: PropTypes.shape({
    handleNavigateHome:         PropTypes.func.isRequired,
    handleNavigateFullAcerca:   PropTypes.func.isRequired,
    handleNavigateContacto:     PropTypes.func.isRequired,
    handleReservaClick:         PropTypes.func.isRequired,
    // …your service navigation handlers…
  }).isRequired,
};


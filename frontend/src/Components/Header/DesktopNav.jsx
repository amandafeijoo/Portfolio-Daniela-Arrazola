// src/components/Header/DesktopNav.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { mainLinks, servicesLinks } from "./navConfig";

export default function DesktopNav({ handlers }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openServices = (e) => setAnchorEl(e.currentTarget);
  const closeServices = () => setAnchorEl(null);

  const navBtnSx = {
    color: "inherit",
    mx: 2,
    textTransform: "none",
    fontSize: { xs: "0.9rem", md: "0,5rem" },
    "&:hover": {
      color: "rgb(247, 236, 220)",
      backgroundColor: "rgba(255,255,255,0.15)",
    },
  };

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        top: "100px",
        left: 0,
        width: "100%",
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        color: "rgb(52, 75, 68)",
        bgcolor: "rgb(146, 162, 149)",
        height: "60px",
        zIndex: 1999,
      }}
    >
      {mainLinks.map(({ label, handler }) => (
        <Button key={label} sx={navBtnSx} onClick={handlers[handler]}>
          {label.toUpperCase()}
        </Button>
      ))}

      {/* Dropdown Servicios */}
      <Button
        sx={navBtnSx}
        endIcon={<ArrowDropDownIcon />}
        onClick={openServices}
      >
        SERVICIOS
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeServices}
        MenuListProps={{ onMouseLeave: closeServices }}
        PaperProps={{
          sx: {
            marginTop: "12px",
            backgroundColor: "#f5f0e5", // Beige claro
            border: "2px solid #c2a97c",
            borderRadius: "10px",
            boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
            padding: "5px 0",
          },
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {servicesLinks.map(({ label, handler }) => (
          <MenuItem
            key={label}
            onClick={() => {
              handlers[handler]();
              closeServices();
            }}
            sx={{
              fontFamily: "Playfair Display",
              fontSize: "1rem",
              padding: "10px 20px",
              color: "#4b3f2f",
              "&:hover": {
                backgroundColor: "#e8ddce",
              },
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>

      {/* Reserva */}
      <Button
        variant="outlined"
        onClick={handlers.handleReservaClick}
        sx={{
          ...navBtnSx,
          borderColor: "#f5eedc",
          color: "#f5eedc",
          "&:hover": { backgroundColor: "rgba(213,195,151,0.2)" },
        }}
      >
        RESERVA
      </Button>
    </Box>
  );
}

DesktopNav.propTypes = {
  handlers: PropTypes.shape({
    handleNavigateHome: PropTypes.func.isRequired,
    handleNavigateFullAcerca: PropTypes.func.isRequired,
    handleNavigateContacto: PropTypes.func.isRequired,
    handleReservaClick: PropTypes.func.isRequired,
    handleNavigateService1: PropTypes.func.isRequired,
    handleNavigateService2: PropTypes.func.isRequired,
    handleNavigateService3: PropTypes.func.isRequired,
    handleNavigateService4: PropTypes.func.isRequired,
    handleNavigateService5: PropTypes.func.isRequired,
    handleNavigateService6: PropTypes.func.isRequired,
    handleNavigateService7: PropTypes.func.isRequired,
    handleNavigateService8: PropTypes.func.isRequired,
    handleNavigateService9: PropTypes.func.isRequired,
    handleNavigateService10: PropTypes.func.isRequired,
    handleNavigateService11: PropTypes.func.isRequired,
    handleNavigateService12: PropTypes.func.isRequired,
    handleNavigateService13: PropTypes.func.isRequired,
  }).isRequired,
};

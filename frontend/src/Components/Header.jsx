import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./Header/MobileMenu";
import DesktopNav from "./Header/DesktopNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { img } from "../utils/imagePath";

export default function Header() {
  const navigate = useNavigate();
  const handlers = {
    handleNavigateHome: () => navigate("/"),
    handleNavigateFullAcerca: () => navigate("/full-acerca"),
    handleNavigateContacto: () => navigate("/contact"),
    handleReservaClick: () => navigate("/reserva"),
    handleNavigateService1: () => navigate("/service1"),
    handleNavigateService2: () => navigate("/service2"),
    handleNavigateService3: () => navigate("/service3"),
    handleNavigateService4: () => navigate("/service4"),
    handleNavigateService5: () => navigate("/service5"),
    handleNavigateService6: () => navigate("/service6"),
    handleNavigateService7: () => navigate("/service7"),
    handleNavigateService8: () => navigate("/service8"),
    handleNavigateService9: () => navigate("/service9"),
    handleNavigateService10: () => navigate("/service10"),
    handleNavigateService11: () => navigate("/service11"),
    handleNavigateService12: () => navigate("/service12"),
    handleNavigateService13: () => navigate("/service13"),
    handleLoginClick: () => navigate("/login"),
  };

  return (
    <>
      {/* ─── Top Bar (fija) ─── */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          bgcolor: "#557c70",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: { xs: 2, sm: 3 },
          zIndex: 20000,
          "@media (max-width:600px)": { height: "80px" },
        }}
      >
        {/* Mobile hamburger (md‑only handled in MobileMenu) */}
        <MobileMenu handlers={handlers} />

        {/* Logo centrado */}
        {/* Logo centrado solo en escritorio */}
        <Box
          component="img"
          src={img("logo.svg")}
          alt="Logo Daniela"
          onClick={handlers.handleNavigateHome}
          sx={{
            position: "absolute",
            top: 10, 
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer",
            display: { xs: "none", md: "block" }, // solo en md+
            width: { md: 130, lg: 150, xl: 180 },
          }}
        />

        {/* Icono de administrador */}
        <IconButton
          onClick={handlers.handleLoginClick}
          sx={{
            color: "#f5eedc",
            fontSize: "1.3em",
            ml: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          <FontAwesomeIcon icon={faUserShield} />
        </IconButton>
      </Box>

      {/* ─── Desktop navigation (solo md+) ─── */}
      <DesktopNav handlers={handlers} />

      {/* ─── Empuja el contenido para no quedar bajo header + nav ─── */}
      <Box sx={{ mt: { xs: "-80px", md: "10px" } }} />
    </>
  );
}

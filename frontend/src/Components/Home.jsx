import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "@fontsource/playfair-display";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateReservar = () => {
    navigate("/reserva");
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        "@media (max-width: 600px)": {
          height: "35vh",
          top: "-10",
        },
      }}
    >
      <Box
  component="video"
  poster="/images/poster.jpg"
  preload="metadata"
  playsInline
  autoPlay
  muted
  loop
  sx={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
    "@media (max-width: 600px)": {
      height: "120%",
      width: "100%",
      objectFit: "contain",
      top: "-10%",
    },
  }}
>
 <source
    src="https://res.cloudinary.com/dmz3r3lb3/video/upload/v1743869669/home1_oyzcno.mp4"
    type="video/mp4"
  />  Your browser does not support the video tag.
</Box>

      <Box
        sx={{
          position: "absolute",
          top: "92%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          "@media (max-width: 600px)": {
            top: "80%",
          },
        }}
      >
        {/* Flecha animada con framer-motion */}
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "white",
              mt: 0,
              "@media (max-width: 600px)": {
                fontSize: "0.8rem",
              },
            }}
          >
            ↓
          </Typography>
        </motion.div>
        <Button
          variant="text"
          sx={{
            color: "white",
            fontSize: "1.2rem",
            fontWeight: "500",
            textTransform: "none",
            fontFamily: "Playfair Display",
            "@media (max-width: 600px)": {
              fontSize: "0.5rem",
              marginTop: "2px",
            },
          }}
          onClick={handleNavigateReservar}
        >
          Reserva aquí con un click!
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

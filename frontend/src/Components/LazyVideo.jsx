import { useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

const LazyVideo = ({ src, poster }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "450px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "10px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
        border: "2px solid #d2b48c",
        "@media (max-width: 768px)": {
          maxWidth: "100%",
        },
      }}
    >
      <Box
        component="video"
        poster={poster}
        preload="none"
        playsInline
        autoPlay
        muted
        loop
        onCanPlay={() => setVideoLoaded(true)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <source src={src} type="video/mp4" />
      </Box>
    </Box>
  );
};

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default LazyVideo;



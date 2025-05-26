import { useEffect, useRef } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/playfair-display";

// Contenedor principal: títulos y scroll
const StyledContainer = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  background-color: #f5eedc;
  border: 6px solid #d2b48c;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin: 20px auto;
  max-width: 1300px;
  position: relative;
  text-align: center;
  min-height: 620px;
  /* —— aquí sube todo el contenedor —— */
  top: 9px;
  margin-top: 0px;

  @media (max-width: 960px) {
    padding: 25px;
    min-height: 550px;
    top: -40px;
  }
  @media (max-width: 600px) {
    padding: 20px;
    margin: 0 auto;
    max-width: 95%;
    margin-bottom: 0;
    min-height: 520px;
    top: 8px;
  }
`;

const ScrollContainer = styled(Box)`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  touch-action: pan-x;

  &.no-momentum {
    -webkit-overflow-scrolling: auto;
  }
  &.with-momentum {
    -webkit-overflow-scrolling: touch;
  }

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const serviceImages = [
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704694/2_lzz3ja.png",
    path: "/service1",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704694/3_glsfrp.png",
    path: "/service2",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704692/4_c9hqpk.png",
    path: "/service3",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704695/1_qguckr.png",
    path: "/service4",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704693/6_z4mmba.png",
    path: "/service5",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704693/7_km6zbh.png",
    path: "/service6",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704692/5_x5qbsk.png",
    path: "/service7",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1747144429/8_yzpmul.png",
    path: "/service8",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1747144429/9_wodpjc.png",
    path: "/service9",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1747144430/10_iqbvm4.png",
    path: "/service10",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704691/11_rilchd.png",
    path: "/service11",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1747651883/ICONOS_SERVICIOS_mn3a9q.png",
    path: "/service12",
  },
  {
    src: "https://res.cloudinary.com/dhikp5azp/image/upload/f_auto,q_auto,w_300/v1746704691/13_u8jng9.png",
    path: "/service13",
  },
];

const desktopSizes = [
  { width: "180px", height: "260px" },
  { width: "250px", height: "350px" },
];

const mobileSizes = [
  { width: "160px", height: "200px" },
  { width: "180px", height: "220px" },
];
const InfiniteScrollGallery = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const carouselRef = useRef(null);
  const isInteracting = useRef(false);
  const scrollTimeout = useRef(null);

  const handleInteractionStart = () => {
    isInteracting.current = true;
    clearTimeout(scrollTimeout.current);
  };

  const handleInteractionEnd = () => {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isInteracting.current = false;
    }, 100);
  };

  useEffect(() => {
    let rafId;
    // velocidad en móvil
    const speed = isMobile ? 1 : 1.2;

    const step = () => {
      const el = carouselRef.current;
      if (el && !isInteracting.current) {
        el.scrollLeft += speed;
        // reinicio al llegar a la mitad
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(scrollTimeout.current);
    };
  }, [isMobile]);

  // Scroll con rueda (solo en desktop/tablet)
  const handleWheel = (e) => {
    if (!isMobile && !isTablet && carouselRef.current) {
      e.preventDefault();
      carouselRef.current.scrollLeft += e.deltaY;
    }
  };
  const handleImageClick = (path) => navigate(path);

  return (
    <StyledContainer>
      {/* Títulos fijos */}
      <Typography
        variant="h4"
        sx={{
          color: "#4b3f2f",
          fontFamily: "Playfair Display",
          fontWeight: "bold",
          mb: 1,
          mt: 6,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Servicios
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: "#654828",
          fontFamily: "Playfair Display",
          fontStyle: "italic",
          mb: 5,
          fontSize: { xs: "0.85rem", md: "1.1rem" },
        }}
      >
        Haz clic en un servicio y conoce cómo puedo ayudarte
      </Typography>

      <ScrollContainer
        ref={carouselRef}
        onWheel={handleWheel}
        onTouchStart={handleInteractionStart}
        onTouchMove={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
        onTouchCancel={handleInteractionEnd}
        onScroll={handleInteractionStart && handleInteractionEnd}
        className={isMobile ? "no-momentum" : "with-momentum"}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            alignItems: "flex-start",
          }}
        >
          {serviceImages.concat(serviceImages).map((img, idx) => {
            const size = isMobile
              ? // alterna entre los dos tamaños definidos para móvil
                mobileSizes[idx % mobileSizes.length]
              : isTablet
              ? { width: "160px", height: "180px" }
              : desktopSizes[idx % desktopSizes.length];
            const base = parseInt(size.width, 10);
            const factor = isTablet ? 1.5 : 2;
            const newWidth = Math.round(base * factor);
            const srcHighRes = img.src
              .replace(
                "/upload/",
                `/upload/e_trim,fl_no_overflow,c_scale,w_${newWidth}/`
              )
              .replace(/w_300,?/, "");

            return (
              <Box
                key={idx}
                onClick={() => handleImageClick(img.path)}
                sx={{
                  flex: "0 0 auto",
                  width: size.width,
                  height: size.height,
                  mx: 1,
                  cursor: "pointer",
                  overflow: "hidden",
                  border: "4px solid #d2b48c",
                  borderRadius: "8px",
                  boxShadow: "0 6px 10px rgba(0,0,0,0.1)",
                }}
              >
                <Box
                  component="img"
                  src={srcHighRes}
                  alt=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </ScrollContainer>
    </StyledContainer>
  );
};

export default InfiniteScrollGallery;

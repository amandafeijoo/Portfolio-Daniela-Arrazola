import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -16px; // Ajusta el margen superior según sea necesario
`;

const Video = styled.video`
  width: 70%; // Ajusta el ancho del video según sea necesario
  border-radius: 15px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 2s ease-out, transform 2s ease-out;
  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${slideUp} 2s ease-out;
  }
`;

const Terapia = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <VideoContainer>
      <Video
        ref={videoRef}
        className={isVisible ? 'visible' : ''}
        autoPlay
        loop
        muted
      >
        <source src="/images/terapia.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default Terapia;
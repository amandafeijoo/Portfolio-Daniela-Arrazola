import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  height: 700px;
  width: 50%;
  border: 2px solid #d2b48c;
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 60px;
  margin-top: 60px;
`;

const Video = styled.video`
  width: 90%;
  height: 100%;
  object-fit: contain;
  border-radius: 25px;
  background-color: #f5f5dc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 25px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const Precios = () => {
  return (
    <VideoContainer>
      <Video autoPlay loop muted playsInline>
        <source src="/images/precios.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};

export default Precios;

import React from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  height: 750px;
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  margin-bottom: 60px;
  margin-top: 60px;
  border-radius: 15px;
  background-color: rgba(34, 139, 34, 0.3);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 3px solid #d2b48c;

  @media (max-width: 1024px) {
    /* iPad Pro */
    width: 80%;
    height: 600px;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    width: 80%;
    height: 600px;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    width: 90%;
    height: 500px;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    width: 80%;
    height: 370px;
    margin-top: 20px;
    margin-bottom: 80px;
  }
`;

const Video = styled.video`
  width: 70%;
  height: 90%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 3px solid #d2b48c;
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

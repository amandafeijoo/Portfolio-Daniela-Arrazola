import "@fontsource/playfair-display";
import React from "react";
import styled from "styled-components";

const SlideShowContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  border-radius: 15px;
  height: 700px;
  background-color: rgba(34, 139, 34, 0.2);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 3px solid rgba(48, 84, 69, 0.5);

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
  width: 90%;
  height: 90%;
  border-radius: 20px;
  object-fit: cover;
  display: block;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 3px solid #d2b48c;

  @media (max-width: 1024px) {
    /* iPad Pro */
    border-radius: 15px;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    border-radius: 10px;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    border-radius: 5px;
  }
`;

const Button = styled.button`
  position: absolute;
  font-family: "Playfair Display", serif;
  bottom: 75px;
  right: 110px;
  background-color: rgba(48, 84, 69, 0.8);
  color: #f5eedc;
  border: none;
  padding: 17px 19px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5eedc;
    color: #305445;
    border: 2px solid #305445;
  }

  @media (max-width: 1024px) {
    /* iPad Pro */
    bottom: 60px;
    right: 250px;
    padding: 12px 16px;
    font-size: 0.9em;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    bottom: 60px;
    right: 250px;
    padding: 12px 16px;
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    bottom: 50px;
    right: 200px;
    padding: 10px 14px;
    font-size: 0.8em;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    bottom: 20px;
    right: 120px;
    padding: 8px 12px;
    font-size: 0.7em;
  }
`;

const Temas = () => {
  return (
    <SlideShowContainer>
      <Video autoPlay loop muted playsInline>
        <source src="/images/temas.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Button onClick={() => alert("Ver más")}>Ver más</Button>
    </SlideShowContainer>
  );
};

export default Temas;

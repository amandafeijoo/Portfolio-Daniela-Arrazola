import "@fontsource/playfair-display";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const images = [
  "/images/1.svg",
  "/images/2.svg",
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
  "/images/12.svg",
  "/images/13.svg",
  "/images/14.svg",
];

const SlideShowContainer = styled.div`
  width: 45%;
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
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  height: 700px;
  border: 3px solid #d2b48c;
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );

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

const Slide = styled.img`
  width: 75%;
  height: 75%;
  border-radius: 15px;
  left: 50%;
  margin-top: 50px;
  margin-bottom: 50px;
  transform: translateX(-50%);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  height: 700px;
  border: 2px solid #d2b48c;
  position: absolute;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  &.active {
    opacity: 1;
  }

  @media (max-width: 1024px) {
    /* iPad Pro */
    width: 70%;
    height: 80%;
  }

  @media (max-width: 834px) {
    /* iPad Air */
    width: 70%;
    height: 80%;
  }

  @media (max-width: 768px) {
    /* iPad Mini */
    width: 80%;
    height: 70%;
  }

  @media (max-width: 430px) {
    /* iPhone 15, iPhone 15 Pro */
    width: 90%;
    height: 60%;
  }
`;

const Button = styled.button`
  position: absolute;
  font-family: "Playfair Display", serif;
  bottom: 80px;
  right: 310px;
  background-color: rgba(48, 84, 69, 0.7);
  color: #f5eedc;
  border: none;
  padding: 15px 19px;
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SlideShowContainer>
      {images.map((src, index) => (
        <Slide
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
      <Button
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        Ver más
      </Button>
    </SlideShowContainer>
  );
};

export default Temas;

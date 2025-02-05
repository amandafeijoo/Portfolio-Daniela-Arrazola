import React from "react";
import styled from "styled-components";

const ContenedorPadre = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const ContenedorPrincipal1 = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
`;

const ContenedorPrincipal2 = styled.div`
  width: 45%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
`;

const ContenedorImagen = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  height: 500px;
`;

const Imagen = styled.img`
  width: 110%;
  height: 110%;
  object-fit: contain;
  border-radius: 25px;
  background-color: #f5f5dc;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
`;

const ContenedorTexto = styled.div`
  width: 100%;
  margin-top: 170px;
  margin-right: 20px;
  padding: 20px;
  border: 2px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: #f5eedc;
  font-family: "Playfair Display", serif;
  color: #000;
  border-radius: 15px;
`;

const ImagenDaniela = () => {
  return (
    <ContenedorPadre>
      <ContenedorPrincipal1>
        <ContenedorImagen>
          <Imagen src="/images/danielaintro.svg" alt="Daniela" />
        </ContenedorImagen>
      </ContenedorPrincipal1>
      <ContenedorPrincipal2>
        <ContenedorTexto>
          Hola, soy Daniela, y si estás aquí, es posible que estés buscando una
          forma de sentirte mejor, de entenderte más o de superar un momento
          difícil. Déjame decirte que no estás solo. Como psicóloga, mi misión
          es crear un espacio seguro y sin juicios donde podamos trabajar
          juntos.
        </ContenedorTexto>
      </ContenedorPrincipal2>
    </ContenedorPadre>
  );
};

export default ImagenDaniela;

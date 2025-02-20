import PropTypes from "prop-types";
import { ServicesContext } from "./ServicesContext";
import servicesData from "./ServiceData";

// Definimos el Provider
export const ServicesProvider = ({ children }) => {
  return (
    <ServicesContext.Provider value={servicesData}>
      {children}
    </ServicesContext.Provider>
  );
};

// 📌 Agrega validación de PropTypes
ServicesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

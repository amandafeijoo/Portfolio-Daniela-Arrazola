import { useContext } from "react";
import { ServicesContext } from "./ServicesContext";

// Hook personalizado para acceder a los servicios
const useServices = () => {
  return useContext(ServicesContext);
};

export default useServices;

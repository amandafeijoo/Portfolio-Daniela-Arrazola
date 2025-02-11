import React from "react";
import { useEffect } from "react";
import Service1 from "./Service1";
import Service2 from "./Service2";
import Service3 from "./Service3";
import Service4 from "./Service4";
import Service5 from "./Service5";
import Service6 from "./Service6";
import Service7 from "./Service7";
import Service8 from "./Service8";
import Service9 from "./Service9";
import Service10 from "./Service10";
import Service11 from "./Service11";
import Service12 from "./Service12";
import Service13 from "./Service13";


const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
      <Service7 />
      <Service8 />
      <Service9 />
      <Service10 />
      <Service11 />
      <Service12 />
      <Service13 />
    </>
  );
};

export default Services;

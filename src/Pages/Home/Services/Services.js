import React from "react";
import "./Services.css";
import Service from "./Service/Service";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const { services } = useServices();
  return (
    <div className="px-2">
      <h1 className="text-center my-4 font-family">My Services</h1>
      <div className="w-100 d-flex gap-5 flex-lg-row flex-column align-items-stretch">
        {services.length > 0 &&
          services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
      </div>
    </div>
  );
};

export default Services;

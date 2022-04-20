import React, { useEffect, useState } from "react";
import "./Services.css";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
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

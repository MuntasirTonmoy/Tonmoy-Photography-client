import React from "react";
import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="container">
      <Banner></Banner>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
};

export default Home;

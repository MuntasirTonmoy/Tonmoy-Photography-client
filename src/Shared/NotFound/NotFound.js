import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="h100vh d-flex  justify-content-center align-items-center">
      <div>
        <h1 className="fs10rem gray text-center">404 :(</h1>
        <h1 className="gray text-center">Page Not Found.</h1>
      </div>
    </div>
  );
};

export default NotFound;

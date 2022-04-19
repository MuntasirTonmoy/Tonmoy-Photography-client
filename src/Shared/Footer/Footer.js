import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="fixed-bottom">
      <p className="m-0 text-center text-muted pt-2 pb-2">
        <small>
          Copyright © {year} Developer Tonmoy - All Rights Reserved.
        </small>
      </p>
    </footer>
  );
};

export default Footer;

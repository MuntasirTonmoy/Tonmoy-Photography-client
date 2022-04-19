import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="fixed-bottom">
      <p className="text-center text-muted pt-2 pb-2 m-0">
        <small>
          Copyright © {year} Developer Tonmoy - All Rights Reserved.
        </small>
      </p>
    </footer>
  );
};

export default Footer;

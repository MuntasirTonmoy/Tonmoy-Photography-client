import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="my-5 bg-light p-3 mx-2">
      <div className="mb-4 text-center">
        <h2 className="font-family">Subscribe to my newsletter</h2>
        <p>I will send amazing photography tips to improve your photography.</p>
      </div>
      <div className="input-group w-75 mx-auto mb-lg-3">
        <input
          type="text"
          className="border-left form-control py-lg-2"
          placeholder="Enter Email"
        />
        <div className="input-group-append">
          <button className="btn background text-white text-uppercase bg-gradient border-right py-lg-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

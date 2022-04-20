import React from "react";
import "./Banner.css";
import family from "../../../images/family.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-lg-5 mt-lg-5 row mb-lg-5 mx-lg-1">
        <div className="p-4 col-lg-6 order-2 order-lg-1 my-lg-auto p-0">
          <h1>Hi,</h1>
          <h1 className="fs-md-5">
            I am <span className="primary-color">Muntasir Tonmoy</span>
          </h1>
          <h5 className="gray  line-height">An Event photographer.</h5>
          <p className="fs2 line-height">
            I am an event photographer based in Dhaka, Bangladesh. My passion is
            to capture the amazing moments in an event to create timeless,
            beautiful images as memories. I am specializing event like birthday,
            wedding and family photography.
          </p>
          <button
            onClick={() => navigate("/aboutMe")}
            className="btn background text-white round text-uppercase semi-bold bg-gradient px-3 mt-2"
          >
            Contact Me
          </button>
        </div>
        <div className="pt-3 col-lg-6 pb-3 order-1 order-lg-2">
          <img src={family} className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

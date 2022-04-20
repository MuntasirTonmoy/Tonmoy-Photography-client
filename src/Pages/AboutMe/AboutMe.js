import React from "react";
import myPhoto from "../../images/me.png";

const AboutMe = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <img src={myPhoto} alt="" />
      </div>
      <div className="text-center px-lg-5">
        <h1>Muntasir Tonmoy</h1>
        <p>
          I want to be an web developer. I am learning it from Programming hero
          course by Jhankar Mahbub Sir. I try to practice everyday. Day by day I
          am learning slowly but surely. InshaAllah I can fullfill my goal by
          hardworking.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;

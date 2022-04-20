import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const { name, picture, comment, price } = service;
  return (
    <Card className="card w-100 mx-lg-3 my-lg-4">
      <Card.Img variant="top" height="300px" src={picture} />
      <Card.Body className="text-center px-lg-2 p-3">
        <Card.Title className="primary-color fs-4">{name}</Card.Title>

        <div>
          <p className="gray">{comment}</p>
          <h3 className="mb-3">${price}</h3>
        </div>

        <button
          onClick={() => navigate("/checkout")}
          className=" px-3 px-lg-3 mb-2 mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient"
        >
          Book now
        </button>
      </Card.Body>
    </Card>
  );
};

export default Service;

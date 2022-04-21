import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { BsCartCheckFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckOut = () => {
  const navigate = useNavigate();
  const { services } = useServices();
  const { id } = useParams();
  const service =
    services.length > 1 && services.find((element) => element?.id === id);
  const { name, picture, price, comment } = service;

  const notify = () => {
    toast.success("Thank you for booking.");
    setTimeout(() => {
      return navigate("/");
    }, 2500);
  };

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col-lg-4">
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
          />
          <Card>
            <Card.Img variant="top" src={picture} height="300px" />
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>
              <div>
                <p>{comment}</p>
                <h2>${price}</h2>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-8 bg-light">
          <h1 className="text-center font-family my-3">Order Summery</h1>
          <p className=" text-center">
            You have orderd{" "}
            <span className="semi-bold primary-color">{name}</span> package.
          </p>

          <button
            onClick={notify}
            className=" my-3 ms=5 px-3 px-lg-5 mb-2 mb-lg-0 btn  background text-white round text-uppercase bg-gradient"
          >
            Checkout <BsCartCheckFill className="ms-2"></BsCartCheckFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

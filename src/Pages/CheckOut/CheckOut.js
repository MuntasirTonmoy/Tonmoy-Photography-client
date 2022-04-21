import React from "react";
import { Card, Form } from "react-bootstrap";
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

  const notify = (event) => {
    event.preventDefault();
    toast.success("Thank you for booking.");
    setTimeout(() => {
      return navigate("/");
    }, 3000);
  };

  return (
    <div className="container my-lg-5">
      <div className="row">
        <div className="col-lg-4 col-12">
          <ToastContainer
            position="top-right"
            autoClose={2500}
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
        <div className="col-lg-8 col-11 bg-light py-3 py-lg-0  mt-3 mt-lg-0 mx-auto">
          <h1 className="text-center font-family my-3">Order Summery</h1>
          <p className=" text-center">
            You have orderd{" "}
            <span className="semi-bold primary-color">{name}</span> package.
            Enter your details to checkout.
          </p>
          <Form className="w-50 mx-auto" onSubmit={notify}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone no."
                required
              />
            </Form.Group>
            <div className="w-100">
              <button
                type="submit"
                className="w-100 my-3 px-lg-5 mb-2 mb-lg-0 btn  background text-white round text-uppercase bg-gradient"
              >
                Checkout <BsCartCheckFill className="ms-2"></BsCartCheckFill>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

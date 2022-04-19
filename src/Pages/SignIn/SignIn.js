import React, { useRef, useState } from "react";
import "./SignIn.css";
import { Form } from "react-bootstrap";

const SignIn = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    console.log(email, password);
  };
  return (
    <div className="container">
      <h2 className="w-50 mx-auto text-center mt-5 text-uppercase">Log in</h2>
      <Form className="w-50 mx-auto mt-4" onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <input
          type="submit"
          value="Log in"
          className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4 mt-3 mx-auto mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient"
        ></input>
      </Form>
      <div className="w-50 mx-auto d-flex justify-content-center align-items-center">
        <div className="line w-100"></div>
        <div className="mx-3 fs-6"> or </div>
        <div className="line w-100"></div>
      </div>
      <div className="w-50 mx-auto">
        <button className="w-100 mt-lg-4 px-5 px-lg-3 my-3 mx-auto my-lg-0 btn outline semi-bold round me-lg-4 text-uppercase bg-gradient">
          {" "}
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;

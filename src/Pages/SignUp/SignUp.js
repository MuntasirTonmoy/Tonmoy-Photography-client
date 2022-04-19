import React from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [signInWithGoogle, userViaGoogle, errorViaGoogle] =
    useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, userViaEmail, errorViaEmail] =
    useCreateUserWithEmailAndPassword(auth);

  if (errorViaGoogle) {
    console.log(errorViaGoogle);
  }

  if (userViaGoogle || userViaEmail) {
    console.log(userViaGoogle, userViaEmail);
  }

  const handleSignUp = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container">
      <div className="w-50 mx-auto text-center mt-5">
        <h2 className="text-uppercase">Sign up</h2>
      </div>
      <Form className="w-50 mx-auto mt-4" onSubmit={handleSignUp}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your name" />
        </Form.Group>

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
          value="SIGN UP"
          className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4 mt-3 mx-auto mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient"
        ></input>
      </Form>
      <p>
        Already have an account?{" "}
        <span className="semi-bold primary-color">Log in</span>
      </p>
      <div className="w-50 mx-auto d-flex justify-content-center align-items-center">
        <div className="line w-100"></div>
        <div className="mx-3 fs-6"> or </div>
        <div className="line w-100"></div>
      </div>
      <div className="w-50 mx-auto">
        <button
          onClick={() => signInWithGoogle()}
          className="w-100 mt-lg-4 px-5 px-lg-3 my-3 mx-auto my-lg-0 btn outline semi-bold round me-lg-4 text-uppercase bg-gradient"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;

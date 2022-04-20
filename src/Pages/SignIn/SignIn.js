import React, { useEffect } from "react";
import "./SignIn.css";
import { Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSignIn = (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    signInWithEmailAndPassword(email, password);
  };

  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  return (
    <div className="container">
      <h2 className="w-50 mx-auto text-center mt-5 text-uppercase">Sign in</h2>
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
          value="Sign in"
          className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4 mt-3 mx-auto mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient"
        ></input>
      </Form>
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
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;

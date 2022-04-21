import React, { useEffect } from "react";
import "./SignIn.css";
import { Form } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { async } from "@firebase/util";

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

  if (error || errorGoogle) {
    toast.error(error.message, {
      toastId: "error1",
    });
  }

  useEffect(() => {
    if (userGoogle) {
      navigate(from, { replace: true });
    }
  }, [userGoogle]);

  return (
    <div className="container">
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
      <h2 className="w-50 mx-auto text-center mt-5 text-uppercase">Sign in</h2>
      <Form className="w-50 mx-auto mt-4" onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p
          onClick={() => navigate("/passwordReset")}
          style={{ cursor: "pointer" }}
          className="semi-bold primary-color "
        >
          {" "}
          Forgot password?
        </p>

        <input
          type="submit"
          value="Sign in"
          className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4 mt-3 mx-auto mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient"
        ></input>
      </Form>
      <p className="w-50 mx-auto">
        Don't have an account?{" "}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/signUp")}
          className="semi-bold primary-color"
        >
          Sign up
        </span>
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
          <div className="d-flex align-items-center justify-content-center gap-lg-2 gap-2">
            <p className="m-0 pb-1">
              <FcGoogle></FcGoogle>
            </p>{" "}
            <p className="m-0">Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SignIn;

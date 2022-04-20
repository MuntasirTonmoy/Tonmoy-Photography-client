import React from "react";

const Blog = () => {
  return (
    <div className="container my-lg-5 my-3">
      <div className="my-lg-5">
        <h2>Difference between authorization and authentication?</h2>
        <p className="fs-5">
          Ans: Authentication verify the user's identity.It is done before
          authorization.It is necessary for all users. <br></br>Authorization
          determine what a user can access and can't access.It verify whether
          the access is allowed through security policies.It is necessary for
          some special users.
        </p>
      </div>
      <div className="my-lg-5">
        <h2>
          Why using firebase? What other options have to implement
          authentication?
        </h2>
        <p className="fs-5">
          Ans: I am using firebase for authentication. Firebase authentication
          is easy, simple and secure.Other options I can implement in firebase
          authentication are email varification , password reset, email address
          change, sms verification etc.
        </p>
      </div>
      <div className="my-lg-5">
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
        <p className="fs-5">
          Ans: Firebase provide other services like hosting, realtime database,
          database, storage etc.
        </p>
      </div>
    </div>
  );
};

export default Blog;

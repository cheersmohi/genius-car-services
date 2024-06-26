import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
   useSendPasswordResetEmail,
   useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
   const emailRef = useRef("");
   const passwordRef = useRef("");
   const navigate = useNavigate();
   const location = useLocation();
   let errorElement;

   let from = location.state?.from?.pathname || "/";

   const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);

   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

   if (user) {
      navigate(from, { replace: true });
   }

   if (error) {
      errorElement = <p className="text-danger"> Error:{error?.message}</p>;
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(email, password);
   };

   const navigateRegister = (event) => {
      navigate("/register");
   };

   const resetPassword = async () => {
      const email = emailRef.current.value;
      if (email) {
         await sendPasswordResetEmail(email);
         toast("sent email");
      } else {
         toast("please enter your email address");
      }
   };
   return (
      <div className="container w-50  mx-auto">
         <h2 className="text-center text-primary mt-3"> Please Log In</h2>
         <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               <Form.Label></Form.Label>
               <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  required
               />
               <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
               <Form.Label></Form.Label>
               <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  required
               />
            </Form.Group>

            <Button className="mb-2" variant="primary" type="Login">
               Login
            </Button>
         </Form>
         {errorElement}
         <p>
            New to Genius Car ?{" "}
            <Link
               to="/register"
               className="text-danger text-decoration-none"
               onClick={navigateRegister}
            >
               Please Register
            </Link>
         </p>
         <p>
            Forget Password ?{" "}
            <button
               className="btn btn-link text-danger text-decoration-none"
               onClick={resetPassword}
            >
               Reset Password
            </button>
         </p>

         <SocialLogin />
         <ToastContainer />
      </div>
   );
};

export default Login;

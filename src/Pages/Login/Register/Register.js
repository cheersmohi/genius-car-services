import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";
import {
   useCreateUserWithEmailAndPassword,
   useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
   const [agree, setAgree] = useState(false);
   const [createUserWithEmailAndPassword, user, loading, error] =
      useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
   const [updateProfile, updating, updateError] = useUpdateProfile(auth);
   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate("/login");
   };

   if (user) {
      console.log("user", user);
   }

   const handleRegister = async (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;

      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log("Update Profile");
      navigate("/home");
   };

   return (
      <div className="register-form">
         <h2>Please Register</h2>
         <form onSubmit={handleRegister}>
            <input type="text" name="name" id="" placeholder="Your Name" />

            <input
               type="email"
               name="email"
               id=""
               placeholder="Email"
               required
            />

            <input
               type="password"
               name="password"
               id=""
               placeholder="password"
               required
            />
            <input
               onClick={() => setAgree(!agree)}
               type="checkbox"
               name="terms"
               id="terms"
            />
            <label
               className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
               htmlFor="terms"
            >
               {" "}
               Accept Genius Cars Terms & Conditions{" "}
            </label>
            <input
               disabled={!agree}
               className="w-50 mx-auto mt-3  btn btn-primary"
               type="submit"
               value="Register"
            />
         </form>
         <p>
            Already have an Account?{" "}
            <Link
               to="/login"
               className="text-danger text-decoration-none"
               onClick={navigateLogin}
            >
               Please Log In
            </Link>
         </p>
         <SocialLogin />
      </div>
   );
};

export default Register;

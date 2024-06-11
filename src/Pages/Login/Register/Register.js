import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Register/Register.css";

const Register = () => {
   const navigate = useNavigate();

   const navigateLogin = () => {
      navigate("/login");
   };

   const handleRegister = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(name, email, password);
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
            <input type="submit" value="Register" />
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
      </div>
   );
};

export default Register;

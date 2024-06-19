import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
   useSignInWithGithub,
   useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   const [signInWithGithub, user1, loading1, error1] =
      useSignInWithGithub(auth);
   const navigate = useNavigate();
   let errorElement;
   if (error || error1) {
      errorElement = (
         <p className="text-danger">
            Error: {error?.message} {error1?.message}
         </p>
      );
   }

   if (user) {
      navigate("/home");
   }

   return (
      <div>
         <div className="d-flex align-items-center">
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            <p className="mt-2 px-2">or</p>
            <div style={{ height: "1px" }} className="bg-primary w-50"></div>
         </div>
         {errorElement}
         <div>
            <button
               onClick={() => signInWithGoogle()}
               className="btn btn-primary w-75 my-2"
            >
               {" "}
               <img style={{ width: "35px" }} src={google} alt="" />
               <span className="px-3">Google Sign In</span>
            </button>

            <button className="btn btn-primary w-75 my-2">
               {" "}
               <img style={{ width: "35px" }} src={facebook} alt="" />
               <span className="px-3">FaceBook Sign In</span>
            </button>

            <button
               onClick={() => signInWithGithub()}
               className="btn btn-primary w-75 my-2"
            >
               {" "}
               <img style={{ width: "35px" }} src={github} alt="" />
               <span className="px-3">GitHub Sign In</span>
            </button>
         </div>
      </div>
   );
};

export default SocialLogin;

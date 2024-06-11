import React from "react";
import depressed from "../../../images/404.jpeg";

const NotFound = () => {
   return (
      <div>
         <h2 className="text-primary text-center mt-5 mb-3">
            {" "}
            Mechanic is Depressed Now
         </h2>
         <img src={depressed} alt="" />
      </div>
   );
};

export default NotFound;

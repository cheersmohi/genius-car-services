import React from "react";
import expert1 from "../../../../src/images/experts/expert-1.jpg";
import expert2 from "../../../../src/images/experts/expert-2.jpg";
import expert3 from "../../../../src/images/experts/expert-3.jpg";
import expert4 from "../../../../src/images/experts/expert-4.jpg";
import expert5 from "../../../../src/images/experts/expert-5.jpg";
import expert6 from "../../../../src/images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
   { id: 1, name: "Micheal Lean", img: expert1 },
   { id: 2, name: "Brade Hogg", img: expert2 },
   { id: 3, name: "Frank Jin", img: expert3 },
   { id: 4, name: "George Sourgh", img: expert4 },
   { id: 5, name: "Tom Franklin", img: expert5 },
   { id: 6, name: "Mai", img: expert6 },
];

const Experts = () => {
   return (
      <div id="experts" className="container mt-5">
         <h1 className="text-primary text-center"> Our Experts</h1>
         <div className="row">
            {experts.map((expert) => (
               <Expert key={expert.id} expert={expert} />
            ))}
         </div>
      </div>
   );
};

export default Experts;

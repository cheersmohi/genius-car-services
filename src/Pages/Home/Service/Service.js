import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
   const navigate = useNavigate();
   const navigateToService = (id) => {
      navigate(`/service/${id}`);
   };
   const {_id, name, price, img, description } = service;
   return (
      <div className="service">
         <h2> Name: {name}</h2>
         <p> Price : {price}</p>
         <img className="w-100" src={img} alt="" />
         <p>
            <small>{description}</small>
         </p>
         <button
            onClick={() => navigateToService(_id)}
            className="btn btn-primary"
         >
            Book this service:{name}
         </button>
      </div>
   );
};

export default Service;

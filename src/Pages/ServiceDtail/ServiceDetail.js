import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({})

  useEffect( () => {
    const url = `http://localhost:4000/service/${serviceId}`
   console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))

  }, [])

  return (
    <div>
      <h1>You Are About To Book : {service.name}</h1>
      <div className="text-center">
        <Link to="/checkout">
          {" "}
          <button className="btn btn-primary">Proceed CheckOut</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  });
  return (
    <div>
      <PageTitle title="Details"></PageTitle>
      <h2>You are about to book: {service.name}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-warning">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

import React from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <PageTitle title="Details"></PageTitle>
      <h2>Welcome to detail: {serviceId}</h2>
      <div className="text-center">
        <Link to="/checkout">
          <button className="btn btn-warning">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;

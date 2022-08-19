import React from "react";
import { RiRefundFill } from "react-icons/ri";
import { RiCustomerService2Line } from "react-icons/ri";
import { ImTruck } from "react-icons/im";
import Link from "next/link";
import { urlFor } from "../lib/client";


const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="home_container">
      <div className="top_icons">
        <div className="truck_icon">
          <ImTruck></ImTruck>
          <span>Free delivery within Nakuru CBD</span>
        </div>
        <div className="refund_icon">
          <RiRefundFill></RiRefundFill>
          <span>100% refund policy</span>
        </div>
        <div className="customercare_icon">
          <RiCustomerService2Line></RiCustomerService2Line>
          <span>24hr support</span>
        </div>
      </div>
      <div className="banner">
        <img src={urlFor(heroBanner.image)} alt="banner" />
      </div>
    </div>
  );
};

export default HeroBanner;

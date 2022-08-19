import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Carsproducts = ({ carsproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> STICKERS</div>
      <div className="catalogue_subtitle">Cars/motorbike</div>
      <div className="catalogue_container">
        {carsproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const carsquery = '*[_type == "product" && subcategory=="Cars" ]';
  const carsproducts = await client.fetch(carsquery);

  return {
    props: {
      carsproducts,
    },
  };
};

export default Carsproducts;

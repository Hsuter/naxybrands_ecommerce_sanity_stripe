import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Tshirtproducts = ({ tshirtproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> CLOTHING</div>
      <div className="catalogue_subtitle">T-SHIRT</div>
      <div className="catalogue_container">
        {tshirtproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const tquery = '*[_type == "product" && subcategory=="Tshirt" ]';
  const tshirtproducts = await client.fetch(tquery);

  return {
    props: {
      tshirtproducts,
    },
  };
};

export default Tshirtproducts;

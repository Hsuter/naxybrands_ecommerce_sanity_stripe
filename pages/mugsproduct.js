import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Mugsproducts = ({ mugsproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> Hot Liquid</div>
      <div className="catalogue_subtitle">Mugs</div>
      <div className="catalogue_container">
        {hoodieproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const mugsquery = '*[_type == "product" && subcategory=="Mugs" ]';
  const mugsproducts = await client.fetch(mugsquery);

  return {
    props: {
      mugsproducts,
    },
  };
};

export default Mugsproducts;

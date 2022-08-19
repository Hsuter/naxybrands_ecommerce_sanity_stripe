import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Thermoproducts = ({ thermoproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> Hot Liquid</div>
      <div className="catalogue_subtitle">Thermoflaks</div>
      <div className="catalogue_container">
        {thermoproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const thermoquery = '*[_type == "product" && subcategory=="Thermos" ]';
  const thermoproducts = await client.fetch(thermoquery);

  return {
    props: {
      thermoproducts,
    },
  };
};

export default Thermoproducts;

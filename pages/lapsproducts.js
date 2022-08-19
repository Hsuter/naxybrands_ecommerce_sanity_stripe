import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Lapsproducts = ({ lapsproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> STICKERS</div>
      <div className="catalogue_subtitle">Laptop/phones</div>
      <div className="catalogue_container">
        {lapsproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const lapsquery = '*[_type == "product" && subcategory=="Laps" ]';
  const lapsproducts = await client.fetch(lapsquery);

  return {
    props: {
      lapsproducts,
    },
  };
};

export default Lapsproducts;

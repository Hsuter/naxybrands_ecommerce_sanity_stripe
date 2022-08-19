import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Hoodieproducts = ({ hoodieproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> CLOTHING</div>
      <div className="catalogue_subtitle">Hoodies</div>
      <div className="catalogue_container">
        {hoodieproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const hoodiequery = '*[_type == "product" && subcategory=="Hoodie" ]';
  const hoodieproducts = await client.fetch(hoodiequery);

  return {
    props: {
      hoodieproducts,
    },
  };
};

export default Hoodieproducts;

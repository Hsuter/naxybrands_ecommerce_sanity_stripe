import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Capsproducts = ({ capsproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> CLOTHING</div>
      <div className="catalogue_subtitle">Caps</div>
      <div className="catalogue_container">
        {capsproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const capsquery = '*[_type == "product" && subcategory=="Cap" ]';
  const capsproducts = await client.fetch(capsquery);

  return {
    props: {
      capsproducts,
    },
  };
};

export default Capsproducts;

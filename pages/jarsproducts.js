import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Jarsproducts = ({ jarsproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> HYDRATION</div>
      <div className="catalogue_subtitle">Jars</div>
      <div className="catalogue_container">
        {jarsproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const jarsquery = '*[_type == "product" && subcategory=="Jars" ]';
  const jarsproducts = await client.fetch(jarsquery);

  return {
    props: {
      jarsproducts,
    },
  };
};

export default Jarsproducts;

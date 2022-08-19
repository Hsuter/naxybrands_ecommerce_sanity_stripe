import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";

export const Waterbottleproducts = ({ waterbottleproducts }) => {
  return (
    <div className="all_catalogue">
      <div className="catalogue_title"> HYDRATION</div>
      <div className="catalogue_subtitle">Water bottles</div>
      <div className="catalogue_container">
        {waterbottleproducts?.map((product) => (
          <Hotsaleproduct key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const waterbottleproductsquery =
    '*[_type == "product" && subcategory=="Bottles" ]';
  const waterbottleproducts = await client.fetch(waterbottleproductsquery);

  return {
    props: {
      waterbottleproducts,
    },
  };
};

export default Waterbottleproducts;

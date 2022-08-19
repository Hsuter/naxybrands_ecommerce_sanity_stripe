import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Homeproduct = ({ product: { image, name, slug, price, category } }) => {
  return (
    <div className="homeproduct">
      <Link href={`/product/${slug.current}`}>
        <div className="homeproduct_card">
          <img src={urlFor(image && image[0])} className="homeproduct_image" />

          <p className="homeproduct_info ">
            <strong>{name}</strong>
          </p>
          <p className="homeproduct_price">
            <small>Kes</small> <strong>{price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Homeproduct;

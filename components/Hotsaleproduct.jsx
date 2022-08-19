import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Hotsaleproduct = ({
  product: { image, name, slug, price, category },
}) => {
  return (
    <div className="hotsaleproduct">
      <Link href={`/product/${slug.current}`}>
        <div className="hotsaleproduct_card">
          <img src={urlFor(image && image[0])} className="hotsaleproduct_image" />

          <p className="hotsaleproduct_info ">
            <strong>{name}</strong>
          </p>
          <p className="hotsaleproduct_price">
            <small>Kes</small> <strong>{price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Hotsaleproduct;

import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Marqueeproduct = ({ product: { image, name, slug, price, category } }) => {
  return (
    <div className="Marqueeproduct">
      <Link href={`/product/${slug.current}`}>
        <div className="Marquee_card">
          <img src={urlFor(image && image[0])} className="Marquee_image" />

          <p className="Marquee_info ">
            <strong>{name}</strong>
          </p>
          <p className="Marquee_price">
            <small>Kes</small> <strong>{price}</strong>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Marqueeproduct;

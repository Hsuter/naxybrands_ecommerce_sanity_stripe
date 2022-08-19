import React from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { Marqueeproduct } from "../../components";
import { useState } from "react";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  const [index, setIndex] = useState(0);
  const { decQty, inQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="productdetail_container">
        <div className="image_container">
          <img src={urlFor(image && image[index])} />

          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image " : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="productdetail_desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
            <h4>Details :</h4>
            <p>{details}</p>
            <p className="price">
              <small>Kes</small>
              <strong>{price}</strong>
            </p>
            <h5>Colors</h5>
            <div className="size">
              <div className="white"></div>
              <div className="red"></div>
              <div className="black"></div>
            </div>
            <div className="quantity">
              <h3>
                <strong>Quantity</strong>
                <p className="quantitydesc">
                  <span className="minus" onClick={decQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className="num">{qty}</span>
                  <span className="plus" onClick={inQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </h3>
            </div>
            <div className="cartbuttons">
              <button
                type="button"
                className="addtocart"
                onClick={() => onAdd(product, qty)}
              >
                Add To Cart
              </button>
              <button type="button" className="buynow" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="maylike_products">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylikeproducts_container track ">
            {products.map((item) => (
              <Marqueeproduct key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
    slug{
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current =='${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
};

export default ProductDetails;

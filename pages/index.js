import React from "react";
import { Product, Footer, HeroBanner } from "../components";
import Header from "../components/Header";
import { client } from "../lib/client";
import Homeproduct from "../components/Homeproduct";
import Hotsaleproduct from "../components/Hotsaleproduct";
import Link from "next/link";

export const Home = ({
  tshirtproducts,
  bannerData,
  hoodiesproducts,
  capsproducts,
  mugsproducts,
  thermosproducts,
  bottleproducts,
  jarsproducts,
  carproducts,
  lapproducts,
  hoodie1products,
}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="hotsale_title">Top Selling Items</div>
      <div className="hotsale_products">
        {tshirtproducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
        {hoodie1products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <div className="all_products">
        {/*clothing*/}
        <div className="allproducts_title"> CLOTHING</div>
        <div className="clothing_container">
          <div className="tshirt_container">
            <div className="allproducts_subtitle">T-SHIRT</div>
            {tshirtproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/tshirtproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div className="hoodies_container">
            <div className="allproducts_subtitle">HOODIES</div>
            {hoodiesproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/hoodieproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div className="caps_container">
            <div className="allproducts_subtitle">CAPS</div>
            {capsproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/capsproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>
        </div>

        {/*hotliquid*/}
        <div className="allproducts_title"> HOT LIQUID</div>
        <div className="hotliquid_container">
          <div className="mugs_container">
            <div className="allproducts_subtitle">MUGS</div>
            {mugsproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/mugsproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div className="thermoflask_container">
            <div className="allproducts_subtitle">THERMO FLASK</div>
            {thermosproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/thermoproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>
        </div>

        {/*hydration*/}
        <div className="allproducts_title"> HYDRATION</div>
        <div className="hydration_container">
          <div className="waterbottle_container">
            <div className="allproducts_subtitle">WATER BOTTLE</div>
            {bottleproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/waterbottleproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div className="jars_container">
            <div className="allproducts_subtitle">JARS</div>
            {jarsproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="Jarsproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>
        </div>

        {/*stickers*/}
        <div className="allproducts_title"> STICKERS</div>
        <div className="stickers_container">
          <div className="carmotorbike_container">
            <div className="allproducts_subtitle">CAR/MOTORBIKE</div>
            {carproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/carsproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>

          <div className="laptop_container">
            <div className="allproducts_subtitle">PHONE/LAPTOP</div>
            {lapproducts?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
            <Link href="/lapsproducts">
              <button>VIEW ALL</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const tquery = '*[_type == "product" && subcategory=="Tshirt" ][0...3]';
  const tshirtproducts = await client.fetch(tquery);

  const hquery = '*[_type == "product" && subcategory=="Hoodie" ] [0...3]';
  const hoodiesproducts = await client.fetch(hquery);

  const cquery = '*[_type == "product" && subcategory=="Cap" ] [0...3]';
  const capsproducts = await client.fetch(cquery);

  const mquery = '*[_type == "product" && subcategory=="Mugs" ] [0...3]';
  const mugsproducts = await client.fetch(mquery);

  const thquery = '*[_type == "product" && subcategory=="Thermos" ] [0...3]';
  const thermosproducts = await client.fetch(thquery);

  const bquery = '*[_type == "product" && subcategory=="Bottle" ] [0...3]';
  const bottleproducts = await client.fetch(bquery);

  const jquery = '*[_type == "product" && subcategory=="Jar" ] [0...3]';
  const jarsproducts = await client.fetch(jquery);

  const crquery = '*[_type == "product" && subcategory=="Car" ] [0...3]';
  const carproducts = await client.fetch(crquery);

  const lquery = '*[_type == "product" && subcategory=="Lap" ] [0...3]';
  const lapproducts = await client.fetch(lquery);

  const hoodie1query = '*[_type == "product" && name=="Hoodie 1" ] ';
  const hoodie1products = await client.fetch(hoodie1query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      tshirtproducts,
      bannerData,
      hoodiesproducts,
      capsproducts,
      mugsproducts,
      thermosproducts,
      bottleproducts,
      jarsproducts,
      carproducts,
      lapproducts,
      hoodie1products,
    },
  };
};

export default Home;

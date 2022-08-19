import React, { useState } from "react";

import { FaShoppingBasket } from "react-icons/fa";

import Link from "next/link";
import { urlFor } from "../lib/client";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Header = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div>
      <cart />
      <div className="header_container">
        <div className="top">
          <div className="logo">
            <Link href="/">
              <button type="button" className="lg">
                NAXY BRANDS
              </button>
            </Link>
          </div>

          <div className="header_icons">
            <div className="shopping_icon" onClick={() => setShowCart(true)}>
              <FaShoppingBasket></FaShoppingBasket>
              <span className="cartcount">{totalQuantities}</span>
            </div>
          </div>
          {showCart && <Cart />}
        </div>
      </div>
    </div>
  );
};

export default Header;

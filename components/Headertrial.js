import React from "react";
import { MdArrowDropDownCircle } from "react-icons/md";

if (typeof window !== "undefined") {
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header_links");
    const navLinksul = document.querySelector(".navlinks_ul");
    const navLinks = document.querySelectorAll(".header_links li");

    burger.addEventListener("click", () => {
      nav.classList.toggle("nav_active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      burger.classList.toggle("toggle");
    });

    navLinksul.addEventListener("click", () => {
      nav.classList.toggle("nav_active");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease backwards ${
            index / 7 + 0.5
          }s`;
        }
      });

      burger.classList.toggle("toggle");
    });
  };
  navSlide();
}

function Headertrial() {
  return (
    <div>
      <div className="middle">
        <div>
          <div className="header_links">
            <div>
              <button>
                Clothing
                <span className="dropdown">
                  <MdArrowDropDownCircle />
                </span>
              </button>
              <ul className="navlinks_ul">
                <li>
                  <a href="/tshirtproducts">Tshirt</a>
                </li>
                <li>
                  <a href="/capsproducts">Caps</a>
                </li>
                <li>
                  <a href="/hoddieproducts">Hoodies</a>
                </li>
              </ul>
            </div>
            <div>
              <button>
                Hot liquid
                <span className="dropdown">
                  <MdArrowDropDownCircle />
                </span>
              </button>
              <ul className="navlinks_ul">
                <li>
                  <a href="/mugsproducts">Mugs</a>
                </li>
                <li>
                  <a href="/thermoproducts">Thermo flask</a>
                </li>
              </ul>
            </div>
            <div>
              <button>
                Hydration
                <span className="dropdown">
                  <MdArrowDropDownCircle />
                </span>
              </button>
              <ul className="navlinks_ul">
                <li>
                  <a href="/waterbottleproduct">Water Bottles</a>
                </li>
                <li>
                  <a href="/jarsproducts">Jars</a>
                </li>
              </ul>
            </div>
            <div>
              <button>
                Stickers
                <span className="dropdown">
                  <MdArrowDropDownCircle />
                </span>
              </button>
              <ul className="navlinks_ul">
                <li>
                  <a href="/carsproducts">Cars/motorbike</a>
                </li>
                <li>
                  <a href="/lapsproducts">Laptop</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </div>
    </div>
  );
}

export default Headertrial;

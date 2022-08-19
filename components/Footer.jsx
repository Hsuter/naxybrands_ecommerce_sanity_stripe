import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_contactus">CONTACT US</div>
      <div className="footerTitle">NAXY BRANDS WORLDWIDE</div>
      <div className="contacts">
        <div>
          <span>Email:</span> www.naxygraphix@gmail.com
        </div>
        <div className="socials">
          <div className="insta">
            <FaInstagram />
          </div>
          <div className="twitter">
            <FaTwitter />
          </div>
          <div className="twitter">
            <FaFacebook />
          </div>
        </div>
      </div>
      <div className="contactus">
        <div>
          <span>Line 1:</span> 0769899804
        </div>
        <div>
          <span>Line 2:</span> 0737802822
        </div>
      </div>
      <div className="allrights">
        naxygraphix
        <span>
          <FaRegCopyright />
        </span>
        All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;

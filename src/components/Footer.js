import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      
        <div className="footer-social">
        <FaFacebookF />
        </div >
        <div className="footer-social" >
        <FaTwitter/>
        </div>
        <div className="footer-social">
        <FaLinkedinIn />
        </div>
        
        
    
    </div>
  );
};

export default Footer;

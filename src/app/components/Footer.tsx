// src/app/components/Footer.tsx
"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../globals.css"; 


export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row pb-4 pt-5">
          {/* Logo + Socials */}
          <div className="col-md-4 footer-logo-col">
            <img src="/logo.png" alt="To-Let Logo" className="footer-logo" />
            <p className="footer-tagline">
              One-stop solution for all your brokerage-free rental needs
            </p>
            <div className="footer-social-icons">
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 footer-links-col">
            <h5 className="footer-heading">QUICK LINKS</h5>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/property">Property</a></li>
            </ul>

            <h5 className="footer-heading mt-4">SERVICES</h5>
            <ul className="footer-list">
              <li>Paying Guest</li>
              <li>Flat and House</li>
              <li>Shops and Godown</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 footer-contact-col">
            <h5 className="footer-heading">REACH US</h5>
            <ul className="footer-list">
              <li><FaPhoneAlt className="me-2" /> +91-8707727347</li>
              <li><FaEnvelope className="me-2" /> hello@toletglobe.in</li>
              <li>
                <FaMapMarkerAlt className="me-2" /> D1/122 Vipulkhand, Gomtinagar, Lucknow, Uttar Pradesh
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom text-center py-3">
          © 2025 <strong>To-Let Globe</strong> -- Lucknow. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

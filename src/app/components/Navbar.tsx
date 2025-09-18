"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src="/logo.png" alt="To-Let Logo" width={100} height={40} />
        </Link>

        {/* Toggle Button (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/property" className="nav-link">
                Property Listing
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/create" className="nav-link">
                Add Property
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="btn btn-info text-dark fw-bold px-3">
                Login / Signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

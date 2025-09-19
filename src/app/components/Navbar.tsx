"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="clean-navbar"
      style={{ backgroundColor: "#111", borderBottom: "1px solid #00ffff" }}
    >
      <div className="navbar-inner d-flex align-items-center justify-content-between px-3 py-2">
        <Link href="/" className="nav-logo d-flex align-items-center">
          <Image
            src="/logo.png"
            alt="To-Let Logo"
            width={120}
            height={40}
            className="nav-logo-img"
          />
        </Link>

        <div className="d-flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/property">Property Listing</Link>
          <Link href="/create">Add Property</Link>
          <Link href="/login" className="btn btn-info text-dark fw-bold px-3">
            Login / Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

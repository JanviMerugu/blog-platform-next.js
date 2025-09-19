"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="clean-navbar" style={{ backgroundColor: "#111", borderBottom: "1px solid #00ffff" }}>
  <div className="navbar-inner">
    <Link href="/" className="nav-logo">
      <img src="/logo.png" alt="To-Let Logo" className="nav-logo-img" />
    </Link>

    <div className="nav-links">
      <Link href="/">Home</Link>
      <Link href="/">Blog</Link>
      <Link href="/about">About Us</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/property">Property Listing</Link>
      <Link href="/create">Add Property</Link>
    </div>

    <div className="nav-auth">
      <Link href="/login" className="auth-btn">Login / Signup</Link>
    </div>
  </div>
</nav>

  );
}

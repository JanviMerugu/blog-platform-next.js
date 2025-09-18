import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// src/app/layout.tsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "To-Let Blog Platform",
  description: "Rental tips, blogs, and property listings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Page Content */}
        <main>{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}

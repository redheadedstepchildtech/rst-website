"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-700">
          RST Tech
        </Link>

        {/* Links */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/about" className="hover:text-red-600 transition">
            About
          </Link>

          <Link href="/products" className="hover:text-red-600 transition">
            Products
          </Link>

          <Link href="/contact" className="hover:text-red-600 transition">
            Contact
          </Link>
        </div>

        {/* Phone Number */}
        <div className="text-red-700 font-semibold">
          (406) 437-2008
        </div>
      </div>
    </nav>
  );
}

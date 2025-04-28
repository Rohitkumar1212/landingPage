"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 bg-black text-white relative">
      
      {/* Left: Hamburger (only mobile) */}
      <div className="flex items-center md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <img src="/images/hamburger_1.jpg" alt="Menu" className="h-8 w-8" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex items-center">
        <img 
          src="/images/logo.png" 
          alt="Logo" 
          className="h-8 w-auto md:static md:translate-x-0 absolute left-1/2 transform -translate-x-1/2 md:ml-0" 
        />
      </div>

      {/* Middle Links: Desktop only */}
      <div className="hidden md:flex gap-8 text-sm ml-auto mr-6">
        <a href="#" className="hover:text-gray-400 transition">Home</a>
        <a href="#" className="hover:text-gray-400 transition">Features</a>
        <a href="#" className="hover:text-gray-400 transition">Pricing</a>
        <a href="#" className="hover:text-gray-400 transition">About</a>
      </div>

      {/* Right: Login & Sign up (Desktop only) */}
      <div className="hidden md:flex items-center gap-3">
        <button className="rounded-full border border-white px-4 py-1 text-sm hover:bg-white hover:text-black transition">
          Log in
        </button>
        <button className="gradient_btn text-sm">
          Sign up
        </button>
      </div>

      {/* Mobile Dropdown (services + login/signup) */}
      {menuOpen && (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-start py-3 px-4 gap-6 text-lg z-50 md:hidden">

    {/* Top Bar */}
    <div className="w-full flex items-center justify-between mb-8">
      {/* Close Button */}
      <div className="flex items-center justify-center h-8 w-8">
      <button onClick={() => setMenuOpen(false)} className="text-white text-3xl ">
        ×
      </button>
      </div>

      {/* Logo */}
      <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />

      {/* Empty placeholder to balance flex space */}
      <div className="w-8" />
    </div>

    {/* Menu Links */}
    <div className="flex flex-col items-center gap-6">
      <a href="#" className="hover:text-gray-400 transition">Service 1</a>
      <a href="#" className="hover:text-gray-400 transition">Service 2</a>
      <a href="#" className="hover:text-gray-400 transition">Service 3</a>
      <a href="#" className="hover:text-gray-400 transition">Service 4</a>

      <hr className="border-gray-700 w-2/3" />

      {/* Auth Buttons */}
      <button className="rounded-full border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
        Log in
      </button>
      <button className="gradient_btn text-sm">
        Sign up
      </button>
    </div>
  </div>
)}

    </nav>
  );
}


"use client";

import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 pt-24 pb-6 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo Section */}
        <div className="flex-1 flex w-xl justify-center">
          <img src="/images/logo.png" alt="Optodoce Logo" className="w-80 mb-6" />
        </div>

        {/* Links Section */}
        <div className="flex flex-1 justify-between">
          
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              {["Terms & Conditions", "Privacy Policies", "Careers", "Contact Us"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:underline hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {["Image Generator", "Creative Tools", "Design Generator", "Excellent Support"].map((item, index) => (
                <li key={index}>
                  <Link href="#" className="hover:underline hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Address</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-purple-400 mt-1" />
                <span>551 Swanston Street,<br />Melbourne Victoria 3053 Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-purple-400" /> 
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-purple-400" /> 
                <span>info@optodoce.com</span>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © 2024 Optodoce All Rights Reserved.
      </div>
    </footer>
  );
}

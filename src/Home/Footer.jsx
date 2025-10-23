import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import MiniFooter from "../Ref-Home/MiniFooter";

const Footer = () => {
  return (
    <>
      <MiniFooter />

    <div className="hidden lg:flex flex-col items-center justify-center w-full min-h-screen bg-white overflow-hidden">
      {/* === Blue Section === */}
      <section className="relative w-full max-w-[1180px] h-auto lg:h-[439px] mt-[60px] bg-[#375DFB] text-white rounded-[8px] overflow-hidden flex flex-col justify-center items-center px-6 py-12">
        <img
          src="/Images/aboutpic.webp"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm mb-3 opacity-80">So What is Next?</p>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-tight mb-6">
            Are You Ready? Let&apos;s Get to Work!
          </h2>
          <Link
            to="/get-started"
            className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            GET STARTED
          </Link>
        </div>
      </section>

      {/* === Footer Navigation === */}
      <footer className="w-full max-w-[1324px] flex flex-col items-center mt-[60px] mb-[40px] px-6">
        <div className="w-full flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <img
              src="/Images/Nvlogo.webp"
              alt="Opus Globals Logo"
              className="w-[129px] h-[45px]"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/services" className="hover:text-blue-600 transition">
              SERVICES
            </Link>
            <Link to="/project" className="hover:text-blue-600 transition">
              PROJECT
            </Link>
            <Link to="/customers" className="hover:text-blue-600 transition">
              CUSTOMERS
            </Link>
            <Link to="/about" className="hover:text-blue-600 transition">
              ABOUT US
            </Link>
            <Link to="/packages" className="hover:text-blue-600 transition">
              PACKAGES
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-blue-600 text-lg">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Footer;

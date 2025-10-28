import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const MiniFooter = () => {
  return (
    // ✅ Show only on mobile/tablet (hide on lg+)
    <div className="flex flex-col items-center bg-white min-h-screen mt-0 px-4 gap-0 md:px-8 lg:hidden">
      {/* === Blue Section === */}
      <section className="relative w-full max-w-[1324px] h-auto md:h-[439.38px] mt-[60px] bg-[#375DFB] text-white rounded-[8px] overflow-hidden flex flex-col justify-center items-center py-12 md:py-0">
        <img
          src="/Images/aboutpic.webp"
          alt="Background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay pointer-events-none"
        />
        <div className="relative text-center px-4 md:px-0">
          <p className="text-sm mb-2 opacity-80">So What is Next?</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">
            Are You Ready? Let&apos;s get to Work!
          </h2>
          <Link
            to="/get-started"
            className="bg-white text-blue-700 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition"
          >
            GET STARTED
          </Link>
        </div>
      </section>

      {/* === Footer Navigation === */}
      <footer className="flex flex-col items-center w-full mt-15 mb-0 pt-10 border-t border-gray-200">
        <div className="w-full max-w-[1324px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/Images/Nvlogo.webp"
              alt="Opus Globals Logo"
              className="w-[129px] h-[45px]"
            />
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm font-medium text-gray-700 text-center">
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

          <div className="flex justify-center gap-4 text-blue-600 text-lg">
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
  );
};

export default MiniFooter;

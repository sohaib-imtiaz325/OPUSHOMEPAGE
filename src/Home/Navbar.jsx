import React from "react";
import MiniNavbar from "../Ref-Home/MiniNavbar";
import WelcomeToOpus from "./Welcome-to-Opus";
import OurServices from "./OurServices";
import Productions from "./Productions";
import AboutUs from "./Aboutus";
import InvestmentPackages from "./InvestmentPackages";
import Footer from "./Footer";

export function Navbar() {
  return (
    <>
      {/* --------- MOBILE NAVBAR (Mini) --------- */}
      <div className="block lg:hidden">
        <MiniNavbar />
      </div>

    <header className="hidden lg:flex justify-center bg-white text-gray-800 shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="w-[1440px] h-[70px] flex items-center justify-between px-10">
        
        {/* --------- LEFT LOGO --------- */}
        <a href="#" className="flex items-center gap-2" aria-label="Home">
          <img
            src="/Images/Nvlogo.webp"
            alt="Opus Globals Logo"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* --------- NAV LINKS --------- */}
        <ul className="flex items-center gap-10 text-[15px] font-medium">
          {["Services", "Project", "Customers", "About Us", "Packages"].map(
            (item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* --------- RIGHT BUTTONS --------- */}
        <div className="flex items-center gap-6">
          {/* LOGIN BUTTON */}
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5M6.75 10.5h10.5A1.5 1.5 0 0118.75 12v7.5A1.5 1.5 0 0117.25 21H6.75A1.5 1.5 0 015.25 19.5V12a1.5 1.5 0 011.5-1.5z"
              />
            </svg>
            Login
          </a>

          {/* GET STARTED BUTTON */}
          <a
            href="#"
            className="inline-flex items-center justify-center h-9 px-5 rounded-md 
                       bg-blue-600 text-white text-sm font-semibold 
                       hover:bg-blue-700 hover:shadow-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>

      <WelcomeToOpus/>
      <OurServices/>
      <Productions/>
      <AboutUs/>
      <InvestmentPackages/>
      <Footer/>
    </>
  );
}

export default Navbar;

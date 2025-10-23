import React from "react";
import MiniWelcomeToOpus from "../Ref-Home/MiniWelcome-to-Opus";

export default function WelcomeToOpus() {
  return (
    <>
    <MiniWelcomeToOpus/>
    <section className="hidden lg:flex justify-center items-center bg-white mt-[70px] overflow-hidden">
      {/* ✅ Container: Fixed max width and perfect center for laptops */}
      <div className="w-full max-w-[1440px] h-[757px] flex items-center justify-between bg-white  overflow-hidden px-12">
        
        {/* ✅ Left Section */}
        <div className="flex flex-col justify-center w-1/2">
          <p className="text-[18px] font-bold tracking-[1.94px] uppercase">
            WELCOME TO <span className="text-[#375DFB]">OPUS GLOBALS</span>
          </p>

          <h1 className="mt-4 text-[72px] leading-[90px] font-semibold text-gray-900">
            Marketing support
            <br />
            when you <span className="text-[#375DFB]">need It</span>
          </h1>

          <p className="text-[#000000] font-inter text-[18px] font-medium leading-[26.4px] mt-6 w-[90%]">
            Join over 200+ brands advertising on TV with OPUS GLOBALS. Our clients come from all stages — 
            from TV novices to experienced advertisers, and different industries. 
            No matter the stage or size of budget — our technology and service put your goals first.
          </p>

          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#375DFB] px-6 py-3 text-sm font-medium text-white hover:bg-[#2f4de0] transition"
            >
              GET STARTED
            </button>
          </div>
        </div>

        {/* ✅ Right Section (Image) */}
        <div className="relative w-1/2 h-full overflow-hidden">
          <img
            src="/Images/HomeBg.webp"
            alt="Opus Background"
            className="w-full h-full object-cover"
            style={{
              maskImage: "linear-gradient(to left, black 30%, transparent 80%)",
              WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 80%)",
            }}
          />
        </div>
      </div>
    </section>
    </>
  );
}

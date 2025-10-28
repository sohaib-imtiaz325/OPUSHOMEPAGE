import React from "react";

export default function MiniWelcomeToOpus() {
  return (
    <div className="block lg:hidden relative flex justify-center items-center  overflow-hidden mt-[70px] px-4 sm:px-8">
      {/* ✅ Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Images/HomeBg.webp"
          alt="Opus Background"
          className="w-full h-full object-cover"
        />
        {/* Optional dark overlay for better text contrast */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* ✅ Content Wrapper (Text Above Background) */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1440px] py-16 sm:py-20 text-center text-white z-10">
        <p className="text-[16px] sm:text-[18px] font-bold tracking-[1.5px] uppercase text-[#000000]">
          WELCOME TO <span className="text-[#375DFB]">OPUS GLOBALS</span>
        </p>

        <h1 className="mt-4 text-[32px] sm:text-[48px] md:text-[60px] leading-tight font-semibold text-[#000000]">
          Marketing support
          <br />
          when you <span className="text-[#375DFB]">need It</span>
        </h1>

        <p className="text-[16px] sm:text-[18px] font-medium leading-relaxed mt-6 max-w-[700px] text-[#000000]">
          Join over 200+ brands advertising on TV with OPUS GLOBALS. Our clients come
          from all stages — from TV novices to experienced advertisers, and different
          industries. No matter the stage or size of budget — our technology and service
          put your goals first.
        </p>

        <div className="mt-8">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[4px] bg-[#375DFB] px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2749d6] transition-all duration-300"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}

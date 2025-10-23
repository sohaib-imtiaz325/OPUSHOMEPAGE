import React from "react";

export default function MiniWelcomeToOpus() {
  return (
    <div className="block lg:hidden flex justify-center items-center bg-white overflow-hidden mt-[70px] px-4 sm:px-8">
      {/* Wrapper */}
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1440px] bg-white border border-gray-200 rounded-lg overflow-hidden">
        
        {/* ✅ Text Section (Top) */}
        <div className="flex flex-col justify-center w-full px-4 sm:px-8 py-10">
          <p className="text-[16px] sm:text-[18px] font-bold tracking-[1.5px] uppercase text-center">
            WELCOME TO <span className="text-[#375DFB]">OPUS GLOBALS</span>
          </p>

          <h1 className="mt-4 text-[32px] sm:text-[48px] md:text-[60px] leading-tight font-semibold text-gray-900 text-center">
            Marketing support
            <br />
            when you <span className="text-[#375DFB]">need It</span>
          </h1>

          <p className="text-[#000000] text-[16px] sm:text-[18px] font-medium leading-relaxed mt-6 text-center">
            Join over 200+ brands advertising on TV with OPUS GLOBALS. Our clients come from all stages — 
            from TV novices to experienced advertisers, and different industries. 
            No matter the stage or size of budget — our technology and service put your goals first.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[4px] bg-[#375DFB] px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-[#2749d6] transition-all duration-300"
            >
              GET STARTED
            </button>
          </div>
        </div>

        {/* ✅ Image Section (Bottom) */}
        <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
          <img
            src="/Images/HomeBg.webp"
            alt="Opus Background"
            className="w-full h-full object-cover"
            style={{
              maskImage: "linear-gradient(to top, black 60%, transparent 95%)",
              WebkitMaskImage: "linear-gradient(to top, black 60%, transparent 95%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

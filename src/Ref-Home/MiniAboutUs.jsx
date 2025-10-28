import React from "react";

const MiniAboutUs = () => {
  return (
    // ✅ This line ensures it's hidden on laptop/desktop and visible only on mobile/tablet
    <div className="block md:block lg:hidden relative font-manrope overflow-hidden text-black py-10 px-4 sm:px-8 min-h-screen flex items-center justify-center">
      
      {/* ✅ Full Page Background Image */}
      <img
        src="/Images/aboutpic.webp"
        alt="About Us Background"
        className="absolute inset-0 w-full h-full object-cover z-[-20]"
      />

      {/* ✅ White Overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-[-10]" />

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col max-w-[1440px] mx-auto">
        
        {/* LEFT SIDE */}
        <div className="w-full flex flex-col justify-start items-start">
          <div className="max-w-lg">
            <h2 className="text-[28px] sm:text-[32px] font-semibold mb-4">
              About Us
            </h2>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-800">
              OPUS GLOBALS is a leading media buying agency specializing in
              acquiring premium advertising slots on various TV channels. We
              negotiate competitive rates and placements, ensuring maximum
              visibility for brands.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col gap-6 mt-12">
          {/* WHO WE ARE */}
          <div className="bg-[#F1FFF4]/90 rounded-[8px] p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-[22px] sm:text-[26px] font-semibold mb-4">
              Who We Are
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-[#3F4245]">
              As an expert intermediary between TV channels and advertisers, OPUS
              GLOBALS facilitates seamless ad placements, making television
              advertising more accessible and effective.
              As an expert intermediary between TV channels and advertisers, OPUS
              GLOBALS facilitates seamless ad placements, making television
              advertising more accessible and effective.
            </p>
          </div>

          {/* OUR SUCCESS */}
          <div className="bg-gradient-to-r from-[#E9F2FD]/90 to-[#EEF6FF]/90 rounded-[8px] p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-[20px] sm:text-[22px] font-semibold mb-3">
              Our Success
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-800">
              We help brands achieve unmatched exposure through TV advertising.
               We help brands achieve unmatched exposure through TV advertising. 
               We help brands achieve unmatched exposure through TV advertising.
            </p>
          </div>

          {/* OUR MISSION */}
          <div className="bg-gradient-to-r from-[#FFF0E6]/90 to-[#FFEDE6]/90 rounded-[8px] p-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-[20px] sm:text-[22px] font-semibold mb-3">
              Our Mission
            </h3>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-800">
              Our mission is to simplify TV advertising and make it accessible to
              all businesses.Our mission is to simplify TV advertising and make it accessible to
              all businesses.Our mission is to simplify TV advertising and make it accessible to
              all businesses.Our mission is to simplify TV advertising and make it accessible to
              all businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniAboutUs;

import React from "react";

const MiniAboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-white font-manrope relative overflow-hidden max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 lg:py-20">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
        {/* ABOUT US TEXT */}
        <div className="max-w-lg">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold mb-4 text-black">
            About Us
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
            OPUS GLOBALS is a leading media buying agency specializing in
            acquiring premium advertising slots on various TV channels. We
            negotiate competitive rates and placements, ensuring maximum
            visibility for brands. By streamlining the media buying process, we
            help advertisers efficiently reach their target audience without the
            hassle of direct negotiations.
          </p>
        </div>

        {/* IMAGE BELOW ABOUT US */}
        <div className=" w-full max-w-[600px] h-auto">
          <img
            src="/Images/aboutpic.webp"
            alt="About Us Office"
            className="w-full h-auto rounded-lg object-cover shadow-md"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-12 lg:mt-0 lg:pl-10">
        {/* WHO WE ARE */}
        <div className="bg-[#F1FFF4] rounded-[8px] p-6 sm:p-8 shadow-sm">
          <h3 className="text-[22px] sm:text-[28px] font-semibold text-black mb-4">
            Who We Are
          </h3>
          <p className="text-[15px] sm:text-[16px] text-[#3F4245] leading-relaxed">
            As an expert intermediary between TV channels and advertisers, OPUS
            GLOBALS facilitates seamless ad placements, making television
            advertising more accessible and effective. We cater to businesses of
            all sizes, from startups to established brands, providing tailored
            solutions to maximize their reach and impact. Our team of media
            buying specialists has extensive experience in the industry, allowing
            us to secure the best deals and placements for our clients. Whether
            you are looking to launch a new product, promote an event, or build
            brand awareness, OPUS GLOBALS can help you achieve your advertising
            goals.
          </p>
        </div>

        {/* OUR SUCCESS */}
        <div className="bg-gradient-to-r from-[#E9F2FD] to-[#EEF6FF] rounded-[8px] p-6 sm:p-8 shadow-sm">
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-3 text-black">
            Our Success
          </h3>
          <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
            As an expert intermediary between TV channels and advertisers, OPUS
            GLOBALS facilitates seamless ad placements, making television
            advertising more accessible and effective. We cater to businesses of
            all sizes, from startups to established brands, providing tailored
            solutions to maximize their reach and impact. Our team of media
            buying specialists has extensive experience in the industry, allowing
            us to secure the best deals and placements for our clients. Whether
            you are looking to launch a new product, promote an event, or build
            brand awareness, OPUS GLOBALS can help you achieve your advertising
            goals.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="bg-gradient-to-r from-[#FFF0E6] to-[#FFEDE6] rounded-[8px] p-6 sm:p-8 shadow-sm">
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-3 text-black">
            Our Mission
          </h3>
          <p className="text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
            Our mission is to simplify TV advertising, making it accessible to
            all businesses—whether they are new to TV marketing or experienced
            advertisers. Regardless of budget or industry, our cutting-edge
            technology and dedicated service prioritize client goals, delivering
            measurable results and maximum ROI.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniAboutUs;

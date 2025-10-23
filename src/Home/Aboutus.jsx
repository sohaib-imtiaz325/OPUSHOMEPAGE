import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen w-full bg-white font-manrope flex flex-col md:flex-row justify-center items-start overflow-hidden px-6 lg:px-16 py-20">
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col items-start justify-start space-y-10">
        {/* ABOUT US TEXT */}
        <div className="max-w-lg h-[450px]">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
            About Us
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            OPUS GLOBALS is a leading media buying agency specializing in
            acquiring premium advertising slots on various TV channels. We
            negotiate competitive rates and placements, ensuring maximum
            visibility for brands. By streamlining the media buying process, we
            help advertisers efficiently reach their target audience without the
            hassle of direct negotiations.
          </p>
        </div>

        {/* IMAGE BELOW ABOUT US */}
        <div className="w-full max-w-md ">
          <img
            src="/Images/aboutpic.webp"
            alt="About Us Office"
            className="w-[1440px] h-[704px] ml-[-45px]  rounded-lg object-cover mt-6"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col justify-start items-start space-y-10 mt-10 md:mt-0 md:ml-10">
        {/* WHO WE ARE */}
        <div className="bg-[#F1FFF4] rounded-lg p-6 h-[450px] w-full max-w-xl">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-black mb-3">
            Who We Are
          </h3>
          <p className="text-[16px] text-[#3F4245] leading-relaxed">
            As an expert intermediary between TV channels and advertisers, OPUS
            GLOBALS facilitates seamless ad placements, making television
            advertising more accessible and effective. We cater to businesses of
            all sizes, from startups to established brands, providing tailored
            solutions to maximize their reach and impact. Our team of media
            buying specialists has extensive experience in the industry,
            allowing us to secure the best deals and placements for our clients.
            Whether you are looking to launch a new product, promote an event,
            or build brand awareness, OPUS GLOBALS can help you achieve your
            advertising goals.
          </p>
        </div>

        {/* OUR SUCCESS */}
        <div className="bg-[#E8F3FF] rounded-lg p-6 h-[450px] w-full max-w-xl">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-black mb-3">
            Our Success
          </h3>
          <p className="text-[16px] text-[#3F4245] leading-relaxed">
            We have successfully executed campaigns for top brands, securing
            prime-time TV slots that deliver real results. Our strategic
            partnerships with major broadcasters ensure that clients always get
            the best exposure, driving growth and engagement. We have successfully executed campaigns for top brands, securing
            prime-time TV slots that deliver real results. Our strategic
            partnerships with major broadcasters ensure that clients always get
            the best exposure, driving growth and engagement.
          </p>
        </div>

        {/* OUR MISSION */}
        <div className="bg-[#FFF2EE] rounded-lg p-6 h-[450px] w-full max-w-xl">
          <h3 className="text-[28px] md:text-[32px] font-semibold text-black mb-3">
            Our Mission
          </h3>
          <p className="text-[16px] text-[#3F4245] leading-relaxed">
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

export default AboutUs;

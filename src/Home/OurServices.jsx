import React from "react";
import MobileOurServices from "../Ref-Home/MobOurServices";

// ✅ Tailwind helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Service Card Component
function ServiceCard({
  title,
  description,
  titleColorClass = "text-blue-600",
  paragraphClass,
  className,
}) {
  return (
    <article
      className={cn(
        "w-full max-w-[428.27px] h-[451.77px] bg-gray-100 p-8 rounded-[4px] shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      role="region"
      aria-labelledby={title}
    >
      <h3
        className={cn(
          "text-[24px] mt-25 font-semibold font-Manrope mb-4 tracking-tight",
          titleColorClass
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "text-[#3f4245] font-inter text-[16px] leading-[26px] tracking-tight",
          paragraphClass
        )}
      >
        {description}
      </p>
    </article>
  );
}

// ✅ Main Section
export default function OurServices() {
  return (
    <>
      {/* ✅ Mobile version (only visible on mobile/tablet) */}
      <div className="block lg:hidden">
        <MobileOurServices />
      </div>

      {/* ✅ Desktop version (only visible on laptops/desktops) */}
      <main
        className="hidden lg:flex relative mx-auto mt-20 w-full max-w-[1440px]  overflow-hidden bg-white px-6 lg:px-12 justify-center"
        aria-label="Services Section"
      >
        <section className="w-full max-w-[1280px] h-auto mt-[50px] text-center lg:text-left">
          {/* Top Label */}
          <p className="text-sm font-bold tracking-[1.8px] text-gray-800 uppercase mb-4">
            WHAT WE DO
          </p>

          {/* Headings */}
          <header className="max-w-[909px] mx-auto mb-6">
            <div className="w-full ml-70">
              <h1 className="text-[40px] lg:text-[50px] font-semibold text-[#000000] leading-[50px] lg:leading-[60px]">
                Driving Growth Through
              </h1>
              <h2 className="text-[40px] lg:text-[50px] font-semibold text-[#375DFB] leading-[50px] lg:leading-[60px]">
                Our Services
              </h2>
            </div>

            {/* Subheading */}
            <p className="font-inter text-[16px] ml-70 lg:text-[18px] leading-[26px] text-[#000000] tracking-tight mt-5">
              Elevate your TV channel with impactful marketing and strategic
              promotions. Expand your global reach, boost viewer engagement, and
              grow your brand like never before.
            </p>
          </header>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-25 gap-5 justify-items-center ">
            <ServiceCard
              title="TV Channel Promotion"
              titleColorClass="text-green-600"
              description="We help TV channels grow their global audience through strategic marketing combining targeted ads, influencer partnerships, and organic growth. Whether launching or scaling, our tailored approach drives viewership and builds a strong online presence."
            />

            <ServiceCard
              title="Digital Marketing"
              titleColorClass="text-blue-600"
              description="We manage and optimize social media campaigns for TV channels across Facebook, Instagram, YouTube, and Twitter. From content creation to paid ads, we use data-driven strategies to grow your audience, boost brand visibility, and drive traffic."
            />

            <ServiceCard
              title="Influencer & PR Marketing"
              titleColorClass="text-orange-600"
              description="We connect TV channels with influencers, bloggers, and media outlets to amplify brand exposure. Through press releases, guest appearances, and strategic collaborations, we build credibility, attract new viewers, and create buzz."
            />

            <ServiceCard
              title="Video Editing & Thumbnails"
              titleColorClass="text-lime-700"
              description="High-quality video content is key to audience retention. Our professional video editing services ensure your programs, promos, and teasers are visually appealing and engaging."
            />

            <ServiceCard
              title="Channel Monetization Assistance"
              titleColorClass="text-amber-600"
              description="Looking to monetize your TV channel? We help you generate revenue through YouTube, Facebook, and other platforms—setting up ads, sponsorships, and subscriptions while ensuring your content meets all policy requirements."
            />

            <ServiceCard
              title="Marketing & Reporting"
              titleColorClass="text-purple-600"
              description="Boost audience engagement with high-quality video editing. We enhance promos, teasers, and programs with smooth transitions, effects, subtitles, and custom thumbnails—driving more views and visibility."
            />
          </div>
        </section>
      </main>
    </>
  );
}

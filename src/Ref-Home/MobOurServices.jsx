import React from "react";

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
        "w-full max-w-[360px] sm:max-w-[400px] bg-gray-100 p-6 sm:p-8 rounded-[8px] shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
      role="region"
      aria-labelledby={title}
    >
      <h3
        className={cn(
          "text-[20px] sm:text-[24px] font-semibold font-Manrope mb-3 sm:mb-4 tracking-tight",
          titleColorClass
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "text-[#3f4245] font-inter text-[15px] sm:text-[16px] leading-[26px] tracking-tight",
          paragraphClass
        )}
      >
        {description}
      </p>
    </article>
  );
}

// ✅ Main Section (Mobile + Tablet only)
export default function MobileOurServices() {
  return (
    <main
      className="block lg:hidden relative mx-auto mt-[60px] w-full max-w-[1440px] overflow-hidden bg-white px-5 sm:px-8"
      aria-label="Services Section"
    >
      <section className="w-full text-center">
        {/* Top Label */}
        <p className="text-[14px] sm:text-[16px] font-bold tracking-[1.8px] text-gray-800 uppercase mb-3 sm:mb-4">
          WHAT WE DO
        </p>

        {/* Headings */}
        <header className="max-w-[800px] mx-auto mb-6 sm:mb-8">
          <h1 className="text-[32px] sm:text-[40px] font-semibold text-[#000000] leading-[40px] sm:leading-[50px]">
            Driving Growth Through
          </h1>
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#375DFB] leading-[40px] sm:leading-[50px] mt-1">
            Our Services
          </h2>

          {/* Subheading */}
          <p className="font-inter text-[15px] sm:text-[17px] leading-[26px] text-[#000000] tracking-tight mt-5 sm:mt-6 px-2 sm:px-6">
            Elevate your TV channel with impactful marketing and strategic promotions.
            Expand your global reach, boost viewer engagement, and grow your brand like never before.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 justify-items-center">
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
  );
}

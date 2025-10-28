import React from "react";

// Example data
const items = [
  {
    src: "/images/card1.webp",
    alt: "Project One",
    title: "Creative Studio Project",
    description:
      "A unique digital campaign combining visual storytelling with interactivity.",
  },
  {
    src: "/images/card2.webp",
    alt: "Project Two",
    title: "Modern Architecture",
    description:
      "Innovative structure design that redefines modern urban living.",
  },
  {
    src: "/images/card3.webp",
    alt: "Project Three",
    title: "Smart Tech Solutions",
    description:
      "Cutting-edge technology solutions to streamline business operations.",
  },
  {
    src: "/images/card4.webp",
    alt: "Project Four",
    title: "Eco-friendly Design",
    description:
      "Sustainable design practices for a better and greener tomorrow.",
  },
];

const MiniProductions = () => {
  return (
    // ✅ Only show on mobile (hide on md and above)
    <section className="block md:hidden w-full bg-black text-white mt-10 py-16 px-6 font-inter overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <div className="flex flex-col items-start gap-8 mb-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[14px] font-semibold uppercase tracking-[1.8px] text-[#FFFFFF]">
            Who We Serve
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-[28px] sm:text-[32px] font-semibold leading-tight mb-4">
            Powering all kinds of productions
          </h1>
          <p className="text-[15px] text-gray-300 leading-relaxed">
            Explore our innovative projects crafted with creativity and
            expertise. From concept to completion, we bring ideas to life with
            precision and passion.
          </p>
        </div>
      </div>

      {/* ---------- HORIZONTAL SCROLL CARDS ---------- */}
      <div className="overflow-x-auto hide-scrollbar">
        <ul className="flex gap-6 snap-x snap-mandatory pb-6">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="snap-start shrink-0 w-[50%] bg-[#111]  overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <figure className="w-full h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-[250px] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Caption Section */}
                <figcaption className="flex flex-col justify-between p-5 h-auto">
                  <h3 className="text-[20px] font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {/* ---------- SCROLLBAR HIDE ---------- */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default MiniProductions;

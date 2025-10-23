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

const Productions = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6 md:px-12 lg:px-20 font-inter overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        {/* LEFT SIDE */}
        <div>
          <p className="text-[14px] md:text-[16px] font-semibold uppercase tracking-[1.8px] text-[#FFFFFF]">
            Who We Serve
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:max-w-[60%]">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] font-semibold leading-tight mb-4">
            Powering all kinds of productions
          </h1>
          <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-gray-300">
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
              className="snap-start shrink-0 w-[80%] sm:w-[70%] md:w-[360px] lg:w-[380px] bg-[#111] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <figure className="w-full h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[500px] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Caption Section */}
                <figcaption className="flex flex-col justify-between p-5 h-auto">
                  <h3 className="text-[20px] sm:text-[22px] md:text-[26px] font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] text-gray-300 leading-relaxed">
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

export default Productions;

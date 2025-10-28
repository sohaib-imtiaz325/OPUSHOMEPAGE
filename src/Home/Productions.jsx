import React from "react";
import MiniProductions from "../Ref-Home/MiniProductions";

// 🔹 Example data (replace with your real data)
const items = [
  {
    src: "/Images/card1.webp",
    alt: "Project One",
    title: "Creative Studio Project",
    description:
      "A unique digital campaign combining visual storytelling with interactivity.",
  },
  {
    src: "/Images/card2.webp",
    alt: "Project Two",
    title: "Modern Architecture",
    description:
      "Innovative structure design that redefines modern urban living.",
  },
  {
    src: "/Images/card3.webp",
    alt: "Project Three",
    title: "Smart Tech Solutions",
    description:
      "Cutting-edge technology solutions to streamline business operations.",
  },
  {
    src: "/Images/card4.webp",
    alt: "Project Four",
    title: "Eco-friendly Design",
    description:
      "Sustainable design practices for a better and greener tomorrow.",
  },
];

const Productions = () => {
  return (
    <>
      <MiniProductions />

    {/* // 🔸 Hidden on mobile & tablet, visible only on laptop+ */}
    <section className="hidden lg:block bg-black w-full flex justify-center">
      <div className="w-full max-w-[1440px] h-[1172px] bg-black py-20 px-[60px] overflow-hidden">
        {/* ---------- HERO SECTION ---------- */}
        <div className="flex flex-row items-start justify-between gap-[100px] mb-[80px]">
          {/* LEFT SIDE */}
          <div className="w-[160px]">
            <p className="text-[16.5px] font-inter font-bold leading-[26px] tracking-[1.8px] uppercase text-white">
              WHO WE SERVE
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[910px]">
            <h1 className="text-[54px] font-manrope font-semibold leading-[60px] text-white">
              Powering all kinds of productions
            </h1>
            <p className="text-[17px] font-inter leading-[26px] tracking-[-0.2px] text-white mt-[20px]">
              Explore our innovative projects crafted with creativity and expertise.
              From concept to completion, we bring ideas to life.
            </p>
          </div>
        </div>

        {/* ---------- HORIZONTAL CARD ROW ---------- */}
        <div className="overflow-x-auto hide-scrollbar">
          <ul className="flex gap-[30px] snap-x snap-mandatory pb-[10px]">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="snap-start shrink-0 w-[361.7px] h-[730.56px] bg-black shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <figure className="flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-[537.31px] bg-gray-100 overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Caption Section */}
                  <figcaption className="w-[361.7px] h-[169.85px] flex flex-col justify-between p-[16px]">
                    <h3 className="text-[27.7px] font-medium text-white mb-[8px]">
                      {item.title}
                    </h3>
                    <p className="text-[18px] leading-[26px] text-white opacity-90">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- HIDE SCROLLBAR STYLE ---------- */}
        <style jsx>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>
    </section>
    </>
  );
};

export default Productions;

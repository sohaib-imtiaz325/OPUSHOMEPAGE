import React, { useState, useEffect } from "react";

export function MiniNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // keeps DOM for animation out
  const [visible, setVisible] = useState(false); // toggles animated-in state

  const navItems = ["Services", "Project", "Customers", "About Us", "Packages"];

  useEffect(() => {
    let t;
    if (isOpen) {
      // mount first, then make visible (next tick) so transitions run
      setMounted(true);
      t = setTimeout(() => setVisible(true), 20);
    } else {
      // hide first, then unmount after animation ends
      setVisible(false);
      t = setTimeout(() => setMounted(false), 250);
    }
    return () => clearTimeout(t);
  }, [isOpen]);

  return (
    <header className="block lg:hidden w-full bg-white text-gray-800 shadow-md fixed top-0 left-0 z-50">
      {/* container centered like desktop */}
      <div className="max-w-[1324px] mx-auto px-5 relative">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-[60px]">
          {/* LEFT: menu button + logo (menu button first so dropdown originates from left) */}
          <div className="flex items-center gap-3">
            {/* MENU BUTTON */}
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen((s) => !s)}
              className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isOpen ? (
                /* X icon */
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Menu icon */
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
                </svg>
              )}
            </button>

            {/* LOGO (right of the menu button as requested) */}
            <a href="#" className="flex items-center gap-2" aria-label="Home">
              <img
                src="/Images/Nvlogo.webp"
                alt="Opus Globals Logo"
                className="h-12 w-auto object-contain rounded-sm"
              />
            </a>
          </div>

          {/* RIGHT: Login + Get Started (stay on right side even on mobile) */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Login
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* ---------- LEFT DROPDOWN (anchored under the left side where the menu button/logo are) ---------- */}
        {mounted && (
          <div
            className={`absolute left-0 top-full mt-2 z-40`}
            style={{ minWidth: 0 }} // keeps sizing predictable inside centered container
          >
            {/* container width controlled so it doesn't cover right-side buttons */}
            <div
              className={`w-64 bg-white border border-gray-100 rounded-md shadow-lg overflow-hidden transform transition-all duration-200 origin-top-left
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
            >
              <ul className="flex flex-col px-3 py-3 space-y-1">
                {navItems.map((item, idx) => (
                  <li
                    key={item}
                    // stagger effect via inline style transitionDelay
                    style={{
                      transitionProperty: "opacity, transform",
                      transitionDuration: "220ms",
                      transitionTimingFunction: "ease",
                      transitionDelay: `${idx * 70}ms`,
                    }}
                    className={`transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
                  >
                    <a
                      href="#"
                      className="block px-2 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>

              {/* small divider + optional actions (kept inside dropdown but not required) */}
              <div className="border-t border-gray-100 px-3 py-3">
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {/* lock icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5M6.75 10.5h10.5A1.5 1.5 0 0118.75 12v7.5A1.5 1.5 0 0117.25 21H6.75A1.5 1.5 0 015.25 19.5V12a1.5 1.5 0 011.5-1.5z" />
                  </svg>
                  Login
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default MiniNavbar;

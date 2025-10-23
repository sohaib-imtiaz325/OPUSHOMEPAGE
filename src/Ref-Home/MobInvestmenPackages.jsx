import React from "react";

const packages = [
  { title: "Silver", amount: "$150", profit: "$1", tagColor: "bg-gray-400" },
  { title: "Silver Plus", amount: "$300", profit: "$2", tagColor: "bg-gray-300" },
  { title: "Gold", amount: "$600", profit: "$4", tagColor: "bg-yellow-400" },
  { title: "Gold Plus", amount: "$1200", profit: "$8", tagColor: "bg-yellow-300" },
  { title: "Diamond", amount: "$2400", profit: "$16", tagColor: "bg-purple-400" },
  { title: "Diamond Plus", amount: "$4800", profit: "$32", tagColor: "bg-purple-300" },
  { title: "Platinum", amount: "$9600", profit: "$64", tagColor: "bg-cyan-400" },
  { title: "Platinum Plus", amount: "$19200", profit: "$128", tagColor: "bg-cyan-300" },
];

const MobInvestmentPackages = () => {
  return (
    <div className="block lg:hidden min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-12 font-sans">
      {/* Header */}
      <div className="text-left mb-10 max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-[42px] font-semibold leading-tight mb-4">
          Investment Packages
        </h1>
        <p className="text-gray-300 text-base sm:text-lg md:text-[18px] leading-relaxed">
          Choose the investment package that suits your goals. All packages offer daily
          returns with varying profit levels.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
        {packages.map((pkg, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[290px] md:w-[310px] border border-gray-800 bg-black rounded-xl p-6 flex flex-col justify-between hover:border-gray-600 transition-all duration-300"
          >
            <div>
              <span
                className={`${pkg.tagColor} text-black text-xs sm:text-sm font-medium px-3 py-1 rounded-full inline-block mb-4`}
              >
                {pkg.title}
              </span>

              <h2 className="text-2xl sm:text-3xl font-semibold mb-1">
                {pkg.amount}
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mb-3">
                Initial Investment
              </p>

              <p className="text-sm sm:text-base text-gray-300 mb-1">
                <span className="text-white font-medium">{pkg.profit}</span>
                <span className="text-blue-400"> / Daily Profit</span>
              </p>

              <p className="text-xs sm:text-sm text-gray-400">20% Monthly ROI</p>
            </div>

            <button className="w-full sm:w-[148px] h-[45px] border border-gray-700 text-sm font-medium py-2 rounded-md mt-4 hover:bg-white hover:text-black transition-all duration-300">
              GET STARTED
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobInvestmentPackages;

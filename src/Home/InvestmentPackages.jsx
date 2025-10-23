import React from "react";
import MobInvestmentPackages from "../Ref-Home/MobInvestmenPackages";

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

const InvestmentPackages = () => {
  return (
    <>
      {/* ✅ Mobile + Tablet Version */}
      <MobInvestmentPackages />

      {/* ✅ Desktop Version */}
      <div className="hidden lg:flex flex-col  justify-center w-full min-h-screen bg-black text-white px-[5vw] py-[4vh] font-sans overflow-hidden">
        {/* Header */}
        <div className="text-left mb-16 w-full mt-20 max-w-[700px]">
          <h1 className="text-[53px] font-semibold font-Manrope leading-tight text-white">
            Investment Packages
          </h1>
          <p className="text-gray-300 text-[20px] font-medium mt-5 leading-relaxed">
            Choose the investment package that suits your goals. All packages offer
            daily returns with varying profit levels.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center w-full max-w-[1300px]">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="w-[280px] h-[410px] bg-black border border-gray-600 rounded-xl p-6 flex flex-col justify-between hover:border-gray-400 hover:scale-[1.03] transition-all duration-300"
            >
              <div>
                <span
                  className={`${pkg.tagColor} text-black text-xs font-medium px-3 py-1 rounded-full inline-block mb-4`}
                >
                  {pkg.title}
                </span>

                <h2 className="text-3xl font-semibold mb-1">{pkg.amount}</h2>
                <p className="text-gray-400 text-sm mb-3">Initial Investment</p>

                <p className="text-sm text-gray-300 mb-1">
                  <span className="text-white font-medium">{pkg.profit}</span>
                  <span className="text-blue-400"> / Daily Profit</span>
                </p>

                <p className="text-sm text-gray-400">20% Monthly ROI</p>
              </div>

              <button className="w-[130px] h-[42px] border border-gray-600 text-sm font-medium py-2 rounded-md mt-4 hover:bg-white hover:text-black transition-all duration-300">
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InvestmentPackages;

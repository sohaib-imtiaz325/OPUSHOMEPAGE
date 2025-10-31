// ✅ src/AccountHistory.jsx
import React, { useState } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaDollarSign,
  FaChartLine,
  FaCoins,
  FaColumns,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Sample transaction data
const transactions = [
  {
    id: "TXN001",
    type: "Daily Profit",
    description: "Daily profit from Silver package",
    amount: "+$1.00",
    status: "Completed",
    date: "2024-01-28",
    time: "09:00 AM",
  },
  {
    id: "TXN002",
    type: "Referral Bonus",
    description: "Referral bonus from John Smith",
    amount: "+$5.50",
    status: "Completed",
    date: "2024-01-28",
    time: "10:30 AM",
  },
  {
    id: "TXN003",
    type: "Withdrawal",
    description: "Withdrawal to bank account",
    amount: "$50.00",
    status: "Processing",
    date: "2024-01-27",
    time: "02:15 PM",
  },
  {
    id: "TXN004",
    type: "Daily Profit",
    description: "Daily profit from Silver package",
    amount: "+$1.00",
    status: "Completed",
    date: "2024-01-27",
    time: "09:00 AM",
  },
  {
    id: "TXN005",
    type: "Referral Bonus",
    description: "Referral bonus from Alex Doe",
    amount: "+$3.25",
    status: "Completed",
    date: "2024-01-26",
    time: "08:45 AM",
  },
  {
    id: "TXN006",
    type: "Withdrawal",
    description: "Withdrawal to wallet",
    amount: "$25.00",
    status: "Completed",
    date: "2024-01-25",
    time: "11:20 AM",
  },
];

// ✅ Icons for each transaction type
const typeIcons = {
  "Daily Profit": <FaDollarSign className="text-green-400 text-lg inline-block mr-2" />,
  "Referral Bonus": <FaChartLine className="text-blue-500 text-lg inline-block mr-2" />,
  "Withdrawal": <FaArrowDown className="text-red-500 text-lg inline-block mr-2" />,
};

const AccountHistory = () => {
  const [filter, setFilter] = useState("All Transactions");

  const filteredTransactions = transactions.filter((txn) => {
    if (filter === "All Transactions") return true;
    return txn.type === filter;
  });

  // ✅ CSV Export Function with Toast
  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      ["Transaction ID,Type,Description,Amount,Status,Date,Time"]
        .concat(
          filteredTransactions.map(
            (t) =>
              `${t.id},${t.type},${t.description},${t.amount},${t.status},${t.date},${t.time}`
          )
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transaction_history.csv");
    document.body.appendChild(link);
    link.click();

    toast.success("✅ Transaction history exported successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen px-3 sm:px-6 md:px-8 py-6 font-sans">
      {/* Toast Container */}
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />

      {/* Header */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-2">
        <FaColumns className="text-2xl sm:text-3xl" />
        Account History
      </h1>
      <hr className="border-gray-300" />

      {/* ✅ Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-4">
        {/* Total Income */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-green-50">
          <div className="flex items-center gap-2">
            <div className="bg-green-100 p-3 rounded-[15px] flex items-center justify-center">
              <FaArrowUp className="text-green-600 text-xl" />
            </div>
            <p className="text-gray-500 font-medium text-sm sm:text-base">Total Income</p>
          </div>
          <p className="text-green-600 text-xl sm:text-2xl font-bold mt-3">$325.00</p>
        </div>

        {/* Total Withdrawn */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-red-50">
          <div className="flex items-center gap-2">
            <div className="bg-red-100 p-3 rounded-[15px] flex items-center justify-center">
              <FaArrowDown className="text-red-600 text-xl" />
            </div>
            <p className="text-gray-500 font-medium text-sm sm:text-base">
              Total Withdrawn
            </p>
          </div>
          <p className="text-red-500 text-xl sm:text-2xl font-bold mt-3">$150.00</p>
        </div>

        {/* This Month */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-blue-50">
          <div className="flex items-center gap-2">
            <div className="bg-blue-100 p-3 rounded-[15px] flex items-center justify-center">
              <FaDollarSign className="text-blue-600 text-xl" />
            </div>
            <p className="text-gray-500 font-medium text-sm sm:text-base">This Month</p>
          </div>
          <p className="text-blue-600 text-xl sm:text-2xl font-bold mt-3">$45.75</p>
        </div>

        {/* Pending */}
        <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex flex-col items-center text-center hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-purple-50">
          <div className="flex items-center gap-2">
            <div className="bg-purple-100 p-3 rounded-[15px] flex items-center justify-center">
              <FaChartLine className="text-purple-600 text-xl" />
            </div>
            <p className="text-gray-500 font-medium text-sm sm:text-base">Pending</p>
          </div>
          <p className="text-purple-600 text-xl sm:text-2xl font-bold mt-3">$50.00</p>
        </div>
      </div>

      {/* ✅ Transaction Table */}
      <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:scale-[1.01] p-4 sm:p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3">
          <div>
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              Transaction History
            </h2>
            <p className="text-sm text-gray-500">
              View all your account transactions and earnings
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-lg px-3 py-2 bg-gray-100 text-sm text-gray-700 focus:ring-1 focus:ring-gray-500 w-full sm:w-auto"
            >
              <option>All Transactions</option>
              <option>Daily Profit</option>
              <option>Referral Bonus</option>
              <option>Withdrawal</option>
            </select>

            <button
              onClick={handleExport}
              className="bg-gray-100 hover:bg-gray-300 text-black text-sm px-4 py-2 rounded-lg shadow w-full sm:w-auto"
            >
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm md:text-base border-t border-gray-300">
            <thead>
              <tr className="border-b border-gray-300 text-gray-600">
                <th className="py-3 px-2 md:px-4">Transaction ID</th>
                <th className="py-3 px-2 md:px-4">Type</th>
                <th className="py-3 px-2 md:px-4">Description</th>
                <th className="py-3 px-2 md:px-4">Amount</th>
                <th className="py-3 px-2 md:px-4">Status</th>
                <th className="py-3 px-2 md:px-4">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className="border-b border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="py-3 px-2 md:px-4 font-medium text-gray-700 whitespace-nowrap">
                    {txn.id}
                  </td>
                  <td className="py-3 px-2 md:px-4 text-gray-700 flex items-center whitespace-nowrap">
                    {typeIcons[txn.type] || <FaCoins className="text-gray-400 mr-2" />}
                    {txn.type}
                  </td>
                  <td className="py-3 px-2 md:px-4 text-gray-600 min-w-[150px] sm:min-w-[200px]">
                    {txn.description}
                  </td>
                  <td
                    className={`py-3 px-2 md:px-4 font-semibold ${
                      txn.amount.startsWith("+") ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {txn.amount}
                  </td>
                  <td className="py-3 px-2 md:px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        txn.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 md:px-4 text-gray-600 whitespace-nowrap">
                    {txn.date}
                    <br />
                    <span className="text-gray-400 text-xs sm:text-sm">{txn.time}</span>
                  </td>
                </tr>
              ))}

              {filteredTransactions.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-6 text-gray-500 italic border-t border-gray-300"
                  >
                    No transactions found for "{filter}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AccountHistory;

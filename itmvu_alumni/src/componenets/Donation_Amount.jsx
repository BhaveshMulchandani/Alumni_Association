import React, { useState } from "react";

const Donation_Amount = () => {
  const [amount, setamount] = useState(null);
  return (
    <>
      <div className="space-y-4 mt-6 z-0">
        <h2 className="text-lg font-semibold text-gray-800">
          Donation Amount (₹)
        </h2>
        <div className="grid grid-cols-3 gap-3">
          {[500, 1000, 1500].map((value) => (
            <button
              key={value}
              onClick={() => setamount(value)}
              className={`h-12 text-base font-semibold border rounded-lg transition-colors ${
                amount === value
                  ? "bg-pink-600 text-white border-pink-600"
                  : "bg-gray-50 text-gray-800 border-pink-200 hover:border-pink-300"
              }`}
            >
              ₹ {value}
            </button>
          ))}
        </div>

        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
            ₹
          </span>
          <input
            type="number"
            min={500}
            placeholder="Enter minimum ₹500"
            className="w-full pl-8 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
            value={amount || ""}
            onChange={(e) => setamount(Number(e.target.value))}
          />
        </div>
      </div>
    </>
  );
};

export default Donation_Amount;

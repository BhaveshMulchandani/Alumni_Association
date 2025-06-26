import { useState } from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";

const Donation = () => {
  const [amount, setamount] = useState(null);
  return (
    <>
      <Navbar_alumni />
      <div className="p-8 py-28 bg-gray-50 h-screen">
        <div className="max-w-full mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-heart-line text-3xl text-white"></i>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Make a Difference Today
              </h1>
              <p className="text-lg text-gray-600">
                Support your college and future students by donating generously.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 mt-8 gap-4">
            <div className="bg-white rounded-lg border border-pink-200 p-6">
              <div className="text-center">
                <h2 className="text-2xl text-gray-800 font-semibold">
                  Your Contribution Matters
                </h2>
                <p className="text-gray-600">
                  Every donation helps build a brighter future for students and
                  enhances our beloved institution.
                </p>
              </div>
              <div className="space-y-4 mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mt-6">
                  Donation Amount (₹)
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setamount(500)}
                    className={`h-12 text-base font-semibold border border-pink-200  hover:border-pink-300 rounded-lg ${
                      amount === 500 ? "bg-pink-600 text-white" : "bg-gray-50"
                    }`}
                  >
                    ₹ 500
                  </button>

                  <button
                    onClick={() => setamount(1000)}
                    className={`h-12 text-base font-semibold border border-pink-200  hover:border-pink-300 rounded-lg ${
                      amount === 1000 ? "bg-pink-600 text-white" : "bg-gray-50"
                    }`}
                  >
                    ₹ 1000
                  </button>

                  <button
                    onClick={() => setamount(1500)}
                    className={`h-12 text-base font-semibold border border-pink-200  hover:border-pink-300 rounded-lg ${
                      amount === 1500 ? "bg-pink-600 text-white" : "bg-gray-50"
                    }`}
                  >
                    ₹ 1500
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
                    ₹
                  </span>
                  <input
                    type="number"
                    min={500}
                    className="w-full pl-8 pr-4 py-3 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
                    placeholder="Enter minimum ₹500"
                    value={amount}
                    onClick={(e) => {
                      e.target.value;
                    }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-lg font-semibold text-gray-800 mb-4 block">
                  Donation Type
                </label>

                <div className="space-y-1">
                  <div
                    className={`border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25`}
                  >
                    <label className="flex items-center space-x-3 cursor-pointer w-full">
                      <input
                        type="radio"
                        name="donationType"
                        id="scholarship"
                        className="accent-pink-600 w-5 h-5"
                      />

                      {/* Icon */}
                      <i className="ri-award-line text-2xl text-pink-600"></i>

                      <div>
                        <span className="font-semibold text-gray-800">
                          Scholarship Fund
                        </span>
                        <p className="text-sm text-gray-600">
                          Support needy and meritorious students
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="text-lg font-semibold text-gray-800 mb-4 block">
                  Your Message(Optional)
                </label>
                <textarea
                  placeholder="Share a message dedication to your donation,or tell us what ispired you to give back..."
                  className="w-full outline-none border border-pink-200 focus:ring-pink-500 focus:border-pink-500 min-h-[100px] rounded-lg p-2"
                ></textarea>
              </div>

              <div className=" mt-4 pt-4">
                <button className="bg-pink-600 hover:bg-pink-700 text-white w-full h-14 text-lg font-semibold rounded-lg flex items-center justify-center">
                  Proceed to Payment
                  <i className="ri-arrow-right-line text-xl ml-2"></i>
                </button>

                <p className="text-center text-gray-600 mt-3">
                  You're about to donate ₹1,000 for Scholarship Fund
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg border border-pink-200 p-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;

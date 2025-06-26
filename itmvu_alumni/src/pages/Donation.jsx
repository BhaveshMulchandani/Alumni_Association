import { useState } from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";

const Donation = () => {
  const [amount, setamount] = useState(null);
  const [donationType, setDonationType] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <Navbar_alumni />
      <div className="p-8 py-28 bg-gray-50 min-h-screen">
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

              {/* Amount Section */}
              <div className="space-y-4 mt-6">
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

              {/* Donation Type */}
              <div className="mt-6">
                <label className="text-lg font-semibold text-gray-800 mb-4 block">
                  Donation Type
                </label>
                <div className="space-y-1">
                  <div
                    className="border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25"
                    onClick={() => setDonationType("scholarship")}
                  >
                    <label className="flex items-center space-x-3 cursor-pointer w-full">
                      <input
                        type="radio"
                        name="donationType"
                        id="scholarship"
                        className="accent-pink-600 w-5 h-5"
                        checked={donationType === "scholarship"}
                        onChange={() => setDonationType("scholarship")}
                      />
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

              {/* Optional Message */}
              <div className="mt-6">
                <label className="text-lg font-semibold text-gray-800 mb-4 block">
                  Your Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a message, dedication, or tell us what inspired you to give back..."
                  className="w-full outline-none border border-pink-200 focus:ring-pink-500 focus:border-pink-500 min-h-[100px] rounded-lg p-2"
                ></textarea>
              </div>

              {/* Proceed Button */}
              <div className="mt-6 pt-4">
                <button
                  className="bg-pink-600 hover:bg-pink-700 text-white w-full h-14 text-lg font-semibold rounded-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!amount || !donationType}
                >
                  Proceed to Payment
                  <i className="ri-arrow-right-line text-xl ml-2"></i>
                </button>

                {amount && donationType && (
                  <p className="text-center text-gray-600 mt-3">
                    You're about to donate ₹{amount.toLocaleString()} for
                    Scholarship Fund
                  </p>
                )}
              </div>
            </div>

            {/* Right Side (Future Content) */}
            <div className="bg-white rounded-lg border border-pink-200 p-6">
              {/* Leave empty for now */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;

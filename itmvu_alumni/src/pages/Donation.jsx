import { useState } from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";
import Donation_Type from "../componenets/Donation_Type";
import Donation_Amount from "../componenets/Donation_Amount";

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
              <div className="text-center mt-1">
                <h2 className="text-2xl text-gray-800 font-semibold">
                  Your Contribution Matters
                </h2>
                <p className="text-gray-600">
                  Every donation helps build a brighter future for students and
                  enhances our beloved institution.
                </p>
              </div>

              {/* Amount Section */}
              <Donation_Amount />

              {/* Donation Type */}
              <Donation_Type />

              {/* Optional Message */}
              <div className="mt-6">
                <label className="text-lg font-semibold text-gray-800 mb-4 block">
                  Your Message (Optional)
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a message, dedication, or tell us what inspired you to give back..."
                  className="w-full outline-none border border-pink-200 focus:ring-pink-500 focus:border-pink-500 min-h-[100px] rounded-lg p-2 overflow-hidden text-light text-gray-600 text-lg"
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
                  <p className="text-center text-gray-600 mt-3 text-base leading-relaxed">
                    You're about to donate ₹{amount.toLocaleString()} for{" "}
                    {donationType}.
                  </p>
                )}
              </div>
            </div>

            {/* Right Side (Future Content) */}
            <div className="bg-white rounded-lg border border-pink-200 p-6">
              <div className="flex gap-2">
                <i className="ri-time-line text-pink-500 text-2xl"></i>
                <h2 className="text-2xl text-gray-800 font-semibold">
                  Recent Donation History
                </h2>
              </div>
              <p className="text-gray-600 mt-1">
                Your recent Contribution to the college
              </p>
              <div className="mt-6 border border-pink-200 hover:border-pink-300 rounded-lg w-full">
                <div>
                  <div className="flex items-center gap-3 py-1 px-4">
                    <span className="text-pink-600 font-bold text-3xl">
                      ₹5,000
                    </span>
                    <div className="flex items-center gap-1 text-green-700 text-base">
                      <i className="ri-checkbox-circle-line"></i>
                      <span>Completed</span>
                    </div>
                  </div>
                  <div className="flex items-center py-1 px-4">
                    <span className="flex items-center gap-2">
                      <i className="ri-building-4-line text-base text-gray-700"></i>
                      <h2 className="text-base text-gray-700">
                        Infrastructure
                      </h2>
                    </span>
                    <span className="flex items-center gap-2">
                      <i className="ri-calendar-line text-base text-gray-700"></i>
                      <h2 className="text-base text-gray-700">15 June 2025</h2>
                    </span>
                  </div>
                </div>
              </div>
              <hr className="border-t border-pink-100 mt-6 mb-4" />
              <button className="w-full border border-pink-200 hover:border-pink-300  hover:bg-gray-50 rounded-lg text-pink-600 mt-3 p-2 text-lg">
                View full transaction History
              </button>
            </div>
          </div>
          <p className="text-base italic text-gray-500 flex justify-center mt-6">"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela</p>
        </div>
      </div>
    </>
  );
};

export default Donation;

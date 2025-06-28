import React, { useState } from "react";

const Donation_Type = () => {
  const [donationType, setdonationType] = useState("");
  return (
    <>
      <div className="mt-6">
        <label className="text-lg font-semibold text-gray-800 mb-4 block">
          Donation Type
        </label>
        <div className="space-y-1">
          <div
            className="border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25"
            onClick={() => setdonationType("scholarship")}
          >
            <label className="flex items-center space-x-3 cursor-pointer w-full">
              <input
                type="radio"
                className="accent-pink-600 w-5 h-5"
                checked={donationType === "scholarship"}
                onChange={()=>setdonationType("scholarship")}
              />
              <i className="ri-award-line text-2xl text-pink-600"></i>
              <div>
                <span className="font-semibold text-gray-800">
                  Scholarships
                </span>
                <p className="text-sm text-gray-600">
                  Support needy and meritorious students
                </p>
              </div>
            </label>
          </div>
          <div
            className="border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25"
            onClick={() => setdonationType("event")}
          >
            <label className="flex items-center space-x-3 cursor-pointer w-full">
              <input
                type="radio"
                className="accent-pink-600 w-5 h-5"
                checked={donationType === "event"}
                 onChange={() => setdonationType("event")}
              />
              <i className="ri-calendar-event-line text-2xl text-pink-600"></i>
              <div>
                <span className="font-semibold text-gray-800">Events</span>
                <p className="text-sm text-gray-600">
                  Fund college events and activities
                </p>
              </div>
            </label>
          </div>
          <div
            className="border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25"
            onClick={() => setdonationType("infrastructure")}
          >
            <label className="flex items-center space-x-3 cursor-pointer w-full">
              <input
                type="radio"
                className="accent-pink-600 w-5 h-5"
                checked={donationType === "infrastructure"}
                onChange={() => setdonationType("infrastructure")}
              />
              <i className="ri-building-4-line text-2xl text-pink-600"></i>
              <div>
                <span className="font-semibold text-gray-800">
                  Infrastructure
                </span>
                <p className="text-sm text-gray-600">
                  Improve campus facilities and resources
                </p>
              </div>
            </label>
          </div>
          <div
            className="border rounded-lg p-4 cursor-pointer transition-colors border-pink-200 hover:border-pink-300 hover:bg-pink-25"
            onClick={() => setdonationType("generalfund")}
          >
            <label className="flex items-center space-x-3 cursor-pointer w-full">
              <input
                type="radio"
                className="accent-pink-600 w-5 h-5"
                checked={donationType === "generalfund"}
                onChange={() => setdonationType("generalfund")}
              />
              <i className="ri-hand-heart-line text-2xl text-pink-600"></i>
              <div>
                <span className="font-semibold text-gray-800">
                  General Fund
                </span>
                <p className="text-sm text-gray-600">
                  Support overall college development
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation_Type;

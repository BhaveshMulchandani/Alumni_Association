import React from "react";
import Navbar from "../components/Navbar";

const Job = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mx-20 mt-10 bg-blue-400 p-5 rounded-lg shadow-xl relative">
        <h1 className="font-bold text-5xl text-center">
          Alumni Networking For Career Success
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {/* Filters */}
          <div className="relative">
            <select className="pl-10 pr-4 py-2 border rounded-md bg-white shadow-md focus:outline-none">
              <option value="">Location</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Gujarat">Gujarat</option>
            </select>
            <i className="ri-map-pin-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          <div className="relative">
            <select className="pl-10 pr-4 py-2 border rounded-md bg-white shadow-md focus:outline-none">
              <option value="">Experience</option>
              <option value="0-2 Years">0-2 Years</option>
              <option value="2-5 Years">2-5 Years</option>
            </select>
            <i className="ri-briefcase-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>
          {/* Search Bar */}
          <div className="flex items-center border rounded-md shadow-md bg-white">
            <input
              type="text"
              placeholder="Search jobs"
              className="px-4 py-2 w-64 focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Job Vacancies Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Job Vacancies</h2>
        <div className="grid gap-6 border border-gray-200 rounded-lg p-4 w-1/2 ml-7">
          {/* Job Card */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Job Image */}
              <img
                src="https://vrclist.s3.amazonaws.com/communities/profile_images/c47659b095f3dc1641e3ca0e40453b37.png"
                alt="Company Logo"
                className="w-12 h-12 rounded-full"
              />
              {/* Job Details */}
              <div>
                <h3 className="text-lg font-bold">Branch Manager</h3>
                <p className="text-gray-600">NT Corporate</p>
                <div className="flex gap-4 text-sm text-gray-500 mt-2">
                  <span>3.5 - 4.5L Per Year</span>
                  <span>2 Years Experience</span>
                  <span>Chennai - Tamil Nadu</span>
                </div>
              </div>
            </div>
            {/* Detail Button */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              In Detail
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;

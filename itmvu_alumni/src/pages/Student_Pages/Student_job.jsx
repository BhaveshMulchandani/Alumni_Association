import React from "react";
import Navbar_student from "../../componenets/Navbar_student";

const Student_job = () => {
  return (
    <>
      <Navbar_student />
      <div className="min-h-screen bg-gray-50 px-16 py-28">
        <div className="max-w-full mx-auto">
          <div>
            <h1 className="text-gray-800 font-bold text-3xl">Job Board</h1>
            <h4 className="text-gray-600 text-base">
              Discover amazing career opportunities posted by alumni and
              placement team
            </h4>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg border border-pink-200 shadow-sm">
              <h1 className="text-pink-500 font-bold text-2xl">6</h1>
              <h4 className="text-gray-600 text-sm">Active Jobs</h4>
            </div>

            <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg border border-pink-200 shadow-sm">
              <h1 className="text-blue-500 font-bold text-2xl">2</h1>
              <h4 className="text-gray-600 text-sm">Internships</h4>
            </div>

            <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg border border-pink-200 shadow-sm">
              <h1 className="text-emerald-500 font-bold text-2xl">1</h1>
              <h4 className="text-gray-600 text-sm">Remote Jobs</h4>
            </div>

            <div className="p-6 flex flex-col items-center justify-center bg-white rounded-lg border border-pink-200 shadow-sm">
              <h1 className="text-violet-500 font-bold text-2xl">4</h1>
              <h4 className="text-gray-600 text-sm">Alumni Posted</h4>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full max-w-4xl p-5 bg-white border border-pink-200 rounded-xl shadow-sm mx-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h1 className="text-gray-800 font-medium text-xl">
                    Frontend Developer
                  </h1>
                  <span className="text-sm text-pink-600 bg-pink-100 rounded-full px-3 py-1 flex items-center gap-1">
                    <i className="ri-group-line"></i> Alumni
                  </span>
                </div>
                <button className="bg-pink-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-pink-700 transition">
                  Apply Now
                </button>
              </div>
              <div className="mt-1 flex gap-2">
                <div className="text-gray-600 font-semibold text-base">
                  <i className="ri-building-line"></i>
                  <span>Google</span>
                </div>
                <div className="text-gray-600 text-base">
                  <i className="ri-map-pin-line"></i>
                  <span>Bengaluru,India</span>
                </div>
              </div>
              <div className="flex items-center text-sm mt-2 space-x-2">
                <span className="px-2 rounded-2xl font-medium bg-gray-50 border border-pink-100">
                  Full-Time
                </span>
                <div className="space-x-1 text-gray-600 ">
                  <i class="ri-time-line"></i>
                  <span>0-2 years</span>
                </div>
                <div className="space-x-1 text-gray-600 ">
                  <i class="ri-money-rupee-circle-line"></i>
                  <span>8-12 LPA</span>
                </div>
              </div>
              <p className="mt-2 font-light text-gray-800">
                Join our team to build cutting-edge web applications using
                React, TypeScript, and modern frontend technologies. Work on
                products used by millions globally.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-600">
                  Posted by:{" "}
                  <span className="text-gray-600 font-medium">
                    Sarah Chen (Class of 2019)
                  </span>
                </span>
                <span className="text-gray-600">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_job;

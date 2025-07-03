import React from "react";
import Navbar_student from "../../componenets/Navbar_student";

const Student_Profile = () => {
  return (
    <>
      <Navbar_student />
      <div className="p-8 py-28 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-3xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
              <h4 className="text-base text-gray-600 mt-2">
                Showcase your skills and connect with the alumni network
              </h4>
            </div>
          </div>

          {/* Main Grid */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Section */}
            <div className="col-span-1 border border-pink-200 rounded-lg p-4 bg-white">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-800 text-xl font-semibold">Profile</h1>
                <button className="flex items-center gap-2 text-pink-600 border border-pink-200 px-3 py-1 rounded-lg text-base hover:bg-pink-50 transition">
                  <i className="ri-edit-line"></i>
                  Edit
                </button>
              </div>
              <div className="mt-4 flex items-center gap-4">
                <img
                  src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=YpJGPU3av2GChHRWNG2bkcVM6cg9tEI_HZOErFr6GmU="
                  alt="profile_picture"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-gray-800 font-semibold text-lg">
                    Bhavesh Mulchandani
                  </h2>
                  <h4 className="text-gray-600 text-base">
                    Computer Science Engineering
                  </h4>
                  <h4 className="text-pink-700 font-medium text-base">
                    3rd Year
                  </h4>
                </div>
              </div>
              <hr className="border-t border-gray-200 my-4" />
              <p className="text-base font-light text-gray-800">
                Passionate full-stack developer interested in AI/ML and open
                source contributions. Love building innovative solutions to
                real-world problems.
              </p>

              {/* Social Links */}
              <div className="mt-6">
                <h1 className="text-lg text-gray-800 font-semibold mb-2">
                  Social Links
                </h1>
                <div className="flex flex-wrap items-center gap-4 p-3 py-2">
                  <a
                    href="https://www.linkedin.com/in/bhavesh-mulchandani-45ba89237/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-linkedin-line text-blue-600"></i>
                  </a>
                  <a
                    href="https://github.com/BhaveshMulchandani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-300 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-github-line text-gray-600"></i>
                  </a>
                  <a
                    href="https://x.com/BhaveshMul13275"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-twitter-x-line text-blue-600"></i>
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1odhaya0X_HEieKR--A782qBIAvxPwEzO/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-orange-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-file-pdf-2-line text-orange-600"></i>
                  </a>
                  <a
                    href="https://leetcode.com/u/bhavesh_mulchandani/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-orange-100 rounded-lg p-2 transition-colors"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                      alt="LeetCode"
                      className="w-6 h-6"
                    />
                  </a>
                  <a
                    href="https://www.geeksforgeeks.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-green-100 rounded-lg p-2 transition-colors"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg"
                      alt="GFG"
                      className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Contributions and Projects */}
            <div className="col-span-2 flex flex-col justify-between">
              <div className="border border-pink-200 rounded-lg p-4 bg-white h-full">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                    <i className="ri-star-line text-3xl text-white"></i>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold text-gray-800">
                      Skills & Tools
                    </h1>
                    <h3 className="text-base text-gray-600">
                      Technical expertise and tools I work with
                    </h3>
                  </div>
                </div>
                <div className="mt-3 mx-1">
                  <div>
                    <h1 className="text-lg text-gray-600 font-semibold">Technical Skills</h1>
                    <div className=" mt-2 space-x-1 space-y-1">
                      <span className="bg-pink-50 text-pink-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-pink-50 text-pink-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-pink-50 text-pink-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-pink-50 text-pink-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-pink-50 text-pink-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h1 className="text-lg text-gray-600 font-semibold">Tools & Technologies</h1>
                    <div className=" mt-2 space-x-1 space-y-1">
                      <span className="bg-gray-50 text-gray-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-gray-50 text-gray-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-gray-50 text-gray-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-gray-50 text-gray-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                      <span className="bg-gray-50 text-gray-600 text-sm font-normal px-3 py-1 rounded-xl">Javascript</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-pink-200 rounded-lg p-4 bg-white h-full mt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <i className="ri-code-line text-pink-600 text-xl"></i>
                    <h1 className="text-xl font-semibold text-gray-800">
                    Projects
                  </h1>
                  </div>
                  <button className="flex items-center rounded-full text-2xl font-semibold text-pink-500 bg-gray-100 px-3">
                    +
                  </button>
                </div>
                <h3 className="text-base text-gray-600 mt-1">
                  Personal projects and contributions
                </h3>
                <div className="w-full bg-gray-100 rounded-lg mt-4 p-4 space-y-2">
                  <h1 className="text-gray-800 text-xl font-semibold">
                    Alumni Association Portal
                  </h1>
                  <p className="text-gray-600 text-base">Full-stack web application for online learning with real-time chat and video conferencing features.</p>
                  <div className="flex items-center space-x-4">
                    <a
                      href="https://github.com/BhaveshMulchandani/Alumni_Association"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 text-xl transition-colors"
                    >
                      <i className="ri-github-line text-gray-600"></i>
                      <span className="text-gray-600 ml-1">Code</span>
                    </a>
                    <a
                      href="https://github.com/BhaveshMulchandani/Alumni_Association"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 text-xl transition-colors"
                    >
                      <i className="ri-external-link-line text-pink-600"></i>
                      <span className="text-pink-600 ml-1">Live</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student_Profile;

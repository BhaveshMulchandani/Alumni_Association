import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const [search, setsearch] = useState("");
  return (
    <>
      <div className="w-full bg-pink-900 h-20 flex px-4 justify-around items-center fixed z-50">
        <div>
          <img src={logo} alt="logo" className="h-13" />
        </div>

        <div className="flex items-center relative">
          <i className="ri-search-2-line text-xl absolute left-3 top-1/2 -translate-y-1/2 text-pink-900"></i>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-3 py-1 rounded-md border-2 border-pink-900 outline-none text-pink-900 text-2xl "
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
        </div>

        <div>
          <ul className="flex gap-7 font-semibold text-lg text-white cursor-pointer">
            <Link to="/dashboard">
              <li className="flex flex-col justify-center items-center">
                Home
                <i class="ri-home-7-fill"></i>
              </li>
            </Link>

            <Link to="/alumni_post">
              <li className="flex flex-col justify-center items-center">
                Create_Post
                <i class="ri-add-fill"></i>
              </li>
            </Link>

            <Link to="/job">
              <li className="flex flex-col justify-center items-center">
                Job
                <i class="ri-briefcase-4-fill"></i>
              </li>
            </Link>

            <Link to="/mentorship">
              <li className="flex flex-col justify-center items-center">
                Mentorship
                <i class="ri-team-fill"></i>
              </li>
            </Link>

            <Link to="/donate">
              <li className="flex flex-col justify-center items-center">
                Donation
                <i class="ri-hand-coin-fill"></i>
              </li>
            </Link>

            <Link to="/profile">
              <li className="flex flex-col justify-center items-center">
                Profile
                <i class="ri-user-3-fill"></i>
              </li>
            </Link>
          </ul>
        </div>

        <button className="bg-white text-xl text-pink-900 border-2 border-pink-900 px-3 py-1 rounded-md flex items-center">
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
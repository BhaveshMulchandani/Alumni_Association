import React, {} from "react";
import axios from "axios";

import logo from "../assets/logo.png";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const handlelogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/logout`,

        {},

        {
          withCredentials: true,
        },
      );

      window.location.href = `${import.meta.env.VITE_STUDENT_URL}/login`;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full bg-pink-900 h-20 flex px-4 justify-around items-center fixed z-50">
        <div>
          <img src={logo} alt="logo" className="h-13" />
        </div>

        <div>
          <ul className="flex gap-7 font-semibold text-lg text-white cursor-pointer">
            <Link to="/verify_user">
              <li className="flex flex-col justify-center items-center">
                verify_user
                <i class="ri-group-line"></i>
              </li>
            </Link>

            <Link to="/event">
              <li className="flex flex-col justify-center items-center">
                Events
                <i class="ri-calendar-fill"></i>
              </li>
            </Link>

            <Link to="/job">
              <li className="flex flex-col justify-center items-center">
                Job
                <i class="ri-briefcase-4-fill"></i>
              </li>
            </Link>

            <Link to="/donate">
              <li className="flex flex-col justify-center items-center">
                Donations
                <i class="ri-hand-heart-line"></i>
              </li>
            </Link>
          </ul>
        </div>

        <button
          onClick={handlelogout}
          className="bg-white text-xl text-pink-900 border-2 border-pink-900 px-3 py-1 rounded-md flex items-center"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;

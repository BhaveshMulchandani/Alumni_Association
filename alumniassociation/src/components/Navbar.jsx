import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-400 w-full h-14 flex items-center px-4 justify-between">
        <Link to="/">
          <div className="flex-shrink-0">
            <img
              className="h-14"
              src="https://vrclist.s3.amazonaws.com/communities/profile_images/c47659b095f3dc1641e3ca0e40453b37.png"
              alt="logo"
            />
          </div>
        </Link>

        <div className="flex items-center ml-4 relative w-1/3 max-w-md">
          <i className="ri-search-2-line absolute left-3 text-blue-900 hover:text-blue-600"></i>
          <input
            className="p-2 pl-10 rounded-xl outline-none w-full"
            type="text"
            placeholder="Search here..."
          />
        </div>

        <div>
          <ul className="flex items-center space-x-4 ml-4 list-none">
            <Link to="/">
              <li className="flex flex-col items-center cursor-pointer text-blue-900 hover:text-blue-600">
                <h2 className="text-sm leading-none">
                  <i className="ri-home-7-fill"></i>
                </h2>
                <span>Home</span>
              </li>
            </Link>
            <Link to="/college">
              <li className="flex flex-col items-center cursor-pointer text-blue-900 hover:text-blue-600">
                <h2 className="text-sm leading-none">
                  <i className="ri-graduation-cap-fill"></i>
                </h2>
                <span>College</span>
              </li>
            </Link>
            <Link to="/community">
              <li className="flex flex-col items-center cursor-pointer text-blue-900 hover:text-blue-600">
                <h2 className="text-sm leading-none">
                  <i className="ri-team-fill"></i>
                </h2>
                <span>Community</span>
              </li>
            </Link>
            <Link to="/job">
              <li className="flex flex-col items-center cursor-pointer text-blue-900 hover:text-blue-600">
                <h2 className="text-sm leading-none">
                  <i className="ri-briefcase-fill"></i>
                </h2>
                <span>Job</span>
              </li>
            </Link>
            <Link to="/myaccount">
              <li className="flex flex-col items-center cursor-pointer text-blue-900 hover:text-blue-600">
                <h2 className="text-sm leading-none">
                  <i className="ri-account-circle-fill"></i>
                </h2>
                <span>My Account</span>
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex-shrink-0">
          <button className="bg-red-600 text-white text-md rounded-xl px-4 py-2 font-semibold hover:text-gray-200">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

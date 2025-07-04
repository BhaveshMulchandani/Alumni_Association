import React from "react";
import Navbar from "../components/Navbar";

const Verify_User = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-8 py-28">
        <div className=" flex flex-col space-y-2">
          <span className="text-gray-800 font-bold text-3xl">Verify Users</span>
          <span className="text-gray-600 text-lg">
            Review and approve new user registrations and manage user roles.
          </span>
        </div>

        <div className="p-6 mt-4 bg-white border border-pink-200 rounded-md">
          <div className=" flex items-center">
            <i className="ri-group-line text-black text-3xl font-medium"></i>
            <span className=" text-black text-3xl font-medium">
              User Verification
            </span>
          </div>
          <div className="mt-1">
            <span className="text-gray-600">
              Review and approve new user registrations
            </span>
          </div>
          <table className="w-full mt-6 border-collapse">
            <thead>
              <tr className=" w-full text-left text-gray-600">
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tr>
              <td colSpan="5">
                <hr className="my-2 border-gray-200" />
              </td>
            </tr>
            <tbody>
              <tr className="text-black">
                <td className="py-3">Bhavesh Mulchandani</td>
                <td className="py-3">abcd@abcd.com</td>
                <td>
                  <span className="bg-gray-100 px-3 py-1 rounded-2xl">
                    Alumni
                  </span>
                </td>
                <td className="py-3">2019</td>
                <td className="py-3">
                  <button className="bg-pink-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
                    <i className="ri-checkbox-circle-line"></i> Approve
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="5">
                  <hr className="my-2 border-gray-200" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Verify_User;

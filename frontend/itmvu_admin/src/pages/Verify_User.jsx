import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const Verify_User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/admin/pending-users", {
        withCredentials: true,
      });

      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const approveUser = async (id) => {
    try {
      await axios.put(
        `http://localhost:3000/admin/approve/${id}`,
        {},
        {
          withCredentials: true,
        },
      );

      fetchPendingUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const rejectUser = async (id) => {
    try {
      await axios.put(
        `http://localhost:3000/admin/reject/${id}`,
        {},
        {
          withCredentials: true,
        },
      );

      fetchPendingUsers();
    } catch (error) {
      console.log(error);
    }
  };
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
              {users.map((user) => (
                <React.Fragment key={user._id}>
                  <tr className="text-black">
                    <td className="py-3">{user.username}</td>

                    <td className="py-3">{user.email}</td>

                    <td>
                      <span className="bg-gray-100 px-3 py-1 rounded-2xl">
                        {user.role}
                      </span>
                    </td>

                    <td className="py-3">2019</td>

                    <td className="py-3 flex gap-2">
                      <button
                        onClick={() => approveUser(user._id)}
                        className="bg-green-600 text-white px-3 py-1 rounded-md"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => rejectUser(user._id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-md"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td colSpan="5">
                      <hr className="my-2 border-gray-200" />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Verify_User;

import React, { useState } from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";

const Job = () => {
  const [search, setsearch] = useState("");
  return (
    <>
      <Navbar_alumni />
      <div>
        <div className="flex flex-col items-center justify-center ">
          <div className="w-[85%] h-96 m-5 rounded-md flex flex-col justify-center items-center bg-red-200 gap-5">
            <span className="text-5xl font-light mt-8">
              Modernizing the job
            </span>
            <span className="text-5xl font-light mt-1">Search Experience</span>
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="w-1/2 rounded-full bg-white p-2 mt-3 outline-none "
            />
            <button className="bg-red-500 text-white rounded-md p-3 mt-2 hover:bg-red-600">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center mb-2">
          {/* Card 1 */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 w-80 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 h-10 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D"
                  alt="Ruang Guru"
                />
                <h2 className="font-semibold">Walks Wagon</h2>
              </div>
            </div>
            <h1 className="text-xl font-semibold mb-2">UI/UX Researcher</h1>
            <div className="text-gray-600 text-sm space-y-1 mb-4">
              <div className="flex justify-between">
                <span>📍Jakarta, Indonesia</span>
                <span>Full-time</span>
              </div>
              <div className="flex justify-between">
                <span>🎓Education</span>
                <span>💰$280/monthly</span>
              </div>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-full mb-2">
              Apply
            </button>
            <p className="text-xs text-blue-400 text-center">
              POSTED 2 DAY AGO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;

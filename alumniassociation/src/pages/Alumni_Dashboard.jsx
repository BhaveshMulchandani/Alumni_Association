import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Alumni_Dashboard = () => {

  const [searchresult, setsearchresult] = useState('')
  return (
    <>
      <Navbar />
      <span className="flex justify-center text-blue-400 font-semibold text-3xl mt-5">
        Welcome back Bhavesh Mulchandani
      </span>
      <div className="mt-10 w-full flex gap-4 p-5">
        <div className="bg-white flex-grow-[2] rounded-lg shadow-lg p-4 border-black border-2 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src="https://i.pinimg.com/736x/39/7f/b1/397fb1bf6d3d18ce234b5f992e401388.jpg"
              alt="profileimage"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl">Bhavesh Mulchandani</span>
              <span className="text-l">Software Engineer</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto, ipsum perferendis doloremque odit nisi dolorem harum
              quibusdam earum fugiat consequatur reprehenderit. Placeat optio in
              nisi nesciunt cupiditate assumenda quo, illum, distinctio est
              quasi doloribus eius dolor aliquid soluta suscipit architecto
              nihil esse debitis id excepturi cum maxime quaerat alias ullam?
            </p>
            <img
              className="rounded-md max-h-80 w-full object-cover"
              src="https://i.pinimg.com/736x/63/59/a7/6359a7221ee599f01f91fc56892ad99a.jpg"
              alt="postimage"
            />
          </div>
        </div>
        <div className="bg-white flex-grow rounded-lg shadow-lg p-4 border-black border-2 flex flex-col gap-4">
          <h1 className="font-semibold text-xl">Message</h1>
          <div className="flex items-center gpa-2 w-full">
            <input
            onChange={(e) => setsearchresult(e.target.value)}
              className="outline-none text-lg"
              type="text"
              placeholder="Search here..."
            />
            <i className="ri-search-2-line hover:text-blue-600"></i>
          </div>
          <div className="bg-gray-300 flex justify-between rounded-sm">
            <div className="flex">
              <img
                className="rounded-full w-10 h-10 object-cover mt-1"
                src="https://i.pinimg.com/736x/39/7f/b1/397fb1bf6d3d18ce234b5f992e401388.jpg"
                alt="profileimage"
              />
              <div>
                <h4 className="font-medium">Bhavesh Mulchandani</h4>
                <p className="font-thin text-gray-400">this is the last messge</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
            <span className="text-gray-400 text-sm">19:10</span>
            <span className="bg-blue-700 rounded-full text-white font-semibold">5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni_Dashboard;

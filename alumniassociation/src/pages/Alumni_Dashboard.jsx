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
        <div className="bg-white h-full w-[70%] rounded-lg shadow-xl p-4 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full w-16 h-16 object-cover"
              src="https://i.pinimg.com/736x/39/7f/b1/397fb1bf6d3d18ce234b5f992e401388.jpg"
              alt="profileimage"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl">Bhavesh Mulchandani</span>
              <span className="text-lg text-gray-500">Software Engineer</span>
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
              className="rounded-md max-h-80 w-full object-cover hover:scale-105 transition-transform duration-300"
              src="https://i.pinimg.com/736x/63/59/a7/6359a7221ee599f01f91fc56892ad99a.jpg"
              alt="postimage"
            />
          </div>
        </div>
        
        <div className="bg-white flex-grow rounded-lg shadow-lg p-4 h-1/2 w-[30%] border-gray-300 hover:border-gray-400 border-1 flex flex-col gap-4">
          <h1 className="font-semibold text-xl">Message</h1>
          <div className="flex justify-between items-center gap-2 w-full border rounded-md p-1 border-gray-300 pb-2">
            <input
            onChange={(e) => setsearchresult(e.target.value)}
              className="outline-none text-lg flex-grow"
              type="text"
              placeholder="Search here..."
            />
            <i className="ri-search-2-line hover:text-blue-600 cursor-pointer"></i>
          </div>
          <div className="bg-gray-100 flex justify-between rounded-md p-3 hover:bg-gray-200 transition duration-200">
            <div className="flex gap-2">
              <img
                className="rounded-full w-10 h-10 object-cover mt-1"
                src="https://i.pinimg.com/736x/39/7f/b1/397fb1bf6d3d18ce234b5f992e401388.jpg"
                alt="profileimage"
              />
              <div className="">
                <h4 className="font-medium">Bhavesh Mulchandani</h4>
                <p className="font-thin text-gray-500">this is the last messge</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
            <span className="text-gray-400 text-sm">19:10</span>
            <span className="bg-blue-700 rounded-full text-white font-semibold text-xs w-5 h-5 flex items-center justify-center">5</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alumni_Dashboard;

import React from 'react'
import Navbar_student from "../componenets/Navbar_student";
import Post from "../componenets/Post";

const Student_Dashboard = () => {
  return (
    <>
      <Navbar_student />
      <div>
        <h1 className="text-pink-600 flex justify-center mt-5 text-3xl font-semibold">
          Welcome Back Bhavesh Mulchandani
        </h1>

        <div className="flex mt-10 ml-10 mr-10 gap-5">
          {/* post section */}
          <Post/>

          {/* //chat section */}
          <div className="w-[35%] p-5 border-l overflow-y-auto bg-gray-100 rounded-md">
            <div>
              <h1 className="font-bold text-2xl p-3">Messages</h1>
              <div className="relative mt-3 w-full">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="w-full p-2 pr-10 rounded-md outline-none font-medium"
                />
                <i className="ri-search-2-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between mt-5 p-5 hover:bg-gray-300 rounded-md">
                  <div className="flex">
                    <img
                      className="rounded-full w-16 h-16 object-cover"
                      src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                      alt="profile pic"
                    />
                    <div className="flex flex-col ml-2">
                      <h1 className="font-medium">Bhavesh Mulchandani</h1>
                      <h3 className="font-extralight">last message</h3>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <h3>11:42</h3>
                    <h2 className="flex justify-center items-center rounded-full w-6 h-6 bg-pink-600 text-white font-light mt-1">
                      5
                    </h2>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student_Dashboard
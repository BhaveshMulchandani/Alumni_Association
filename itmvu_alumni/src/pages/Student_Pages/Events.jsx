import React from "react";
import Navbar_student from "../../componenets/Navbar_student";

const Events = () => {
  return (
    <>
      <Navbar_student />
      <div className="h-screen bg-gray-50 py-28 px-6">
        <div className="max-w-full mx-auto">
          <div className="px-10 space-y-2">
            <h1 className="text-3xl text-gray-800 font-bold">
              Upcoming Events
            </h1>
            <h4 className="text-lg text-gray-600">
              Discover exciting events, workshops, and opportunities happening
              on campus.
            </h4>
          </div>
          <div className=" px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-600 font-medium text-sm rounded-full p-2">college event</span>
                <i className="ri-price-tag-3-line transform scale-x-[-1]  text-gray-600 font-medium text-xl"></i>
              </div>
              <div className="mt-2 space-x-1 space-y-3">
                <h1 className="text-gray-800 text-xl font-semibold">Annual Tech Summit 2025</h1>
                <div className="flex gap-2"><i className="ri-calendar-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">March 15, 2024</h4></div>
                <div className="flex gap-2"><i className="ri-time-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">10:00 AM - 4:00 PM</h4></div>
                <div className="flex gap-2"><i class="ri-map-pin-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">Main Auditorium</h4></div>
                <p className="text-gray-600 leading-relaxed text-base font-light">Join us for an exciting day of technology presentations, networking opportunities, and innovation showcases from industry</p>
              </div>
              <button className=" mt-4 p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">Register Now</button>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100 text-green-600 font-medium text-sm rounded-full p-2">Hackathon</span>
                <i className="ri-price-tag-3-line transform scale-x-[-1]  text-gray-600 font-medium text-xl"></i>
              </div>
              <div className="mt-2 space-x-1 space-y-3">
                <h1 className="text-gray-800 text-xl font-semibold">Annual Tech Summit 2025</h1>
                <div className="flex gap-2"><i className="ri-calendar-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">March 15, 2024</h4></div>
                <div className="flex gap-2"><i className="ri-time-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">10:00 AM - 4:00 PM</h4></div>
                <div className="flex gap-2"><i class="ri-map-pin-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">Main Auditorium</h4></div>
                <p className="text-gray-600 leading-relaxed text-base font-light">Join us for an exciting day of technology presentations, networking opportunities, and innovation showcases from industry</p>
              </div>
              <button className=" mt-4 p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">Register Now</button>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="bg-violet-100 text-purple-600 font-medium text-sm rounded-full p-2">workshop</span>
                <i className="ri-price-tag-3-line transform scale-x-[-1]  text-gray-600 font-medium text-xl"></i>
              </div>
              <div className="mt-2 space-x-1 space-y-3">
                <h1 className="text-gray-800 text-xl font-semibold">Annual Tech Summit 2025</h1>
                <div className="flex gap-2"><i className="ri-calendar-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">March 15, 2024</h4></div>
                <div className="flex gap-2"><i className="ri-time-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">10:00 AM - 4:00 PM</h4></div>
                <div className="flex gap-2"><i class="ri-map-pin-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">Main Auditorium</h4></div>
                <p className="text-gray-600 leading-relaxed text-base font-light">Join us for an exciting day of technology presentations, networking opportunities, and innovation showcases from industry</p>
              </div>
              <button className=" mt-4 p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">Register Now</button>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="bg-pink-100 text-pink-600 font-medium text-sm rounded-full p-2">competition</span>
                <i className="ri-price-tag-3-line transform scale-x-[-1]  text-gray-600 font-medium text-xl"></i>
              </div>
              <div className="mt-2 space-x-1 space-y-3">
                <h1 className="text-gray-800 text-xl font-semibold">Annual Tech Summit 2025</h1>
                <div className="flex gap-2"><i className="ri-calendar-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">March 15, 2024</h4></div>
                <div className="flex gap-2"><i className="ri-time-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">10:00 AM - 4:00 PM</h4></div>
                <div className="flex gap-2"><i class="ri-map-pin-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">Main Auditorium</h4></div>
                <p className="text-gray-600 leading-relaxed text-base font-light">Join us for an exciting day of technology presentations, networking opportunities, and innovation showcases from industry</p>
              </div>
              <button className=" mt-4 p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">Register Now</button>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="bg-orange-100 text-orange-600 font-medium text-sm rounded-full p-2">seminar</span>
                <i className="ri-price-tag-3-line transform scale-x-[-1]  text-gray-600 font-medium text-xl"></i>
              </div>
              <div className="mt-2 space-x-1 space-y-3">
                <h1 className="text-gray-800 text-xl font-semibold">Annual Tech Summit 2025</h1>
                <div className="flex gap-2"><i className="ri-calendar-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">March 15, 2024</h4></div>
                <div className="flex gap-2"><i className="ri-time-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">10:00 AM - 4:00 PM</h4></div>
                <div className="flex gap-2"><i class="ri-map-pin-line text-pink-600 text-base"></i><h4 className="text-gray-600 text-base">Main Auditorium</h4></div>
                <p className="text-gray-600 leading-relaxed text-base font-light">Join us for an exciting day of technology presentations, networking opportunities, and innovation showcases from industry</p>
              </div>
              <button className=" mt-4 p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;

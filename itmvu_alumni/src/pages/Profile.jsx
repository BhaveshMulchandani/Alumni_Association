import React from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";
import Post from "../componenets/Post";

const Profile = () => {
  return (
    <>
      <Navbar_alumni />

      <div className="p-10 flex items-center gap-10 relative">
        <button className="absolute top-3 right-16 bg-pink-700 text-white px-4 py-2 rounded-md hover:bg-pink-900 transition">
          Edit Profile
        </button>
        <img
          className="h-52 w-52 rounded-full object-cover"
          src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
          alt="profilepic"
        />
        <div>
          <h1 className="font-bold text-4xl">Bhavesh Mulchandani</h1>
          <h3 className="font-light text-xl">Software Enginner</h3>
          <h3 className="font-light text-xl">Amazone</h3>
        </div>
      </div>

      <hr className="h-2 color-black"/>

      <h1 className="flex justify-center text-4xl text-red-700 font-bold">edit to make student profile page</h1>
      <h1 className="flex justify-center text-4xl text-red-700 font-thin">post is not valid right now</h1>


      <div className="mt-10 flex justify-center">
        <Post/>
      </div>
    </>
  );
};

export default Profile;

import React, { useState } from "react";
import Navbar_alumni from "../componenets/Navbar_alumni";

const Create_Post = () => {
  const [message, setmessage] = useState("");
  const [file, setfile] = useState(null);

  return (
    <>
      <Navbar_alumni />
      <div className="h-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg flex flex-col gap-4 h-96 w-[30rem]">
          <h1 className="text-3xl font-bold text-pink-800 flex justify-center">
            Create Your Posts
          </h1>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-4"
            onSubmit={(e) => {
              e.preventDefault();

              setmessage('')
              setfile(null)
            }}
          >
            <textarea
              placeholder="Enter description here..."
              className="w-full h-20 outline-none text-xl p-2 border border-pink-300 rounded"
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            />

            <input 
            type="file" 
            className="w-full p-1 rounded outline-none"
            onChange={(e)=>{setfile(e.target.files[0])}}
            />

            <button
              type="submit"
              className=" mt-4 bg-pink-500 hover:bg-pink-600 cursor-pointer p-2 text-white rounded-lg text-xl"
            >
              Click to Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create_Post;

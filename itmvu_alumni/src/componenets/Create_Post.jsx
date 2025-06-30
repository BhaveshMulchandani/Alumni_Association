import React, { useState } from "react";

const Create_Post = () => {
  const [message, setmessage] = useState("");
  const [file, setfile] = useState(null);

  return (
    <>
      <div className="h-screen w-full bg-gray-50 px-96 py-28">
        <div className="space-y-1">
          <h1 className="text-gray-800 font-bold text-3xl">Create a Post</h1>
          <h4 className="text-gray-600 text-base">
            Share your thoughts, achievements, or questions with your alumni
            network.
          </h4>
        </div>
        <div className="bg-white border border-pink-200 hover:border-pink-300 p-6 rounded-lg flex flex-col gap-4 w-full mt-10">
          <h4 className="text-base font-medium text-gray-600">
            What's on your mind?
          </h4>
          <form
            action=""
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();

              setmessage("");
              setfile(null);
            }}
          >
            <textarea
              placeholder="Enter description here..."
              className="w-full h-28 text-base p-2 border border-pink-200 hover:border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-400 rounded-md outline-none"
              value={message}
              onChange={(e) => {
                setmessage(e.target.value);
              }}
            />
            <div className="mt-6 space-y-2">
              <span className="text-gray-600 text-base font-medium">
                Add an image
              </span>
              <input
                type="file"
                className="w-full"
                onChange={(e) => {
                  setfile(e.target.files[0]);
                }}
              />
            </div>

            <div className="mt-10 flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-pink-500 cursor-pointer px-8 py-2 text-white rounded-lg text-base font-semibold hover:from-pink-500 hover:to-pink-600 transition"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create_Post;

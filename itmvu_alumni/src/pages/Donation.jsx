import Navbar_alumni from "../componenets/Navbar_alumni";

const Donation = () => {
  return (
    <>
      <Navbar_alumni />
      <div className="p-8 py-28 bg-gray-50 h-screen">
        <div className="max-w-full mx-auto">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-heart-line text-3xl text-white"></i>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Make a Difference Today
              </h1>
              <p className="text-lg text-gray-600">
                Support your college and future students by donating generously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;

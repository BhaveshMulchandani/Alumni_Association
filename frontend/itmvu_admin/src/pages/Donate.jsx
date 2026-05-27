import  React,{useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const Donate = () => {
  const [donations, setdonations] = useState([]);
  const [totaldonation, settotaldonation] = useState(0);

  const fetchdonations = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/donation/getalldonations`,

        {
          withCredentials: true,
        },
      );

      setdonations(response.data.donations);

      settotaldonation(response.data.totaldonation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdonations();
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-8 py-28">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-2">
            <h1 className="text-gray-800 font-bold text-3xl">Donations</h1>
            <h4 className="text-gray-600 text-base">
              Track donations and manage fundraising campaigns.
            </h4>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 mt-4 border border-gray-300">
            <span className="text-gray-800 text-3xl font-medium">
              <i class="ri-money-rupee-circle-line"></i>Donations
            </span>
            <div className="mt-6 p-6 rounded-md bg-pink-50 border border-pink-200 hover:border-pink-300">
              <div className="flex flex-col items-center justify-center space-y-1">
                <span className="text-pink-600 font-bold text-3xl">
                  {totaldonation}
                </span>
                <span className="text-gray-600 text-base">Total Donations</span>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-md bg-white border border-gray-300 shadow-md">
            <div className=" flex flex-col space-y-1">
              <span className="font-medium text-gray-800 text-2xl">
                Donation History
              </span>
              <span className="text-gray-600 text-base">
                Recent donations from alumni and supporters
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="mt-3 w-full table-auto text-left border-collapse">
                <thead>
                  <tr className="text-gray-600 font-medium">
                    <th>Donor Name</th>
                    <th>Amount</th>
                    <th>Event</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tr>
                  <td colSpan="5">
                    <hr className="my-3 border-gray-200" />
                  </td>
                </tr>

                <tbody>
                  {donations.map((donation) => (
                    <React.Fragment key={donation._id}>
                      <tr>
                        <td className="text-black py-3 font-medium">
                          {donation.donorName?.username}
                        </td>

                        <td className="text-pink-600 font-medium py-3">
                          ₹{donation.price?.amount}
                        </td>

                        <td>{donation.donationtype}</td>

                        <td className="py-3">
                          <span className="text-gray-600">
                            {new Date(donation.createdAt).toDateString()}
                          </span>
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
        </div>
      </div>
    </>
  );
};

export default Donate;

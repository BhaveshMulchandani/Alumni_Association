import { useState, useEffect } from "react";
import axios from "axios";

const Events = () => {
  const [events, setevents] = useState([]);
  useEffect(() => {
    fetchevents();
  }, []);

  const fetchevents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/event/all`,
      );

      setevents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 px-16 py-10">
        <div className="max-w-full mx-auto">
          <div className="space-y-2">
            <h1 className="text-3xl text-gray-800 font-bold">
              Upcoming Events
            </h1>
            <h4 className="text-lg text-gray-600">
              Discover exciting events, workshops, and opportunities happening
              on campus.
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
            {events.map((event) => (
              <div key={event._id} className="bg-white rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="bg-pink-100 text-pink-600 font-medium text-sm rounded-full p-2">
                    {event.eventtype}
                  </span>
                </div>

                <div className="mt-2 space-y-3">
                  <h1 className="text-gray-800 text-xl font-semibold">
                    {event.eventname}
                  </h1>

                  <div className="flex gap-2">
                    <i className="ri-calendar-line text-pink-600"></i>

                    <h4 className="text-gray-600">
                      {new Date(event.eventdate).toDateString()}
                    </h4>
                  </div>

                  <div className="flex gap-2">
                    <i className="ri-time-line text-pink-600"></i>

                    <h4 className="text-gray-600">
                      {event.starttime}

                      {event.endtime && ` - ${event.endtime}`}
                    </h4>
                  </div>

                  <div className="flex gap-2">
                    <i className="ri-map-pin-line text-pink-600"></i>

                    <h4 className="text-gray-600">{event.location}</h4>
                  </div>

                  <p className="text-gray-600">{event.description}</p>
                </div>

                {event.url && (
                  <a href={event.url} target="_blank" className="block mt-4">
                    <button className="p-1 font-medium text-white w-full bg-gradient-to-t from-pink-400 to-pink-500 rounded-md">
                      Register Now
                    </button>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;

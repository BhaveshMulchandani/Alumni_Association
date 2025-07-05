import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Job = () => {
  const [jobtitle, setjobtitle] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [location, setlocation] = useState("");
  const [jobtype, setjobtype] = useState("Full-Time");
  const [experience, setexperience] = useState(0);
  const [salary, setsalary] = useState(10000);
  const [description, setdescription] = useState("");
  const [url, seturl] = useState("");
  return (
    <>
      <Navbar />
      <div className="mx-auto px-6 py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
              <i className="ri-briefcase-3-line text-3xl text-white"></i>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Post New Job Opportunity
              </h2>
              <p className="text-gray-600 font-thin">
                Share career opportunities with students and fellow alumni
              </p>
            </div>
          </div>

          <div className="mt-5 bg-white rounded-lg border border-pink-100">
            <div className="p-2 space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Job Details
              </h2>

              <form
                action=""
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="flex flex-col space-y-2">
                  <label className="text-gray-700 font-medium">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                    placeholder="e.g software engineer,ml engineer..."
                    value={jobtitle}
                    onChange={(e) => {
                      setjobtitle(e.target.value);
                    }}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-700 font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                    placeholder="e.g google,microsoft,meta..."
                    value={companyname}
                    onChange={(e) => {
                      setcompanyname(e.target.value);
                    }}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-700 font-medium">
                      Location *
                    </label>
                    <input
                      type="text"
                      className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                      placeholder="e.g New York,NY or Remote..."
                      value={location}
                      onChange={(e) => {
                        setlocation(e.target.value);
                      }}
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-700 font-medium">
                      Job Type*
                    </label>
                    <select
                      className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                      name="Select job type"
                      value={jobtype}
                      onChange={(e) => setjobtype(e.target.value)}
                    >
                      <option value="Full-Time">Full-Time</option>
                      <option value="Internship">Internship</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-700 font-medium">
                      Experience Required *
                    </label>
                    <input
                      type="number"
                      className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                      placeholder="e.g 2 (for 2 years of experience)"
                      value={experience}
                      onChange={(e) => setexperience(Number(e.target.value))}
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-700 font-medium">
                      Salary Range (Optional)
                    </label>
                    <input
                      type="number"
                      className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                      placeholder="e.g $80,000 - $120,000"
                      value={salary}
                      onChange={(e) => setsalary(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-700 font-medium">
                    Job Description *
                  </label>
                  <textarea
                    className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                    placeholder="Describe the role,responsibilities,requirements, and what makes this opportunity special..."
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label className="text-gray-700 font-medium">
                    Application Link *
                  </label>
                  <input
                    type="url"
                    className="outline-none border border-pink-200 focus:border-pink-400 rounded-lg p-3"
                    placeholder="https://company.com/careers/job-id"
                    value={url}
                    onChange={(e) => seturl(e.target.value)}
                  />
                </div>

                <div className="flex justify-end space-x-4 pt-6">
                  <button className="border border-pink-200 text-gray-600 hover:bg-pink-50 rounded-md p-2 text-base">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-400 to bg-pink-500 hover:to-pink-600 text-white px-8 rounded-lg text-base"
                  >
                    Post Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;

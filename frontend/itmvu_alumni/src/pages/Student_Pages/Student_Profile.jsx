import { useContext } from "react";
import Profilecontext from "../../context/Profilecontext.jsx";

const Student_Profile = () => {
  const { profile, loading } = useContext(Profilecontext);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-600">Loading profile...</h1>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl text-gray-600">No profile loaded yet</h1>
      </div>
    );
  }

  const profileImage =
    profile.image ||
    profile.avatar ||
    profile.user?.avatar ||
    "https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.webp?a=1&b=1&s=612x612&w=0&k=20&c=YpJGPU3av2GChHRWNG2bkcVM6cg9tEI_HZOErFr6GmU=";

  const resumeLink = profile.resume || profile.socialLinks?.resume;
  const socialLinkCount = [
    profile.socialLinks?.linkedin,
    profile.socialLinks?.github,
    profile.socialLinks?.twitter,
    resumeLink,
  ].filter(Boolean).length;

  return (
    <div className="p-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
            <i className="ri-user-line text-3xl text-white"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
            <h4 className="text-base text-gray-600 mt-2">
              Showcase your skills and connect with the alumni network
            </h4>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Section */}
          <div className="col-span-1 border border-pink-200 rounded-lg p-4 bg-white">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-gray-800 text-xl font-semibold">Profile</h1>
              <button className="flex items-center gap-2 text-pink-600 border border-pink-200 px-3 py-1 rounded-lg text-base hover:bg-pink-50 transition">
                <i className="ri-edit-line"></i>
                Edit
              </button>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <img
                src={profileImage}
                alt="profile_picture"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-gray-800 font-semibold text-lg">
                  {profile.user?.username || "Student"}
                </h2>
                <h4 className="text-gray-600 text-base">
                  {profile.department || "Department not set"}
                </h4>
                <h4 className="text-pink-700 font-medium text-base">
                  {profile.user?.passingyear
                    ? `Class of ${profile.user?.passingyear}`
                    : "Passing year not set"}
                </h4>
              </div>
            </div>
            <hr className="border-t border-gray-200 my-4" />
            <p className="text-base font-light text-gray-800">
              {profile.summary ||
                `I am ${profile.user?.username || "a student"} studying ${profile.department || "a department"}.`}
            </p>

            {/* Social Links */}
            <div className="mt-6">
              <h1 className="text-lg text-gray-800 font-semibold mb-2">
                Social Links
              </h1>
              <div className="flex flex-wrap items-center gap-4 p-3 py-2">
                {profile.socialLinks?.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-linkedin-line text-blue-600"></i>
                  </a>
                )}
                {profile.socialLinks?.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-300 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-github-line text-gray-600"></i>
                  </a>
                )}
                {profile.socialLinks?.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-blue-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-twitter-x-line text-blue-600"></i>
                  </a>
                )}
                {resumeLink && (
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-orange-100 rounded-lg p-2 text-xl transition-colors"
                  >
                    <i className="ri-file-pdf-2-line text-orange-600"></i>
                  </a>
                )}
                {!socialLinkCount && (
                  <span className="text-gray-500 text-sm">
                    No social links added yet.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Contributions and Projects */}
          <div className="col-span-2 flex flex-col justify-between">
            <div className="border border-pink-200 rounded-lg p-4 bg-white h-full">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
                  <i className="ri-star-line text-3xl text-white"></i>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-800">
                    Skills & Tools
                  </h1>
                  <h3 className="text-base text-gray-600">
                    Technical expertise and tools I work with
                  </h3>
                </div>
              </div>
              <div className="mt-3 mx-1">
                <div>
                  <h1 className="text-lg text-gray-600 font-semibold">
                    Technical Skills
                  </h1>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.skills?.length > 0 ? (
                      profile.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-pink-50 text-pink-600 px-3 py-1 rounded-xl text-sm"
                        >
                          {skill}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">No skills added yet.</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-pink-200 rounded-lg p-4 bg-white h-full mt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <i className="ri-code-line text-pink-600 text-xl"></i>
                  <h1 className="text-xl font-semibold text-gray-800">
                    Projects
                  </h1>
                </div>
                <button className="flex items-center rounded-full text-2xl font-semibold text-pink-500 bg-gray-100 px-3">
                  +
                </button>
              </div>
              <h3 className="text-base text-gray-600 mt-1">
                Personal projects and contributions
              </h3>

              {profile.projects?.length > 0 ? (
                profile.projects.map((p, i) => (
                  <div
                    key={i}
                    className="w-full bg-gray-100 rounded-lg mt-4 p-4 space-y-2"
                  >
                    <h1 className="text-gray-800 text-xl font-semibold">
                      {p.title}
                    </h1>
                    <div className="flex gap-4 mt-2">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 text-xl transition-colors"
                        >
                          Code
                        </a>
                      )}
                      {p.liveLink && (
                        <a
                          href={p.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-600 text-xl transition-colors"
                        >
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="w-full bg-gray-100 rounded-lg mt-4 p-4 text-gray-600">
                  No projects added yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_Profile;

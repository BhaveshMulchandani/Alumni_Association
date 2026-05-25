import { useContext } from "react";
import Profilecontext from "../../context/Profilecontext";

const Profile = () => {
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

  const donationsCount = profile.donations?.length ?? 0;
  const jobPostCount = profile.jobPosts?.length ?? 0;
  const mentorshipCount = profile.mentorships?.length ?? 0;
  const totalDonations = profile.totalDonations ?? (donationsCount ? donationsCount * 1000 : 0);

  return (
    <>
      <div className="p-8 bg-gradient-to-br from-pink-50 via-white to-pink-50 h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center">
              <i className="ri-user-line text-3xl text-white"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
              <h4 className="text-base text-gray-600 mt-2">
                Your professional profile and contributions
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-6 gap-4">
            <div className="border border-pink-200 rounded-lg p-4">
              <div className="flex items-center justify-between w-full">
                <h1 className="text-gray-800 text-xl font-semibold">Profile</h1>
                <button className="flex items-center gap-2 text-pink-600 border border-pink-200 px-3 py-1 rounded-lg text-xl hover:bg-pink-50 transition">
                  <i className="ri-edit-line text-base"></i>
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
                    {profile.user?.username || "Unnamed User"}
                  </h2>
                  <h4 className="text-gray-600 text-base">Passing Year</h4>
                  <h4 className="text-gray-700 font-medium text-base">
                    {profile.user?.passingyear || "N/A"}
                  </h4>
                </div>
              </div>
              <div className="mt-2">
                <div className="p-3 py-2">
                  <h4 className="text-xl text-gray-800 font-medium">
                    Current Company
                  </h4>
                  <div className="flex items-center">
                    <i className="ri-building-line text-base text-gray-500"></i>
                    <h4 className="text-base text-gray-600">{profile.company || "Not added"}</h4>
                  </div>
                </div>
                <div className="p-3 py-2">
                  <h4 className="text-xl text-gray-800 font-medium">Role</h4>
                  <div className="flex items-center">
                    <i className="ri-briefcase-3-line text-base text-gray-500"></i>
                    <h4 className="text-base text-gray-600">
                      {profile.designation || "Not added"}
                    </h4>
                  </div>
                </div>
                <div className="p-3 py-2">
                  <h4 className="text-xl text-gray-800 font-medium">
                    Location
                  </h4>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-base text-gray-500"></i>
                    <h4 className="text-base text-gray-600">{profile.location || "Not added"}</h4>
                  </div>
                </div>
                <hr className="border-t border-gray-200 mt-2 mb-2" />
                <div className="px-3">
                  <h1 className="text-base text-gray-600 font-medium mb-2">
                    Social Links
                  </h1>
                  <div className="flex items-center gap-4 p-3 py-2">
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
                    {!profile.socialLinks?.linkedin &&
                      !profile.socialLinks?.github &&
                      !profile.socialLinks?.twitter && (
                        <span className="text-gray-500 text-sm">
                          No social links added yet.
                        </span>
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div className="border border-pink-200 rounded-lg  p-4">
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold text-gray-800">
                    Contributions
                  </h1>
                  <h3 className="text-base text-gray-600">
                    Your impact on the community
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <div className="bg-pink-50 flex flex-col items-center justify-center rounded-lg p-3">
                    <i className="ri-heart-line text-pink-500 font-bold text-3xl"></i>
                    <span className="text-pink-600 font-semibold text-2xl">
                      {totalDonations ? `₹${totalDonations}` : "0"}
                    </span>
                    <span className="text-gray-600 text-xl">
                      Total Donations
                    </span>
                  </div>
                  <div className="bg-emerald-100 flex flex-col items-center justify-center rounded-lg p-3">
                    <i className="ri-briefcase-3-line text-emerald-500 font-bold text-3xl"></i>
                    <span className="text-emerald-600 text-2xl font-semibold">
                      {jobPostCount}
                    </span>
                    <span className="text-gray-600 text-xl">Job Posts</span>
                  </div>
                  <div className="bg-blue-100 flex flex-col items-center justify-center rounded-lg p-3">
                    <i className="ri-group-line text-blue-500 font-bold text-2xl"></i>
                    <span className="text-blue-600 text-2xl font-semibold">
                      {mentorshipCount}
                    </span>
                    <span className="text-gray-600 text-xl">Mentorship</span>
                  </div>
                </div>
              </div>
              <div className="border border-pink-200 rounded-lg p-4 mt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl font-semibold text-gray-800">
                      Projects
                    </h1>
                    <button className=" flex items-center rounded-full text-3xl font-semibold text-pink-500 bg-gray-100">
                      +
                    </button>
                  </div>
                  <h3 className="text-base text-gray-600">
                    Personal projects and contributions
                  </h3>
                </div>
                {profile.projects?.length > 0 ? (
                  profile.projects.map((p, i) => (
                    <div key={i} className="w-full bg-gray-100 rounded-lg mt-4 p-4 space-y-2">
                      <h1 className="text-gray-800 text-xl font-semibold">{p.title}</h1>
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
    </>
  );
};

export default Profile;

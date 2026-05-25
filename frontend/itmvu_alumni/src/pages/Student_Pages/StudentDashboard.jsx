import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Profilecontext from "../../context/Profilecontext";

const StudentDashboard = () => {
  const { profile } = useContext(Profilecontext);
  const [jobs, setJobs] = useState([]);
  const [mentors, setMentors] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [jobsRes, mentorsRes, postsRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/showjob`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/mentorship/availablementors`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/allposts`, {
            withCredentials: true,
          }),
        ]);

        setJobs(jobsRes.data.jobs || []);
        setMentors(mentorsRes.data.mentors || []);
        setRecentPosts((postsRes.data.posts || []).slice(0, 2));
      } catch (err) {
        console.error("Student dashboard fetch error:", err);
        setError("Failed to load dashboard data. Please refresh.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const uniqueAlumniNetworkCount = new Set(
    jobs.map((job) => job.postedby?._id || job.postedby).filter(Boolean),
  ).size;

  const displayedJobs = jobs.slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <main className="flex-1 p-8">
        <div className="max-w-7xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back, {profile?.user?.username || "Student"}!
            </h2>
            <p className="text-gray-600">
              Stay connected with your alumni network and discover new
              opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="dashboard-card text-center border border-pink-100 rounded-lg bg-white p-4">
              <div className="text-3xl font-bold text-pink-500 mb-2">
                {loading ? "..." : jobs.length}
              </div>
              <div className="text-gray-500">Available Jobs</div>
            </div>
            <div className="dashboard-card text-center border border-pink-100 rounded-lg bg-white p-4">
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {loading ? "..." : mentors.length}
              </div>
              <div className="text-gray-500">Mentor Connections</div>
            </div>
            <div className="dashboard-card text-center border border-pink-100 rounded-lg bg-white p-4">
              <div className="text-3xl font-bold text-green-500 mb-2">
                {loading ? "..." : uniqueAlumniNetworkCount}
              </div>
              <div className="text-gray-500">Alumni Network</div>
            </div>
          </div>

          <div className="dashboard-card mb-8 border rounded-lg bg-white border-pink-100 p-6 ">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Recent Activity
            </h3>
            {error ? (
              <div className="text-red-600">{error}</div>
            ) : (
              <div className="space-y-4">
                {loading ? (
                  <div className="text-gray-500">Loading activity...</div>
                ) : recentPosts.length > 0 ? (
                  recentPosts.map((post) => {
                    const initials = (post.user?.username || "U")
                      .split(" ")
                      .map((name) => name[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase();
                    return (
                      <div
                        key={post._id}
                        className="flex items-start space-x-4 p-4 bg-pink-50 rounded-lg"
                      >
                        <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                          {initials}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">
                            {post.user?.username || "Alumni"}
                          </div>
                          <div className="text-gray-600 text-sm mb-1">
                            {post.caption?.slice(0, 80) || "Shared a new update"}
                          </div>
                          <div className="text-gray-500 text-xs mt-1">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-gray-500">No recent activity yet.</div>
                )}
              </div>
            )}
          </div>

          <div className="dashboard-card border rounded-lg bg-white border-pink-100 p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Recommended Jobs
            </h3>
            <div className="space-y-4">
              {loading ? (
                <div className="text-gray-500">Loading jobs...</div>
              ) : displayedJobs.length > 0 ? (
                displayedJobs.map((job) => (
                  <div
                    key={job._id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {job.jobtitle}
                      </h4>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-pink-500 text-white hover:bg-pink-600 px-4 py-2">
                        Apply Now
                      </button>
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                      {job.companyname} • {job.location}
                    </div>
                    <div className="text-gray-500 text-sm">
                      Posted by: {job.postedby?.username || "Alumni"} (Class of {job.postedby?.passingyear || "N/A"})
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500">No jobs available right now.</div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;

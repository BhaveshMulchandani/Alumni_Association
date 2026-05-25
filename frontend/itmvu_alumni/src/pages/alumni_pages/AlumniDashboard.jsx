import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Profilecontext from "../../context/Profilecontext";
import {
  GraduationCap,
  Home,
  User,
  PlusCircle,
  Briefcase,
  Users,
  Heart,
  MessageCircle,
  LogOut,
} from "lucide-react";

const AlumniDashboard = () => {
  const { profile, loading: profileLoading } = useContext(Profilecontext);
  const [jobsPosted, setJobsPosted] = useState(0);
  const [mentorshipRequests, setMentorshipRequests] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);
  const [dashboardLoading, setDashboardLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      if (!profile) {
        setDashboardLoading(false);
        return;
      }

      try {
        const [donationRes, jobRes, mentorshipRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/donation/mydonations`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/showjob`, {
            withCredentials: true,
          }),
          axios.get(`${import.meta.env.VITE_BACKEND_URL}/mentorship/requests`, {
            withCredentials: true,
          }),
        ]);

        const fetchedDonations = donationRes.data.donations || [];
        setTotalDonations(
          fetchedDonations.reduce(
            (sum, item) => sum + (item.price?.amount ?? 0),
            0,
          ),
        );

        const fetchedJobs = jobRes.data.jobs || [];
        const currentUserId = profile.user?._id || profile.user;
        setJobsPosted(
          fetchedJobs.filter(
            (job) => job.postedby?._id === currentUserId || job.postedby === currentUserId,
          ).length,
        );

        setMentorshipRequests(mentorshipRes.data.requests || []);
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      } finally {
        setDashboardLoading(false);
      }
    };

    fetchDashboardStats();
  }, [profile]);

  const acceptedMentorships = mentorshipRequests.filter(
    (request) => request.status === "accepted",
  ).length;
  const pendingRequestsCount = mentorshipRequests.filter(
    (request) => request.status === "pending",
  ).length;
  const networkConnections =
    (profile?.projects?.length ?? 0) +
    Object.keys(profile?.socialLinks || {}).length;

  const getTimeAgo = (dateString) => {
    if (!dateString) return "just now";
    const postDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - postDate) / 1000);
    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
    ];

    for (let interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  };

  if (profileLoading || dashboardLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="flex h-screen items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="inline-block animate-spin">⏳</div>
            <div className="mt-3 text-xl">Loading dashboard...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="flex">
        <main className="flex-1 p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, Alumni!</h2>
              <p className="text-gray-600">Make a difference in students&apos; lives and stay connected with your alma mater.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4 mb-8">
              <div className="rounded-3xl border border-pink-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-pink-500 mb-2">
                  {acceptedMentorships}
                </div>
                <div className="text-gray-600">Students Mentored</div>
              </div>
              <div className="rounded-3xl border border-pink-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  {jobsPosted}
                </div>
                <div className="text-gray-600">Jobs Posted</div>
              </div>
              <div className="rounded-3xl border border-pink-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-500 mb-2">
                  ₹{totalDonations.toLocaleString()}
                </div>
                <div className="text-gray-600">Total Donations</div>
              </div>
              <div className="rounded-3xl border border-pink-200 bg-white p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  {networkConnections}
                </div>
                <div className="text-gray-600">Network Connections</div>
              </div>
            </div>

            <section className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {mentorshipRequests.length > 0 ? (
                  mentorshipRequests.slice(0, 2).map((request) => {
                    const initials = request.student?.username
                      ? request.student.username
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()
                      : "ST";

                    return (
                      <div
                        key={request._id}
                        className="flex items-start gap-4 rounded-3xl bg-slate-50 p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-sm font-semibold text-white">
                          {initials}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-800">
                            {request.student?.username || "Student"}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {request.topic
                              ? `Requested mentorship in ${request.topic}`
                              : request.description || "New mentorship activity"}
                          </div>
                          <div className="text-gray-500 text-xs mt-1">
                            {getTimeAgo(request.createdAt)}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="rounded-3xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center text-gray-600">
                    No recent activity yet. Your latest mentorship requests will appear here.
                  </div>
                )}
              </div>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Post a Job Opportunity</h3>
                <p className="text-gray-600 mb-4">Help students find their next career opportunity by posting job openings from your company.</p>
                <Link
                  to="/post-new-job"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  Post New Job
                </Link>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Mentorship Requests</h3>
                <p className="text-gray-600 mb-4">
                  {pendingRequestsCount} student{pendingRequestsCount === 1 ? "" : "s"} currently waiting for mentorship. Help guide the next generation!
                </p>
                <Link
                  to="/mentorship"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  View Requests
                </Link>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Share Professional Update</h3>
                <p className="text-gray-600 mb-4">Share your latest achievements, career moves, or insights with the community.</p>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  Create Update
                </button>
              </div>

              <div className="rounded-3xl border border-pink-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Your Alma Mater</h3>
                <p className="text-gray-600 mb-4">Make a donation to support current students and university programs.</p>
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center rounded-full bg-pink-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  Make Donation
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniDashboard;

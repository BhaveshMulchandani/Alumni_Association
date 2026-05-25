import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  GraduationCap,
  Users,
  Briefcase,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  const [jobsCount, setJobsCount] = useState(0);
  const [alumniEmployers, setAlumniEmployers] = useState(0);
  const [jobLoading, setJobLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/job/showjob`);
        const jobs = response.data.jobs || [];
        setJobsCount(jobs.length);
        const uniqueEmployers = new Set(
          jobs.map((job) => job.postedby?._id || job.postedby).filter(Boolean),
        );
        setAlumniEmployers(uniqueEmployers.size);
      } catch (error) {
        console.error("Failed to load job stats:", error);
      } finally {
        setJobLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Alumni Connect
                </h1>
                <p className="text-sm text-gray-500">University Portal</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground text-gray-600 hover:text-pink-600">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-pink-500 text-white hover:bg-pink-600 p-2">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Connect with Your
              <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Alumni Network
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {jobLoading
                ? "Loading opportunities and alumni employers..."
                : `Bridge the gap between students and alumni. Explore ${jobsCount} active job postings from ${alumniEmployers} hiring alumni and companies, find mentorship, and build lasting professional relationships.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  font-medium bg-pink-500 text-white hover:bg-pink-600 text-lg px-8 py-2">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium bg-white text-pink-500 hover:bg-pink-100 text-lg px-8 py-2 border border-pink-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Alumni Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform brings together students, alumni, and administrators
              in one seamless experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="dashboard-card card-hover text-center border border-pink-200 rounded-md p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Networking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with alumni from your field, find mentors, and build
                professional relationships that last a lifetime.
              </p>
            </div>

            <div className="dashboard-card card-hover text-center border border-pink-200 rounded-md p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Career Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Discover job postings, internships, and career opportunities
                shared exclusively by alumni and companies.
              </p>
            </div>

            <div className="dashboard-card card-hover text-center border border-pink-200 rounded-md p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Give Back
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Alumni can mentor students, share opportunities, and contribute
                to the growth of their alma mater.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-pink-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Three Powerful Dashboards
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored experiences for students, alumni, and administrators
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Student Dashboard */}
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Students</h3>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Browse job opportunities
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Connect with alumni mentors
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Share updates and posts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Manage profile and resume
                  </span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium p-2 bg-pink-400 text-white hover:bg-pink-500 w-full">
                Join as Student
              </button>
            </div>

            {/* Alumni Dashboard */}
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover border-2 border-pink-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Alumni</h3>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Post job opportunities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Mentor students</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Make donations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Professional networking</span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium p-2 bg-pink-400 text-white hover:bg-pink-500 w-full">
                Join as Alumni
              </button>
            </div>

            {/* Admin Dashboard */}
            <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Admin</h3>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Manage user verification
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Moderate content</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Track donations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Broadcast announcements</span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium p-2 bg-pink-400 text-white hover:bg-pink-500 w-full">
                Admin Access
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Alumni Connect</h3>
                <p className="text-gray-400">University Portal</p>
              </div>
            </div>
            <p className="text-gray-400 text-center">
              © 2026 Alumni Connect. Built with care for our university
              community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

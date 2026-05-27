import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/login`,
        { email, password },
        {
          withCredentials: true,
        },
      );

      if (response.status === 201) {

        const role = response.data.role;
        console.log("Login successful! User role:", role);

        if(role === "admin"){
          window.location.href = `${import.meta.env.VITE_ADMIN_URL}`;
          return
        }


        const profileRes = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/profile/me`,
          { withCredentials: true },
        );

        // 🔥 STEP 3: navigation decision

        if ((role === "alumni" || role === "student") && !profileRes.data.profile) {
          // ❌ profile nahi bana
          navigate("/createprofile");
        } else {
          // ✅ profile bana hua hai
          role === "alumni"
            ? navigate("/alumni/dashboard")
            : navigate("/student/dashboard");
        }

        // Clear form
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col">
      <header className="bg-white border-b border-pink-100">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Alumni Connect
              </h1>
              <p className="text-sm text-gray-500">University Portal</p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="rounded-lg border bg-white shadow-lg">
            <div className="flex flex-col p-6 text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">Welcome Back</h3>
              <p className="text-sm text-gray-600">
                Sign in to your Alumni Connect account
              </p>
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-3 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-12 px-3 py-2 pr-12 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeOff className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-pink-300 text-pink-500 focus:ring-pink-200"
                    />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <Link
                    to="#"
                    className="text-sm text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-pink-500 text-white rounded-md hover:bg-pink-600 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

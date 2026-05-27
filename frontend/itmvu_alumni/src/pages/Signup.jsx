import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Signup = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passingyear: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.passingyear ||
      !role
    ) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        username: formData.name,
        email: formData.email,
        password: formData.password,
        role,
        passingyear: formData.passingyear,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/signup`,
        payload,
        {
          withCredentials: true,
        },
      );

      // backend 201 bhej raha h
      if (response.status === 201) {
        alert(
          "Account created successfully! Please wait for admin approval before logging in.",
        );

        // reset form
        setFormData({
          name: "",
          email: "",
          passingyear: "",
          password: "",
          confirmPassword: "",
        });

        setRole("");

        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
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
        <div className="w-full max-w-lg">
          <div className="rounded-lg border bg-white shadow-lg">
            <div className="flex flex-col  p-6 text-center space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Join Alumni Connect
              </h3>
              <p className="text-sm text-gray-600">
                Create your account and start connecting
              </p>
              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
            </div>
            <div className="p-6 pt-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">I am a:</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRole("student")}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        role === "student"
                          ? "border-pink-400 bg-pink-50 text-pink-600"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                    >
                      <div className="font-semibold">Student</div>
                      <div className="text-sm text-gray-500">
                        Current student
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole("alumni")}
                      className={`p-4 rounded-lg border-2 text-center transition-all ${
                        role === "alumni"
                          ? "border-pink-400 bg-pink-50 text-pink-600"
                          : "border-gray-200 hover:border-pink-200"
                      }`}
                    >
                      <div className="font-semibold">Alumni</div>
                      <div className="text-sm text-gray-500">Graduate</div>
                    </button>
                  </div>
                </div>

                {/* Common Fields */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full h-12 px-3 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full h-12 px-3 py-2 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="passingyear"
                      className="text-sm font-medium"
                    >
                      Passing Year
                    </label>

                    <input
                      id="passingyear"
                      type="number"
                      placeholder="Enter passing year"
                      value={formData.passingyear}
                      onChange={(e) =>
                        handleInputChange("passingyear", e.target.value)
                      }
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
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
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

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium"
                    >
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        className="w-full h-12 px-3 py-2 pr-12 border border-pink-200 rounded-md focus:border-pink-400 focus:outline-none"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showConfirmPassword ? (
                          <Eye className="w-5 h-5" />
                        ) : (
                          <EyeOff className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-pink-500 text-white rounded-md hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
                  disabled={!role || loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-pink-600 hover:text-pink-700 font-medium"
                  >
                    Sign in here
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

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/auth_bg2.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      // Simulate successful login
      navigate("/dashboard");
    } catch (err) {
      setError("Error logging in, please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 flex-row items-center justify-center shadow-xl rounded-3xl m-10 md:mx-20">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 my-10 lg:w-1/2">
        <h1 className="font-bold text-indigo-600 text-3xl p-3">FlexiDocs</h1>
          <h1 className="text-4xl text-black text-center">Welcome Back</h1>
          <p className="text-gray-500 mt-3 text-center">
            Login to manage your documents effortlessly
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 w-3/4 sm:w-4/5 lg:w-1/2"
          >
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full px-6 py-2 mt-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-3">
            Don't have an account?{" "}
            <span
              className="text-indigo-500 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </div>
        <div className="h-full hidden lg:block w-1/2 overflow-hidden rounded-r-3xl">
          <img src={bgImage} alt="Background" />
        </div>
      </div>
    </div>
  );
};

export default Login;

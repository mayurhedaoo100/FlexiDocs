import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/auth_bg2.jpg";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confpassword: "",
    companyname: "",
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
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.companyname
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (formData.password !== formData.confpassword) {
      setError("Passwords do not match.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    try {
      navigate("/dashboard");
    } catch (err) {
      setError("Error signing up, please try again.");
    }
  };

  return (
    <div className="flex max-h-screen">
      <div className="flex flex-1 flex-row items-center justify-center shadow-xl rounded-3xl m-10 ">
        <div className="flex flex-col items-center justify-center w-full sm:w-1/2 my-10 lg:w-1/2">
          <h1 className="text-4xl text-black text-center">
            Create your account
          </h1>
          <p className="text-gray-500 mt-3 text-center">
            Your Simple Solution for Document Creation and Management
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-8 w-3/4 sm:w-4/5 lg:w-1/2"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-3xl"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-3xl"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-3xl"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confpassword"
                placeholder="Confirm Password"
                value={formData.confpassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-3xl"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="companyname"
                placeholder="Company Name"
                value={formData.companyname}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-3xl"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="w-full px-6 py-2 mt-3 bg-black text-white rounded-3xl hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
        <div className="h-full hidden lg:block w-1/2 overflow-hidden rounded-r-3xl">
          <img src={bgImage} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

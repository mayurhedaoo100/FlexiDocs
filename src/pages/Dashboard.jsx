import React from "react";
import { useNavigate } from "react-router-dom";
import rocketpng from "../assets/rocket.png";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const DashboardContent = () => {

  const navigate = useNavigate();

  return (
  <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto">
    {/* Search and Filters */}
    <div className="mt-6 bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Search Documents
      </h2>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search by name or keyword"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-indigo-300"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-lg">
          <option value="">Filter by Type</option>
          <option value="template">Template</option>
          <option value="library">Library</option>
        </select>
        <button className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
          Search
        </button>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="mt-6 p-4 bg-white rounded-lg flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <img
        className="h-14 scale-x-[-1]"
        src={rocketpng}
        alt="Illustration of a rocket"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-xl font-semibold text-gray-700">
          Ready to take off?
        </h1>
        <p className="text-lg text-gray-600">
          Dive into FlexiDocs and start managing your documents with ease and
          excitement!
        </p>
      </div>
    </div>

    {/* Widgets Section */}
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <div className="bg-white py-2 px-4 rounded-lg flex items-center justify-between sm:justify-start">
        <h3 className="text-lg font-semibold text-gray-700">
          Total Documents Generated:
        </h3>
        <p className="ml-2 text-lg font-semibold text-indigo-500">52</p>
      </div>
      <div className="bg-white py-2 px-4 rounded-lg text-indigo-500 font-semibold text-lg border-2 border-indigo-300 text-center">
        <button onClick={() => navigate("/GenerateDoc")} className="w-full sm:w-auto">
          Generate New Document
        </button>
      </div>
    </div>
  </div>
  );
};


const DashboardPage = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
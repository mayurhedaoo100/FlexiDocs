import React from "react";
import { useNavigate } from "react-router-dom";
import rocketpng from "../assets/rocket.png";
import {
  FaUserCircle,
  FaBitcoin,
  FaPencilAlt,
  FaRegFileAlt,
  FaHeadset,
  FaFolderOpen,
  FaCog,
} from "react-icons/fa";

const NavigationBar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white">
    <div className="flex justify-between items-center container mx-auto p-4">
      <div className="flex items-center">
        <FaBitcoin className="text-3xl text-gray-700 mr-2" aria-hidden="true" />
        <h1 className="text-xl sm:text-2xl font-semibold">FlexiDocs</h1>
      </div>
      <button
        aria-label="Go to Profile"
        className="text-gray-600 text-3xl sm:text-4xl hover:text-gray-800 transition-colors"
      >
        <FaUserCircle />
      </button>
    </div>
  </nav>
);

const Sidebar = () => {

  const navigate = useNavigate();

  const menuItems = [
    { icon: FaPencilAlt, label: "Create Document", path: "/GenerateDoc" },
    { icon: FaFolderOpen, label: "My Library", path: "/Library" },
    { icon: FaRegFileAlt, label: "My Templates", path: "/Templates" },
    { icon: FaCog, label: "Company Profile", path: "/CompanyProfile" },
    { icon: FaHeadset, label: "Help Support", path: "/Support" },
  ];

  return (
    <div className="lg:w-1/4 h-full pt-20 px-2 sm:px-4 md:px-6">
      <div className="space-y-4">
        {menuItems.map((item, index) => (
          <div
          onClick={() => navigate(item.path)}
            key={index}
            className="flex items-center text-lg cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            aria-label={item.label}
          >
            <item.icon className="text-indigo-500 sm:mr-3 text-xl" aria-hidden="true" />
            <p className="hidden sm:block">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const DashboardContent = () => (
  <div className="flex-1 bg-gray-100 h-full mt-20 px-4 sm:px-6 rounded-tl-2xl">
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
        <button className="w-full sm:w-auto">
          Generate New Document
        </button>
      </div>
    </div>
  </div>
);


const DashboardPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;

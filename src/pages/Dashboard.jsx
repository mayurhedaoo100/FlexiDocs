import React from 'react';
import rocketpng from "../assets/rocket.png";
import { FaUserCircle, FaBitcoin, FaPencilAlt, FaRegFileAlt, FaHeadset, FaFolderOpen, FaCog } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-gray-50 shadow-md">
        <div className="flex justify-between items-center container mx-auto text-gray-800">
          <div className='flex flex-row items-center'>
            <FaBitcoin className='text-3xl mr-2 text-gray-700'/>
            <h1 className="text-xl md:text-3xl font-semibold">FlexiDocs</h1>
          </div>
          <button
            onClick={() => navigate("/profile")}
            className="text-gray-600 text-4xl hover:text-gray-800 transition-colors"
          >
            <FaUserCircle/>
          </button>
        </div>
      </nav>

      <div className='pt-20 mb-6'>
        <h1 className="text-md text-gray-500 ml-5">Dashboard</h1>
      </div>

      <div className='flex flex-row'>
        {/* Sidebar */}
        <div className='w-1/4 px-6'>
          <div className='space-y-4'>
            {[
              { icon: FaPencilAlt, label: "Create Document" },
              { icon: FaFolderOpen, label: "My Library" },
              { icon: FaRegFileAlt, label: "My Templates" },
              { icon: FaCog, label: "Company Profile" },
              { icon: FaHeadset, label: "Help Support" },
            ].map((item, index) => (
              <div
                key={index}
                className='flex items-center text-lg cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow'
              >
                <item.icon className='text-indigo-500 mr-3 text-xl' />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        <div className='flex-1 px-6'>
          <div className='p-6 bg-white rounded-lg shadow-md flex items-center space-x-4'>
            <img className='h-16 scale-x-[-1]' src={rocketpng} alt="rocket" />
            <div>
              <h1 className='text-2xl font-semibold text-gray-700'>Ready to take off?</h1>
              <p className='text-lg text-gray-600'>Dive into FlexiDocs and start managing your documents with ease and excitement!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

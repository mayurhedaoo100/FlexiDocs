import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // For the profile icon

const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 bg-blue-600 text-white p-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">HR Doc Gen</h1>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 px-4 rounded hover:bg-blue-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/generate-document" className="block py-2 px-4 rounded hover:bg-blue-700">
                Generate New Document
              </Link>
              <ul className="space-y-2 ml-4">
                <li><Link to="/generate-document/offer-letter" className="block py-2 px-4 hover:bg-blue-800">Offer Letter</Link></li>
                <li><Link to="/generate-document/salary-slip" className="block py-2 px-4 hover:bg-blue-800">Salary Slip</Link></li>
                <li><Link to="/generate-document/promotion-letter" className="block py-2 px-4 hover:bg-blue-800">Promotion Letter</Link></li>
                <li><Link to="/generate-document/experience-letter" className="block py-2 px-4 hover:bg-blue-800">Experience Letter</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/preview-documents" className="block py-2 px-4 rounded hover:bg-blue-700">
                Preview Generated Documents
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-xl font-bold text-blue-600">
            <h1>Welcome to HR Document Generator</h1>
          </div>
          <div className="relative">
            <FaUserCircle className="text-3xl text-gray-600" />
            {/* You can replace this with the user's profile picture once available */}
          </div>
        </div>

        {/* Content (based on current page) */}
        {/* Here, we can display content based on the route the user is on */}
        <div>
          <h2 className="text-2xl font-semibold">Dashboard Content</h2>
          <p className="mt-4">This is where the main content will be displayed based on the selected action.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

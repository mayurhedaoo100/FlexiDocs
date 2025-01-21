import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white">
      <div className="flex justify-between items-center container mx-auto p-4">
        {/* Logo Section */}
        <div
          onClick={() => navigate("/Dashboard")}
          className="flex items-center cursor-pointer"
        >
          <DocumentTextIcon
            className="h-8 w-8 text-gray-700 mr-2"
            aria-hidden="true"
          />
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
            FlexiDocs
          </h1>
        </div>
        {/* Profile Section */}
        <button
          aria-label="Go to Profile"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          <UserCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

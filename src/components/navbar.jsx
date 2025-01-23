import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

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
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button
            aria-label="Go to Profile"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <UserCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 -mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div className="p-4">
                <p className="text-sm font-medium text-gray-700">John Doe</p>
                <p className="text-xs text-gray-500">johndoe@example.com</p>
              </div>
              <hr className="border-gray-200" />
              <button
                onClick={() => {
                  // Handle logout logic here
                  navigate("/login");
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-b-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

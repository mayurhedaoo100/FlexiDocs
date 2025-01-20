import React from 'react'
import { useNavigate } from 'react-router-dom';
import {FaUserCircle, FaBitcoin,} from "react-icons/fa";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white">
    <div className="flex justify-between items-center container mx-auto p-4">
      <div onClick={() => navigate("/Dashboard")} className="flex items-center cursor-pointer">
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
  )
}

export default Navbar;
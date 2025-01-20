import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaPencilAlt,
  FaRegFileAlt,
  FaHeadset,
  FaFolderOpen,
  FaCog,
  FaHome
} from "react-icons/fa";

const Sidebar = () => {

    const navigate = useNavigate();
    const location = useLocation();
  
    const menuItems = [
      { icon: FaHome, label: "Home", path: "/Dashboard" },
      { icon: FaPencilAlt, label: "Create Document", path: "/GenerateDoc" },
      { icon: FaFolderOpen, label: "My Library", path: "/Library" },
      { icon: FaRegFileAlt, label: "My Templates", path: "/Templates" },
      { icon: FaCog, label: "Company Profile", path: "/CompanyProfile" },
      { icon: FaHeadset, label: "Help Support", path: "/Support" },
    ];
  
    return (
      <div className="lg:w-1/5 h-full pt-20 px-2 sm:px-4 md:px-6">
        <div className="space-y-4">
          {menuItems.map((item, index) => {
            const isActive = location.pathname.toLowerCase() === item.path.toLowerCase();
            return (
              <div
                key={index}
                onClick={() => navigate(item.path)}
                className={`flex items-center text-lg cursor-pointer p-4 rounded-lg shadow hover:shadow-lg transition-shadow ${
                  isActive ? "bg-indigo-500 text-white" : "bg-white"
                }`}
                aria-label={item.label}
              >
                <item.icon
                  className={`text-xl sm:mr-3 ${
                    isActive ? "text-white" : "text-indigo-500"
                  }`}
                  aria-hidden="true"
                />
                <p className="hidden sm:block">{item.label}</p>
              </div>
            );
})}
        </div>
      </div>
    );
  };

export default Sidebar
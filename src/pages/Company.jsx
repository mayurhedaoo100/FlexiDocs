import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import companyData from "../data/company.json"; // Import the company details JSON

const CompanyContent = () => {
  const [company, setCompany] = useState(companyData[0]); // Initialize with the first company
  const [isEditing, setIsEditing] = useState(false); // Toggle edit mode

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save updated data (this assumes server/API handling; if not, local save)
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated company details:", company);
    // Optionally, send updated company data to backend/server or save to local file
  };

  return (
    <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto">
      <div className="mt-6 bg-white p-4 shadow rounded-lg">
        {!isEditing ? (
          // View Mode
          <div>
            {Object.entries(company).map(([key, value]) => (
              key !== 'logo' ? (
                <div key={key} className="flex flex-row items-center py-1">
                  <p className="font-semibold mr-2">{key.replace('_', ' ').toUpperCase()}:</p>
                  <p>{value}</p>
                </div>
              ) : (
                <div key={key} className="flex flex-row items-center py-1">
                  <p className="font-semibold mr-3">Logo:</p>
                  <img src={value} alt="Company Logo" className="h-36" />
                </div>
              )
            ))}
            <button
              className="mt-4 px-5 py-2 bg-indigo-500 text-white rounded"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        ) : (
          // Edit Mode
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(company).map(([key, value]) => (
                key !== 'logo' ? (
                  <div key={key}>
                    <label className="block font-medium">{key}</label>
                    <input
                      type={key === 'email' ? 'email' : 'text'}
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2 border"
                    />
                  </div>
                ) : (
                  <div key={key}>
                    <label className="block font-medium">Logo URL</label>
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded border-gray-300 shadow-sm p-2 border"
                    />
                  </div>
                )
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <button
                className="px-4 py-2 bg-indigo-500 text-white rounded"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Company = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <CompanyContent />
      </div>
    </div>
  );
};

export default Company;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import templates from "../data/templates.json"; // Import templates
import company from "../data/company.json"; // Import company data

// Replace placeholders in template HTML with company details
const preprocessTemplates = (templates, company) => {
  return templates.map((template) => {
    let processedHtml = template.html;

    // Replace placeholders like {{company.key}} with values from company.json
    Object.entries(company).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{company\\.${key}}}`, "g");
      processedHtml = processedHtml.replace(placeholder, value);
    });

    return { ...template, html: processedHtml };
  });
};

// Card Component
const Card = ({ html, title, onPreviewClick }) => {
  return (
    <div className="bg-white shadow rounded-md p-2">
      <div className="h-60 w-full flex items-center justify-center overflow-hidden bg-white">
        <div
          className="text-xs h-full w-full object-contain rounded p-2"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <div className="shadow-inner p-2 rounded-md">
        <p className="text-md text-center">{title}</p>
        <div className="flex flex-row gap-2 justify-center mt-2">
          <button
            onClick={onPreviewClick}
            className="text-indigo-500 border border-indigo-400 px-4 py-1 w-2/3 rounded"
          >
            Preview
          </button>
          <button className="bg-indigo-500 text-white py-1 rounded w-1/3">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// TemplateContent Component
const TemplateContent = () => {
  const navigate = useNavigate(); // Hook for navigation
  const processedTemplates = preprocessTemplates(templates, company[0]);

  const handlePreviewClick = (id) => {
    navigate(`/preview/${id}`); // Navigate to the preview page with the selected template id
  };

  return (
    <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto pb-24">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {processedTemplates.map((item, index) => (
          <Card
            key={index}
            html={item.html}
            title={item.title}
            onPreviewClick={() => handlePreviewClick(index)} // Pass index as id
          />
        ))}
      </div>
    </div>
  );
};

// Main Templates Component
const Templates = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <TemplateContent />
      </div>
    </div>
  );
};

export default Templates;
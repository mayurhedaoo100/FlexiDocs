import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import templates from "../data/templates.json"; // Import templates
import company from "../data/company.json"; // Import company data
import html2pdf from "html2pdf.js"; // For PDF generation

const GenerateDocContent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Selected template
  const [formData, setFormData] = useState({}); // Form data for template
  const [generatedDocument, setGeneratedDocument] = useState(""); // Generated document content
  const [placeholders, setPlaceholders] = useState([]); // List of placeholders from the template

  // Extract placeholders from the template
  const extractPlaceholders = (templateHtml) => {
    const regex = /\[([^\]]+)\]/g;
    const matches = [...templateHtml.matchAll(regex)];
    return matches.map(match => match[1]); // Extract the variable names
  };

  // Handle template selection
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({}); // Reset form data when template changes
    setPlaceholders(extractPlaceholders(template.html)); // Extract placeholders from selected template
  };

  // Handle input changes for dynamic form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Generate document based on selected template and user input
  const handleGenerate = () => {
    if (!selectedTemplate) return;

    let generatedHtml = selectedTemplate.html;

    // Replace placeholders in the template with user inputs or company data
    Object.entries(formData).forEach(([key, value]) => {
      const placeholder = new RegExp(`\\[${key}\\]`, "g");
      generatedHtml = generatedHtml.replace(placeholder, value);
    });

    // Auto-fill company data (e.g., company name)
    Object.entries(company[0]).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{company\\.${key}}}`, "g");
      generatedHtml = generatedHtml.replace(placeholder, value);
    });

    setGeneratedDocument(generatedHtml);
  };

  // Download the generated document as a PDF
  const handleDownloadPDF = () => {
    if (!generatedDocument) return;

    const element = document.createElement("div");
    element.innerHTML = generatedDocument;

    html2pdf()
      .from(element)
      .save(`${selectedTemplate.title}.pdf`);
  };

  // Filter out company-related placeholders that don’t need user input
  const filterPlaceholders = (placeholders) => {
    return placeholders.filter((placeholder) => !["company.name", "company.logo", "company.cin", "company.email", "company.hr_email", "company.phone", "company.year"].includes(placeholder));
  };

  return (
    <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto pb-24">

      {/* Template Selection */}
      {!selectedTemplate ? (
        <div className="m-6">
          <p className="text-gray-700 mb-2">Select a Document Type:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {templates.map((template) => (
              <button
                key={template.title}
                onClick={() => handleTemplateSelect(template)}
                className="bg-indigo-500 text-white px-4 py-2 rounded"
              >
                {template.title}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="m-6">
          <p className="text-gray-700 mb-2">Enter the details for {selectedTemplate.title}:</p>
          
          {/* Dynamic form generation based on placeholders */}
          {filterPlaceholders(placeholders).map((placeholder, index) => (
            <div key={index} className="mb-4">
              <label htmlFor={placeholder} className="block text-sm font-medium text-gray-700">
                {placeholder.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </label>
              <input
                type="text"
                name={placeholder}
                value={formData[placeholder] || ""}
                onChange={handleInputChange}
                className="mt-2 block w-full p-2 border border-gray-300 rounded"
                placeholder={`Enter ${placeholder.replace(/([A-Z])/g, ' $1').toUpperCase()}`}
              />
            </div>
          ))}

          {/* Generate button */}
          <button
            onClick={handleGenerate}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded mr-5"
          >
            Generate Document
          </button>

          {/* Download PDF button */}
          {generatedDocument && (
            <button
              onClick={handleDownloadPDF}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Download PDF
            </button>
          )}
        </div>
      )}

      {/* Display Generated Document */}
      {generatedDocument && (
        <div className="m-6">
          <p className="text-gray-700 mb-2">Generated Document:</p>
          <div
            className="p-4 border rounded bg-white"
            dangerouslySetInnerHTML={{ __html: generatedDocument }}
          />
        </div>
      )}
    </div>
  );
};

const GenerateDocument = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <GenerateDocContent />
      </div>
    </div>
  );
};

export default GenerateDocument;

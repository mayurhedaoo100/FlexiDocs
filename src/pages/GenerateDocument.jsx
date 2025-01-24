import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import templates from "../data/templates.json";
import company from "../data/company.json";
import html2pdf from "html2pdf.js";

const GenerateDocContent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [generatedDocument, setGeneratedDocument] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const contentRef = useRef(null); // Reference to the editable content

  const extractPlaceholders = (templateHtml) => {
    const regex = /\[([^\]]+)\]/g;
    const matches = [...templateHtml.matchAll(regex)];
    return matches.map((match) => match[1]);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({});
    setGeneratedDocument(""); // Reset generated content
    setIsEditing(false);
  };

  const handleGenerate = () => {
    if (!selectedTemplate) return;

    let generatedHtml = selectedTemplate.html;

    // Replace placeholders with form data
    Object.entries(formData).forEach(([key, value]) => {
      const placeholder = new RegExp(`\\[${key}\\]`, "g");
      generatedHtml = generatedHtml.replace(placeholder, value || "");
    });

    // Replace company placeholders
    Object.entries(company[0]).forEach(([key, value]) => {
      const placeholder = new RegExp(`{{company\\.${key}}}`, "g");
      generatedHtml = generatedHtml.replace(placeholder, value);
    });

    setGeneratedDocument(generatedHtml);
  };

  const handleEditDocument = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      // Save the current content when exiting editing mode
      setGeneratedDocument(contentRef.current.innerHTML);
    }
  };

  const handleDownloadPDF = () => {
    if (!generatedDocument) return;

    const element = document.createElement("div");
    element.innerHTML = generatedDocument;

    html2pdf().from(element).save(`${selectedTemplate.title}.pdf`);
  };

  const handlePrint = () => {
    if (!generatedDocument) return;

    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <head>
          <title>${selectedTemplate?.title || "Document"}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .document-container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          </style>
        </head>
        <body>
          <div class="document-container">
            ${generatedDocument}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
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
          <p className="text-gray-700 mb-2">Fill in the details for {selectedTemplate.title}:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {extractPlaceholders(selectedTemplate.html).map((placeholder, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={placeholder}
                  className="block text-sm font-medium text-gray-700"
                >
                  {placeholder.replace(/([A-Z])/g, " $1").toUpperCase()}
                </label>
                <input
                  type="text"
                  name={placeholder}
                  value={formData[placeholder] || ""}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className="mt-2 block w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleGenerate}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded mr-5"
          >
            Generate Document
          </button>
        </div>
      )}

      {/* Generated or Editable Document */}
      {generatedDocument && (
        <div className="m-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-700">Generated Document:</p>
            <div>
              <button
                onClick={handleEditDocument}
                className={`bg-yellow-500 text-white px-4 py-2 rounded mr-4 ${
                  isEditing ? "bg-green-500" : "bg-yellow-500"
                }`}
              >
                {isEditing ? "Save Edits" : "Edit Document"}
              </button>
              <button
                onClick={handleDownloadPDF}
                className="bg-green-500 text-white px-4 py-2 rounded mr-4"
              >
                Download PDF
              </button>
              <button
                onClick={handlePrint}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Print Document
              </button>
            </div>
          </div>

          {/* Editable Content with Highlighted Border */}
          <div
            ref={contentRef}
            className={`p-4 border rounded bg-white ${
              isEditing ? "border-blue-500 bg-blue-50 cursor-text" : "border-gray-300"
            }`}
            contentEditable={isEditing}
            suppressContentEditableWarning={true}
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
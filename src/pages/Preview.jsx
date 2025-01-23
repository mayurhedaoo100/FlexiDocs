import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import templates from "../data/templates.json"; // Import templates
import company from "../data/company.json"; // Import company data
import { XCircleIcon } from "@heroicons/react/24/solid";

// Replace placeholders in template HTML with company details
const preprocessTemplate = (template, company) => {
  let processedHtml = template.html;

  // Replace placeholders like {{company.key}} with values from company.json
  Object.entries(company).forEach(([key, value]) => {
    const placeholder = new RegExp(`{{company\\.${key}}}`, "g");
    processedHtml = processedHtml.replace(placeholder, value);
  });

  return { ...template, html: processedHtml };
};

const Preview = () => {
  const { id } = useParams(); // Fetch the template id from URL parameters
  const navigate = useNavigate(); // Hook for navigation

  // Get the template based on the id
  const template = templates[id];
  if (!template) return <div>Template not found</div>;

  // Preprocess the template by replacing placeholders with company data
  const processedTemplate = preprocessTemplate(template, company[0]);

  return (
    <div className="flex-1 bg-gray-100 px-6 rounded-tl-2xl h-screen overflow-y-auto">
      <div className="fixed top-0 left-0 w-full px-10 pt-6 flex justify-between items-center">
        <h2 className="text-3xl text-indigo-500">{processedTemplate.title} Preview</h2>
        <XCircleIcon
          onClick={() => navigate("/templates")}
          className="text-gray-300 h-12 cursor-pointer"
        />
      </div>

      {/* Full Template Preview */}
      <div
        className="mt-6 max-w-full"
        dangerouslySetInnerHTML={{ __html: processedTemplate.html }}
      />
    </div>
  );
};

export default Preview;

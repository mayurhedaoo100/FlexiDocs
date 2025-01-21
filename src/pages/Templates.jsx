import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import templateimg from "../assets/template.jpg";
import salaryimg from "../assets/salaryslip.jpg";

// Card Component
const Card = ({ img, title }) => {
  return (
    <div className="bg-white shadow rounded-md p-3">
      <div className="h-60 w-full flex items-center justify-center">
        <img className="h-full w-full object-contain rounded" src={img} alt={title} />
      </div>
      <p className="text-md text-center mt-2">{title}</p>
      <div className="flex flex-row gap-2 justify-center mt-2">
        <button className="text-indigo-500 border border-indigo-400 px-4 py-1 w-2/3 rounded">
          Preview
        </button>
        <button className="bg-indigo-500 text-white py-1 rounded w-1/3">
          Edit
        </button>
      </div>
    </div>
  );
};

// TemplateContent Component
const TemplateContent = () => {
  const cardData = [
    { img: templateimg, title: "Offer Letter" },
    { img: templateimg, title: "Employment Letter" },
    { img: templateimg, title: "Promotional Letter" },
    { img: salaryimg, title: "Salary Slip" },
    { img: templateimg, title: "Additional Template" },
  ];

  return (
    <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto">
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {cardData.map((item, index) => (
          <Card key={index} img={item.img} title={item.title} />
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

import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const GenerateDocContent = () => {
    return (
        <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto">
        <p className='m-4 text-gray-600 italic'>Generate Document</p>
        
        </div>
    )
}

const GenerateDocument = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar />
        <GenerateDocContent/>
      </div>
    </div>
  )
}

export default GenerateDocument;
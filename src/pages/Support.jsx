import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const SupportContent = () => {
    return (
        <div className="flex-1 bg-gray-100 mt-20 px-6 rounded-tl-2xl h-screen overflow-y-auto">
        <p className='m-4 text-gray-600 italic'>Customer support</p>
        
        </div>
    )
}

const Support = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar />
        <SupportContent/>
      </div>
    </div>
  );
};

export default Support;
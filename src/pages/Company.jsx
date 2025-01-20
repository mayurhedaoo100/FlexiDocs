import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const CompanyContent = () => {
    return (
        <div className="flex-1 bg-gray-100 h-full mt-20 px-4 sm:px-6 rounded-tl-2xl">
        <p className='m-4 text-gray-600 italic'>Company Content</p>
        
        </div>
    )
}

const Company = () => {
  return (
    <div className="min-h-screen flex">
      <Navbar/>
      <div className="flex flex-1">
        <Sidebar />
        <CompanyContent/>
      </div>
    </div>
  )
}

export default Company
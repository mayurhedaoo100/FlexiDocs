import React from "react";
import { useNavigate } from "react-router-dom";
import homeVideo from "../assets/home-video.mp4";
import { motion } from "framer-motion";

const AnimatedText = ({ text }) => {
  return (
    <motion.h1 className="text-3xl md:text-5xl leading-tight font-semibold mb-6 md:mb-9 text-center md:text-left">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full p-4 bg-white shadow-lg z-50">
        <div className="flex justify-between items-center container mx-auto text-gray-800">
          <h1 className="text-xl md:text-3xl font-semibold">FlexiDocs</h1>
          <div className="flex flex-row items-center">
          <h1 onClick={() => navigate("/signup")} className="text-base md:text-lg hidden md:block font-semibold mr-5 cursor-pointer hover:text-indigo-600">Signup</h1>
          <h1 onClick={() => navigate("/login")} className="text-base md:text-lg font-semibold mr-5 cursor-pointer hover:text-indigo-600">Login</h1>
          <button
            onClick={() => navigate("/Dashboard")}
            className="border-2 border-indigo-500 text-indigo-500 py-2 px-4 md:px-6 rounded-md font-semibold hover:bg-indigo-100 transition-all"
          >
            Get Started
          </button></div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row mx-5 md:mx-10 mt-24 mb-10 md:mb-20 justify-center items-center">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-3/4">
          <AnimatedText text="Document Generator Tool by Nedient Technology" />
          <p className="mb-6 text-base md:text-lg text-center md:text-left w-full md:w-2/3">
            Create professional documents effortlessly with our free Document Generator. Save time with pre-designed templates for offer letters, agreements, and more. Simplify your workflow and generate documents in just a few clicks.
          </p>
          <button
            onClick={() => navigate("/Dashboard")}
            className="bg-indigo-500 text-white py-2.5 rounded-md text-sm md:text-lg px-8 md:px-12 font-semibold"
          >
            Get Started
          </button>
        </div>
        <div className="flex items-center justify-center w-1/2 mt-8 md:mt-0">
          <video
            className="max-w-full h-auto md:h-[300px]"
            autoPlay
            muted
            loop
            src={homeVideo}
          />
        </div>
      </div>

      {/* Features Section */}
      <div className=" flex flex-col md:flex-row px-5 md:px-10 space-y-8 md:space-y-0 md:space-x-5">
        <div className="w-full md:w-1/3 p-5 flex flex-col items-center md:items-start">
          <img
            className="h-[150px] md:h-[200px] mb-5"
            src="https://www.zohowebstatic.com/sites/zweb/images/recruit/personalize-job-offer.png"
            alt="Personalize Documents"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center md:text-left">
            Customizable Templates
          </h2>
          <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
            Tailor each document to fit your needs. Add your branding, adjust the format, and make it uniquely yours.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-5 flex flex-col items-center md:items-start">
          <img
            className="h-[150px] md:h-[200px] mb-5"
            src="https://www.zohowebstatic.com/sites/zweb/images/recruit/save-time-everything.png"
            alt="Save Time"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center md:text-left">
            Save Time and Effort
          </h2>
          <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
            Reduce the time spent on manual document creation. Generate high-quality documents in seconds.
          </p>
        </div>

        <div className="w-full md:w-1/3 p-5 flex flex-col items-center md:items-start">
          <img
            className="h-[150px] md:h-[200px] mb-5"
            src="https://www.zohowebstatic.com/sites/zweb/images/recruit/attract-the-best.png"
            alt="Professional Branding"
          />
          <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center md:text-left">
            Professional Branding
          </h2>
          <p className="text-sm md:text-lg text-gray-700 text-center md:text-left">
            Impress your clients and candidates with sleek, professional-looking documents that enhance your brand image.
          </p>
        </div>
      </div>


{/* How it works */}

<div className="bg-gray-50 py-10">
  <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
  <div className="flex flex-col md:flex-row mx-5 md:mx-10 space-y-6 md:space-y-0 md:space-x-5">
    <motion.div
      className="flex-1 text-center p-5 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
        1
      </div>
      <h3 className="text-xl font-semibold mb-3">Choose a Template</h3>
      <p className="text-gray-700">
        Select from a wide range of professionally designed templates to fit your needs.
      </p>
    </motion.div>
    <motion.div
      className="flex-1 text-center p-5 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
        2
      </div>
      <h3 className="text-xl font-semibold mb-3">Customize Your Document</h3>
      <p className="text-gray-700">
        Add your branding, adjust the format, and fill in the necessary details to make it your own.
      </p>
    </motion.div>
    <motion.div
      className="flex-1 text-center p-5 rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-16 h-16 bg-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">
        3
      </div>
      <h3 className="text-xl font-semibold mb-3">Download or Share</h3>
      <p className="text-gray-700">
        Export your completed document in various formats or share it directly with your clients.
      </p>
    </motion.div>
  </div>
</div>

{/* faq */}

<div className="bg-white py-10">
  <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
  <div className="mx-5 md:mx-10">
    <div className="mb-5">
      <h3 className="text-lg font-semibold">Is FlexiDocs free to use?</h3>
      <p className="text-gray-700">Yes, FlexiDocs offers a free version with basic features. Premium features are available at an affordable price.</p>
    </div>
    <div className="mb-5">
      <h3 className="text-lg font-semibold">Can I customize templates?</h3>
      <p className="text-gray-700">Absolutely! FlexiDocs allows you to customize templates to match your branding and preferences.</p>
    </div>
    <div className="mb-5">
      <h3 className="text-lg font-semibold">What types of documents can I generate?</h3>
      <p className="text-gray-700">You can create offer letters, agreements, invoices, and much more using our pre-designed templates.</p>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="bg-indigo-500 text-white py-6 mt-10">
        <div className="container mx-auto text-center text-sm md:text-base">
          <p>&copy; 2025 Nedient Technology. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

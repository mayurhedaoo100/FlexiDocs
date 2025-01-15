import React from "react";
import homeVideo from "../assets/home-video.mp4";

const Home = () => {
  return (
    <div>
      <div className="flex m-10 flex-row justify-center items-center">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-6xl font-semibold mb-9">
            Documents Generator Tool by Nedient Technology
          </h1>
          <div className="flex items-start w-full pl-1 flex-col">
            <p className="mb-5 text-lg w-2/3">
              Keep your momentum up with free Document generator. These free
              offer letter templates will make drafting your next offer letter
              easier than ever. Generate your free offer letter online
            </p>
            <button className="bg-indigo-500 text-white p-2.5 rounded-md text-lg px-12 font-semibold">
              GET STARTED
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <video autoPlay muted loop src={homeVideo} />
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import logo from "../assets/home_image.png";

const HomePage = () => {
  return (
    <div className="bg-yellow-500 text-black min-h-screen flex items-center justify-center px-12 md:px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <section className="flex flex-col justify-center space-y-4">
          <header>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              22,400 TIMES <br /> AROUND THE WORLD
            </h1>
          </header>
          
          <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
            We have enabled over <span className="font-bold">900 million kilometres</span> of travel across Sri Lanka through our technology, taking care of the daily commutes and activities of millions of people. 
            It is as good as travelling 22,400 times around the World. That’s our scale.
          </p>
          
          <p className="text-base sm:text-lg lg:text-xl font-medium">
            We add millions more kilometres every day!
          </p>
        </section>

        <section className="flex justify-center items-center">
          <img
            src={logo}
            alt="Visual representation of global scale"
            className="max-w-full h-auto"
          />
        </section>

        <div className="bg-black bg-opacity-50 text-white p-3 rounded-md shadow-md">
            <h2 className="text-xl font-bold mb-2">Investor Information</h2>
            <p className=" mb-2">
              Visit our investor website for details related to listing on CSE.
            </p>
            <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 hover:text-white">
              View Details
            </button>
          </div>

      </div>
    </div>
  );
};

export default HomePage;
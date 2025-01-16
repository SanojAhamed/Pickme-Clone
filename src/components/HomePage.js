import React from 'react';
import logo from "../assets/home_image.png";

const HomePage = () => {
  return (
    <div className="bg-yellow-500 text-black min-h-screen flex items-center justify-center px-12 md:px-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <section className="flex flex-col justify-center space-y-4">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              22,400 TIMES <br /> AROUND THE WORLD
            </h1>
          </header>
          
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
            We have enabled over <span className="font-bold">900 million kilometres</span> of travel across Sri Lanka through our technology, taking care of the daily commutes and activities of millions of people. 
            It is as good as travelling 22,400 times around the World. That’s our scale.
          </p>
          
          <p className="text-sm sm:text-base lg:text-lg font-medium">
            We add millions more kilometres every day!
          </p>
      
            <div className="bg-black bg-opacity-50 text-white p-3 rounded-md shadow-md">
              <h2 className="text-lg font-bold mb-2">Investor Information</h2>
              <p className="text-sm mb-2">
                Visit our investor website for details related to listing on CSE.
              </p>
              <button className="bg-yellow-500 text-black px-6 py-2 rounded-md hover:bg-yellow-600 hover:text-white">
                View Details
              </button>
            </div>
        </section>

        <section className="flex justify-center items-center">
          <img
            src={logo}
            alt="Visual representation of global scale"
            className="max-w-full h-auto"
          />
        </section>

      </div>
    </div>
  );
};

export default HomePage;
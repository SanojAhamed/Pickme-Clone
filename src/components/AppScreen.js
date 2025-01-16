import React from 'react';
import logo from "../assets/how-it-works-1.png";

const AppScreen = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center px-6 md:px-10">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8">
        
        <section className="flex justify-center items-center">
          <img
            src={logo}
            alt="PickMe App"
            className="max-w-[250px] w-full h-auto"
          />
        </section>

        <section className="flex flex-col justify-center space-y-6">
          <header>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              The PickMe App <br /> and how it works
            </h1>
          </header>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">Book in Just 2 Taps</h2>
              <p className="text-lg">Key in your pick-up and drop-off locations to get your estimated fare.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Get a Driver</h2>
              <p className="text-lg">PickMe will find you the nearest available driver.</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Track Your Driver</h2>
              <p className="text-lg">Know your driver’s location and estimated time of arrival in real-time.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AppScreen;
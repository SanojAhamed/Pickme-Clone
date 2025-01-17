import React, { useState } from "react";
import screen1 from "../assets/how-it-works-1.png";
import screen2 from "../assets/how-it-works-2.png";
import screen3 from "../assets/how-it-works-3.png";

const AppScreen = () => {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="max-w-6xl w-full grid grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={activeScreen == 1 ? screen1 : activeScreen == 2 ? screen2 : screen3}
            alt="Screen"
            className="max-w-[250px] w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-center">The PickMe App and how it works</h1>

          <div onMouseEnter={() => setActiveScreen(1)} className="flex flex-col items-center cursor-pointer">
            <button
              className={`rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold ${
                activeScreen == 1 ? "bg-customYellow text-white" : "bg-gray-300 text-black"
              }`}
            >
              1
            </button>
            <p className="mt-2 font-semibold">Book in Just 2 Taps</p>
            <p className="text-sm">Key in your pick-up and drop-off locations to get your estimated fare.</p>
          </div>

          <div onMouseEnter={() => setActiveScreen(2)} className="flex flex-col items-center cursor-pointer">
            <button
              className={`rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold ${
                activeScreen == 2 ? "bg-customYellow text-white" : "bg-gray-300 text-black"
              }`}
            >
              2
            </button>
            <p className="mt-2 font-semibold">Get a Driver</p>
            <p className="text-sm">PickMe will find you the nearest available driver.</p>
          </div>

          <div onMouseEnter={() => setActiveScreen(3)} className="flex flex-col items-center cursor-pointer">
            <button
              className={`rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold ${
                activeScreen == 3 ? "bg-customYellow text-white" : "bg-gray-300 text-black"
              }`}
            >
              3
            </button>
            <p className="mt-2 font-semibold">Track Your Driver</p>
            <p className="text-sm">Know your driver’s location and estimated time of arrival in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppScreen;
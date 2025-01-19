import React, { useState } from "react";
import rideImage from "../assets/Ride.jpg";
import foodImage from "../assets/Food.jpg";
import marketImage from "../assets/Market.jpg";
import flashImage from "../assets/Flash.jpg";
import truckImage from "../assets/Truck.jpg";
import rideIcon from "../assets/Ride.svg";
import foodIcon from "../assets/Food.svg";
import marketIcon from "../assets/Market.svg";
import flashIcon from "../assets/Flash.svg";
import truckIcon from "../assets/Truck.svg";
import leftArrow from "../assets/icon-arrow-left.svg";
import rightArrow from "../assets/icon-arrow-right.svg";
import drivingImage from "../assets/bg-driving-options.png";

const OptionsPage = () => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  const options = [
    {
      title: "Ride",
      icon: rideIcon,
      image: rideImage,
      description:
        "PickMe Ride-Hailing includes the largest fleet of vehicles in Sri Lanka offering both on-demand and pre-booking features at the best rates, including TUK-TUKs Flex, Minis, Cars, Minivans, and Vans offering you comfort, convenience and safety, covering the entire island nation.",
    },
    {
      title: "Food",
      icon: foodIcon,
      image: foodImage,
      description:
        "Connecting you with over thousands of restaurants across the island, PickMe Food allows you to relish your favourite cuisines from any food outlet with just a tap of a button, at the comfort of your home or office or even opt for the ‘Self Pick-Up’ option.",
    },
    {
      title: "Market",
      icon: marketIcon,
      image: marketImage,
      description:
        "PickMe Market is a versatile virtual marketplace, including everything from essentials, groceries, pharmaceuticals and much more at your fingertips, allowing you to easily order and get them delivered to your doorstep.",
    },
    {
      title: "Flash",
      icon: flashIcon,
      image: flashImage,
      description:
        "PickMe Flash is a pioneering, on-demand, speedy parcel delivery platform, that enables a seamless package delivery experience, tapping into the largest live fleet of available vehicles in the city.",
    },
    {
      title: "Truck",
      icon: truckIcon,
      image: truckImage,
      description:
        "Introducing PickMe Truck, a reliable, cost-effective, fleet of trucks, exclusively allocated for transportation of heavy goods on demand, that accommodate both one-way and roundtrips.",
    },
  ];

  const handlePrevious = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : options.length - 1));
  };

  const handleNext = () => {
    setSelectedOptionIndex((prevIndex) => (prevIndex < options.length - 1 ? prevIndex + 1 : 0));
  };

  const currentOption = options[selectedOptionIndex];

  return (
    <div className="min-h-screen flex flex-col items-center bg-white py-10 relative">
      <h1 className="text-4xl font-bold mb-8">Know Your Options</h1>

      <div className="flex flex-wrap justify-center gap-8 mb-10">
        {options.map((option, index) => (
          <div
            key={index}
            className={`flex flex-col items-center cursor-pointer ${
              selectedOptionIndex == index ? "" : "text-black"
            }`}
            onClick={() => setSelectedOptionIndex(index)}
          >
            <img src={option.icon} alt={option.title} className="h-16 mb-2" />
            <h2 className="text-l font-medium">{option.title}</h2>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center max-w-6xl gap-10">
        <button onClick={handlePrevious} className="focus:outline-none">
          <img src={leftArrow} alt="Previousbtn" className="h-14" />
        </button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={currentOption.image}
            alt={currentOption.title}
            className="max-w-md shadow-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">{currentOption.title}</h2>
            <p className="text-gray-600">{currentOption.description}</p>
          </div>
        </div>
        <button onClick={handleNext} className="focus:outline-none">
          <img src={rightArrow} alt="Nextbtn" className="h-14" />
        </button>
      </div>

      <img
        src={drivingImage}
        alt="Driving Option"
        className="absolute right-0 bottom-5 h-32 cursor-pointer"
      />
    </div>
  );
};

export default OptionsPage;

import React, { useState } from "react";
import logo from "../assets/logo.svg";

const menuItems = [
  "Ride",
  "Drive",
  "Business",
  "Food",
  "Market",
  "Flash",
  "Truck",
  "Last Mile Delivery",
  "Invest",
];

const Navbar = ({ togglePopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    togglePopup();
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6 md:space-x-20">
            <img
              src={logo}
              alt="PickMe Logo"
              className="h-6 w-auto md:h-8 md:ml-32 ml-4"
            />

            <div className="hidden md:flex space-x-6">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-gray-700 hover:text-yellow-500 text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="/about"
              className="hidden md:block text-gray-700 hover:text-yellow-500 text-sm font-medium"
            >
              About Us
            </a>

            <button
              onClick={toggleMenu}
              className="h-20 w-20 bg-customYellow text-white flex items-center justify-center hover:bg-orange-600 focus:outline-none"
            >
              <i
                className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2l`}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-3 space-y-2">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                className="block text-gray-700 hover:text-yellow-500 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

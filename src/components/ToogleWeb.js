import React, { useState } from 'react';
import logoDropdown from '../assets/logo-dropdown.png';  
import androidIcon from '../assets/icon-app-download-android.png'; 
import appleIcon from '../assets/icon-app-download-apple.png';  
import huaweiIcon from '../assets/icon-app-download-huawei.png';  
import qrCode from '../assets/qr-code.png';  
import bgImage from '../assets/bg-how-it-works.jpg';

const ToogleWeb = () => {
  const [isVisible, setIsVisible] = useState(true);
  const closePopup = () => {
    setIsVisible(false); 
  };

  if (!isVisible) return null;

  return (
    <div className="popup-container fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-content bg-white p-8 rounded-lg shadow-lg flex w-full h-full md:w-full md:h-full">
       
        <div
          className="flex flex-col items-center justify-center"
          style={{
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100%',  
            width: '50%'  
          }}
        >
          <img
            src={logoDropdown}  
            alt="PickMe Logo"
            className="h-28 w-auto mb-8"
          />

          <div className="text-center">
            <h1 className="text-2xl font-bold">For hassle free instant bookings</h1>
            <h2 className="text-2xl font-semibold mb-5">Download The App</h2>

            <div className="flex space mb-8">
              <a href="https://play.google.com/store" target="_blank">
                <img
                  src={androidIcon}  
                  alt="Google Play"
                  className="h-12 w-auto"
                />
              </a>
              <a href="https://apps.apple.com" target="_blank">
                <img
                  src={appleIcon}  
                  alt="App Store"
                  className="h-12 w-auto"
                />
              </a>
              <a href="https://appgallery.huawei.com" target="_blank" >
                <img
                  src={huaweiIcon}  
                  alt="Huawei"
                  className="h-12 w-auto"
                />
              </a>
            </div>

            <h3 className="text-2xl font-medium mb-4">Scan the QR code</h3>
            <img
              src={qrCode}  
              alt="QR Code"
              className="h-12 w-auto mx-auto"
            />
          </div>
        </div>

        <div className="right-side w-full md:w-1/2 p-8 flex flex-col items-start justify-center border-l">
          <div className="flex flex-row w-full justify-between">
            <ul className="flex flex-col space-y-4 text-left text-xl w-1/2">
              <li><a href="/" className="text-black hover:underline">Home</a></li>
              <li><a href="/ride" className="text-black hover:underline">Ride</a></li>
              <li><a href="/drive" className="text-black hover:underline">Drive</a></li>
              <li><a href="/business" className="text-black hover:underline">Business</a></li>
              <li><a href="/food" className="text-black hover:underline">Food</a></li>
              <li><a href="/market" className="text-black hover:underline">Market</a></li>
              <li><a href="/flash" className="text-black hover:underline">Flash</a></li>
              <li><a href="/truck" className="text-black hover:underline">Truck</a></li>
              <li><a href="/last-mile-delivery" className="text-black hover:underline">Last Mile Delivery</a></li>
            </ul>

            <ul className="flex flex-col space-y-4 text-left text-sm w-1/2">
              <li><a href="/tour-packages" className="text-black hover:underline">Tour Packages</a></li>
              <li><a href="/how-it-works" className="text-black hover:underline">How It Works</a></li>
              <li><a href="/about-us" className="text-black hover:underline">About Us</a></li>
              <li><a href="/technology" className="text-black hover:underline">Technology</a></li>
              <li><a href="/franchise" className="text-black hover:underline">Franchise</a></li>
              <li><a href="/careers" className="text-black hover:underline">Careers</a></li>
              <li><a href="/news" className="text-black hover:underline">News</a></li>
            </ul>
          </div>
        </div>

        <button
          onClick={closePopup}
          className="absolute top-4 right-4 text-black text-3xl font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default ToogleWeb;
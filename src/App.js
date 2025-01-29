import React, { useState } from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AppScreen from "./components/AppScreen";
import OptionsPage from "./components/OptionsPage";
import PickMeToogleWeb from "./components/ToogleWeb";
import Footer from "./components/Footer";

function App() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible((prev) => !prev);
  };

  return (
    <Router>
      <div>
        <Navbar togglePopup={togglePopup} />
        {isPopupVisible && (
          <div className="md:block hidden">
            <PickMeToogleWeb />
          </div>
        )}
        <HomePage />
        <AppScreen />
        <OptionsPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
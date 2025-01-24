import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AppScreen from './components/AppScreen';
import OptionsPage from './components/OptionsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename="/pickme-clone">
      <div>
        <Navbar />
        <HomePage />
        <AppScreen />
        <OptionsPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
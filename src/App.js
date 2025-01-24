import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AppScreen from './components/AppScreen';
import OptionsPage from './components/OptionsPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
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
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AppScreen from './components/AppScreen';
import OptionsPage from './components/OptionsPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AppScreen /> 
      <OptionsPage />
      <Footer />
    </div>
  );
}

export default App;
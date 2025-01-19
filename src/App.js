import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AppScreen from './components/AppScreen';
import OptionsPage from './components/OptionsPage';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AppScreen /> 
      <OptionsPage />
    </div>
  );
}

export default App;
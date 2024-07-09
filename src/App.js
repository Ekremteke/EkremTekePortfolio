import './App.css';
import Navbar from "./components/Navbar";
import Cover from './components/Cover';
import Cards from './components/Cards';
import React from 'react';
import Interior from './components/Interior';
import Volunteering from './components/Volunteering';

function App() {
  return (
    <div className='main-container'>
      <Navbar />
      <Cover />
      <Cards />
      <Interior />
      <Volunteering />
    </div>
  );
}

export default App;

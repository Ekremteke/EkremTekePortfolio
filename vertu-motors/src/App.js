import './App.css';
import Navbar from "./components/Navbar";
import Cover from './components/Cover';
import Cards from './components/Cards';
import React from 'react';
import Interior from './components/Interior';
import Electrify from './components/Electrify';

function App() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Cards />
      <Interior />
      <Electrify />
    </div>
  );
}

export default App;

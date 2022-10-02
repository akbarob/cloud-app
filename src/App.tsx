import React from 'react';

import './App.css';
import About from './Components/About';
import AllinOne from './Components/AllinOne';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Pricing from './Components/Pricing';
import Support from './Components/Support';

function App() {
  return (
    <div className='font-robotoslab'>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllinOne/>
      <Pricing/>
      <Footer/>
    </div>
  );  
}
export default App;

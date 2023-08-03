import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import HomePage from '../../components/Home/HomePage';
import Service from '../../components/Services/Service';
import About from '../../components/About/About';

function App() {
  return (
    <div className='homepage'>
      <Navbar/>
      <HomePage/>
      <Service/>
      <About/>
      
    </div>
  )
}

export default App

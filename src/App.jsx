import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Core from './components/Core'
import Layer from './components/layer/Layer';
import Banner from './components/Banner'
import Benefits from './components/Benefits'
import Footer from './components/Footer'

const App = () => {
  return (
   <>
   <Navbar/>
   <Hero/>
   <About/>
   <Core/>
   <Layer/>
   <Benefits/>
   <Banner/>
   <Footer/>
   </>
  )
}

export default App

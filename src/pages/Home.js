import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Footer/>
        <About/>
        <Education/>
        <Skills/>
        <Contact/>
       
    
    
    </div>
  )
}

export default Home
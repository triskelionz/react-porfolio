import React from 'react'
import './Skills.css'
import Navbar from '../components/Navbar'

const Skills = () => {
  return (
    
      <div>
      <Navbar />
      <div className="skills">
        <h2 className="heading-edu">
          My <span>Skills</span>
        </h2>

        <div className="skills-content">
          <div className="coding">
            <h3> Coding Skills</h3>
            <h4>HTML</h4>
            <h4>CSS</h4>

            
          </div>
       

        <div className="professional">
          <h3> Professional Skills</h3>
          <h4>Web Design</h4>
          <h4>Web Development</h4>
          
        </div>

        </div>

      </div>
    </div>

    
  )
}

export default Skills
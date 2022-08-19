import React from 'react'
import Sidebar from './Sidebar'

const About = () => {
  return (<>
    <div>
      <Sidebar pageName='about'/>
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
          About
      </h1>
    </div>
  </>)
}

export default About
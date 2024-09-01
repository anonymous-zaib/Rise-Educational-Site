import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>About School</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus porro ullam magni debitis voluptas, unde modi ex. Fugit, quisquam provident!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis! Quo ratione voluptas sint exercitationem nostrum. Tenetur fuga vitae fugiat harum?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam doloremque vero repudiandae doloribus ab recusandae possimus voluptate. Fuga est placeat soluta.</p>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Cultivating critical thinkers, shaping responsible citizens.</h1>
            <p>Critical thinking, not just memorizing - equip students with the tools to analyze, question, and solve problems, not just repeat facts. Foster intellectual curiosity and independent thought.</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}

export default Hero

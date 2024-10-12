import React from 'react'
import Navbar from './Navbar'
import bgimage from '../../src/assets/bg_image.jpg'

const HeroSection = () => {
  return (
    <div 
    className='lg:h-[40em] md:h-[44em] h-[36em]'
    style={{
        background: "linear-gradient(80deg, black, transparent), url(https://preview.redd.it/how-can-someone-make-this-background-with-html-and-css-i-v0-zjgs096khv591.jpg?width=1080&crop=smart&auto=webp&s=5ec8b5f14222e27eecd19b9f5428793bcc857b58)"
    }}>
      <Navbar/>
      Hero
    </div>
  )
}

export default HeroSection

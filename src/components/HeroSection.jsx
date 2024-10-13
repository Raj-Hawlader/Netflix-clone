import React from 'react'
import Navbar from './Navbar'
import bgimage from '../../src/assets/bg_image.jpg'

const HeroSection = () => {
  return (
    <div 
        className='lg:h-[40em] md:h-[44em] h-[36em]'
        style={{
            background: `linear-gradient(80deg, black, transparent),url(${bgimage})`,
            backgroundSize:'cover'
        }}>
        <Navbar/>
        <div>
          <div className=''>
            <h1 className='text-white'>Unlimited movies, TV shows, and more</h1>
            <p className='text-white'>Starts at USD 2.99. Cancel anytime.</p>
            <p  className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>
          <div>
            <input type="" placeholder='Email address'/>
            <button className='text-white'>Get Started</button>
          </div>
        </div>
    </div>
  )
}

export default HeroSection

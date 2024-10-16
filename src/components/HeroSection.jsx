import React from 'react'
import Navbar from './Navbar'
import bgimage from '../../src/assets/bg_image.jpg'

const HeroSection = () => {
  return (
    <>
    <div 
        className='lg:h-[40em] md:h-[40em] h-[36em]'
        style={{
            background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)),url(${bgimage})`,
            backgroundSize:'cover'
        }}>
        <Navbar/>
        <div  className='container flex items-center justify-center mt-[7em]'>
          <div>
            <h1 className='text-white text-center font-bold lg:text-5xl md:text-5xl text-3xl'>Unlimited movies, TV <br /> shows, and more</h1>
            <p className='text-white text-center mt-[1.2em] font-bold text-lg'>Starts at USD 2.99. Cancel anytime.</p>
            <p className='text-white text-lg mt-[1.2em] text-center'>Ready to watch? Enter your email to create or restart your membership.</p>
            
            <div className='flex flex-wrap items-center justify-center m-4 lg:mt-[1.2em] md:mt-[1.2em]'>
              <input type="text" placeholder='Email address' className='text-white border border-gray-200/50 text-xl bg-transparent px-9 py-3 w-96 rounded-md' />
              <button className='text-white px-11 py-3 bg-red-600 rounded-md text-xl font-bold ml-4'>Get Started</button>
            </div>
          </div>
            
        </div>
    </div>

    <div className="w-full h-1 bg-gradient-to-r from-[#7c1818c7] to-[#184774]"></div></>
  )
}

export default HeroSection

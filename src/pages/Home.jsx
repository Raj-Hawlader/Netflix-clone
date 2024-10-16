import React from 'react'
import HeroSection from '../components/HeroSection'
import Enjoy from '../components/Enjoy'
import "slick-carousel/slick/slick.css"; 
import imageSlider from '../components/imageSlider';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Enjoy/>
      <imageSlider/>
    </div>
  )
}

export default Home

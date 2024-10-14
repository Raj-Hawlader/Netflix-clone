import React from 'react'
import logo from '../../src/assets/netflix-logo.png'
const Navbar = () => {
  return (
    <div>
      <div className='main lg:flex md:flex justify-start lg:justify-around md:justify-around py-2 px-4'>
        <div className='left'>
          <div className='netflix-logo'>
            <img src={logo} className='lg:w-40 md:40 w-24'/>
          </div>
        </div>

        <div className="right flex-wrap lg:flex md:flex items-center justify-center">
          <div className='selector bg-[#393946a1] text-white mx-4 px-2 py-1 rounded-md border-[1px] border-gray-500 hover:ring-2 hover:ring-gray-100'>
            <select 
            name='' 
            id='' 
            className='bg-transparent outline-none cursor-pointer'>
              <option value="English"  className='text-[#111111]'>English</option>
              <option value="Bangla" className='text-[#111111]'>Bangla</option>
            </select>
          </div>
      
          <button className='text-white bg-[#ee3636] px-2 py-0.5 rounded-md hover:bg-[#d82626]'>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar

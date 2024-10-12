import React from 'react'
import logo from '../../src/assets/netflix-logo.png'
const Navbar = () => {
  return (
    <div>
      <div className='main'>
        <div className='left'>
          <div className='netflix-logo'>
            <img src={logo} />
          </div>
        </div>
        <div className="right">
          <div>
            <select name='' id='' className=''>
              <option value="Englis">Englis</option>
              <option value="Bangla">Bangla</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import netflix_logo from '../../src/assets/netflix-logo.png'

const Navbar = () => {
  return (
    <div className=''>
        <div className=''>
            <div>
                <img src={netflix_logo} />
            </div>
            <button>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar
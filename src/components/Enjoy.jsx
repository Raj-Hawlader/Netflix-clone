import React from 'react'

export default function Enjoy() {
  return (
    <div className='ml-32 mt-8 mb-5'>
      <div className='mb-5'>
        <h1 className='text-white font-semibold text-2xl'>Trending Now</h1>
      </div>
      <div className='flex gap-5'>

          <select name="" id="" className='bg-transparent bg-[#393946a1] text-white px-4 py-1 rounded-sm border-[1px] border-gray-500 hover:ring-2 hover:ring-gray-100' >
            <option value="Bangladesh" className='text-black'>Bangladesh</option>
            <option value="Global"className='text-black'>Global</option>
          </select>
        
        <div>
          <select name="" id=""className='bg-transparent bg-[#393946a1] text-white px-4 py-1 rounded-sm border-[1px] border-gray-500 hover:ring-2 hover:ring-gray-100'>
            <option value="Movies"className='text-black'>Movies</option>
            <option value="TV shows"className='text-black'>TV shows</option>
          </select>
        </div>
        
      </div>
    </div>
  )
}

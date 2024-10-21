import React from 'react'

export default function Footer() {
  return (
        <footer className=" text-white py-8">
        <div >
            <div className='flex justify-center'>
                <h1 className='font-bold pb-6'>Ready to watch? Enter your email to create or restart your membership.</h1>
            </div>
            <div className='flex justify-center gap-4 pb-10'>
                <input type="text" className='bg-transparent border rounded-md px-4 w-2/5 ' placeholder='Email address'/>
                <button className='bg-[#db1717] px-6 py-3 text-2xl font-semibold rounded-md text-white'>Get started</button>
            </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Careers</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
    
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul>
                <li><a href="#" className="hover:underline">Contact Us</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Help Center</a></li>
              </ul>
            </div>
    
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
    
          </div>

          <div className="text-center mt-8">
            <p>Netflix Bangladesh</p>
          </div>
        </footer>
      );
}

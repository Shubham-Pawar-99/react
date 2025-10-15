import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-18 py-8'>
        <h4 className='bg-black rounded-full text-white px-6 py-2 uppercase'>Target Audience</h4>
        <button className='bg-gray-200 rounded-full px-6 py-2 text-sm tracking-widest uppercase'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar
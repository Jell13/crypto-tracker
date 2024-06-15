import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white flex items-center w-full justify-between lg:px-32 py-6 h-20 border-b-2 border-gray-600'>
      <h1>Logo</h1>
      <ul className='flex gap-6'>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div>
        <select name="" id="">
            <option value="">USD</option>
            <option value="">EUR</option>
        </select>
        <button></button>
      </div>
    </div>
  )
}

export default Navbar

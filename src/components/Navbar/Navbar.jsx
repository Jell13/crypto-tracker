import React from 'react'

const Navbar = () => {

    const links = [
        {
            content: "Home"
        },
        {
            content: "Features"
        },
        {
            content: "Pricing"
        },
        {
            content: "Blog"
        }
    ]
  return (
    <div className='text-white flex items-center w-full justify-between lg:px-32 py-6 h-20 border-b-2 border-gray-600 fixed'>
      <h1>Logo</h1>
      <ul className='flex gap-8 cursor-pointer'>
        {links.map(({content, id})  => (
            <li className='group hover:scale-110 duration-300 relative'>{content}
            <span className='absolute group-hover:w-full duration-300 border-b-[2px] left-0 bottom-[0.5px] border-white w-0'>&nbsp;</span></li>
        ))}
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

import { MoveUpRight } from 'lucide-react'
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
      <h1>CryptoTrack</h1>
      <ul className='flex gap-8 cursor-pointer'>
        {links.map(({content, id})  => (
            <li className='group hover:scale-110 duration-300 relative'>{content}
            <span className='absolute group-hover:w-full duration-300 border-b-[2px] left-0 bottom-[0.5px] border-white w-0'>&nbsp;</span></li>
        ))}
      </ul>
      <div className='flex gap-4'>
        <select className='bg-transparent border-2 border-white px-2 rounded-lg py-2' name="" id="">
            <option className='bg-black' value="">USD</option>
            <option className='bg-black' value="">EUR</option>
        </select>
        <button className='flex p-2 bg-white text-black rounded-lg justify-center items-center hover:bg-gray-500'>Sign Up<MoveUpRight size={15}/></button>
      </div>
    </div>
  )
}

export default Navbar

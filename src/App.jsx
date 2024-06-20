import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='min-h-screen w-screen bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]'>
        <Navbar/>
      </div>
    </>
  )
}

export default App

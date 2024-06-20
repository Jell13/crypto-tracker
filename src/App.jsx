import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'

function App() {

  return (
    <>
      <div className='min-h-screen w-screen bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834]'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/coin/:coinid' element={<Coin/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

import React from 'react'

const Home = () => {
  return (
    <div className='text-white py-[10px] pb-[100px]'>
      <div className=' max-w-[600px] my-[80px] flex flex-col items-center text-center gap-7 mx-auto'>
        <h1 className='text-4xl font-semibold'>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to the world's largest crytpocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form className='flex gap-2'>
            <input className='rounded-lg px-2' type="text" placeholder='Search crypto..' />
            <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Home

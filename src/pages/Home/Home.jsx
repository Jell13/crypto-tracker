import React from 'react'

const Home = () => {
  return (
    <div className='text-white py-[10px] pb-[100px]'>
      <div className=' max-w-[600px] my-[80px] flex flex-col items-center text-center gap-7 mx-auto'>
        <h1 className='text-4xl font-semibold'>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to the world's largest crytpocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form className='flex gap-2 w-[80%] p-2 bg-white justify-between rounded-lg'>
            <input className='rounded-lg px-2 flex 1 pl-[10px] text-black border-none outline-none' type="text" placeholder='Search crypto..' />
            <button type='submit' className='bg-purple-500 hover:bg-white hover:text-purple-500 px-2 duration-500 rounded-md p-1'>Search</button>
        </form>
      </div>
      <div className='max-w-[800px] m-auto bg-[#0b004e] rounded-lg'>
        <div className='grid grid-cols-5 items-center px-4 py-5 border-b-[1px] border-[#3c3c3c] rounded-lg'>
          <p>#</p>
          <p>Coins</p>
          <p className=''>Price</p>
          <p className='text-center'>24H Change</p>
          <p className='text-right'>Market Cap</p>
        </div>
      </div>
    </div>
  )
}

export default Home

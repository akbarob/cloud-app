import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-full my-32 px-10'>
      <div className='max-width-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold '>Trusted By Developers Across The World</h2>
          <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-5 text-center px-2'>
          <div className='py-6  rounded-lg shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 mt-3'>Completion</p>
          </div>
          <div className='py-6 rounded-lg shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 mt-3'>Delivery</p>
          </div>
          <div className='py-6  rounded-lg shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100k</p>
            <p className='text-gray-400 mt-3'>Transactions</p>
          </div>
        </div>
        
      </div>

    </div>
  )
}

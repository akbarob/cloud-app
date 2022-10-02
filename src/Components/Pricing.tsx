import React from 'react'
import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'

export default function Pricing() {
  return (
    <div id='pricing' className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute '></div>
        <div className='max-w-[1240px] mx-auto py-12 relative'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='uppercase text-3xl'>Pricing</h2>
                <h4 className='text-5xl font-bold text-white py-8'>The right price for your research</h4>
                <p className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='grid md:grid-cols-3'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate- 300 flex flex-col justify-end'>/mo</span></p> 
                    </div>
                    <div>
                        <p className='text-2xl py-8 text-slate- 300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='text-xl' >
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineClose size={ 30} className='text-red-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineClose size={ 30} className='text-red-600'/> Lorem ipsum dolor sit amet</p>
                    </div>
                    <button className='w-full py-4 my-4'>Get Started</button>

                </div>

                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate- 300 flex flex-col justify-end'>/mo</span></p> 
                    </div>
                    <div>
                        <p className='text-2xl py-8 text-slate- 300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='text-xl' >
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineClose size={ 30} className='text-red-600'/> Lorem ipsum dolor sit amet</p>
                    </div>
                    <button className='w-full py-4 my-4'>Get Started</button>

                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49 <span className='text-xl text-slate- 300 flex flex-col justify-end'>/mo</span></p> 
                    </div>
                    <div>
                        <p className='text-2xl py-8 text-slate- 300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='text-xl' >
                        <p className='flex py-4'><AiOutlineCheck size={30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                        <p className='flex py-4'><AiOutlineCheck size={ 30} className='text-green-600'/> Lorem ipsum dolor sit amet</p>
                    </div>
                    <button className='w-full py-4 my-4'>Get Started</button>

                </div>

            </div>

            
            
        </div>


    </div>
  )
}

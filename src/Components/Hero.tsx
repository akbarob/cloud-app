import React from 'react'
import {GiCloudUpload,GiDatabase} from 'react-icons/gi'
import {FaServer} from 'react-icons/fa'
import {HiPaperAirplane} from 'react-icons/hi'
import bgImg from '../assets/cyber-bg.png'

export default function Hero() {
  return (
    <div id="home" className='w-full h-screen bg-zinc-300 flex flex-col justify-between '>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-6 py-8 '>
                <p className='text-2xl'>Unique Sequencing & Production</p>
                <h1 className='py-3 text-5xl md:text-7xl font bold text-indigo-600'>Cloud Management</h1>
                <p className='text-2xl mb-3'>This is our Tech brand</p>
                <button className='py-3 px-8 sm:w-[60%]'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="hero" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-150px] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-300 border border-slate-500 rounded-xl text-center shadow-xl'>
                <p className='font-bold text-3xl pb-2'>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 mr-2'> <GiCloudUpload size={30} className='text-indigo-600'/> App Security</p>
                    <p className='flex px-4 py-2 mr-2'><GiDatabase size={30} className='text-indigo-600'/> Dashboard design</p>
                    <p className='flex px-4 py-2 mr-2'><FaServer size={30} className='text-indigo-600'/> Cloud data</p>
                    <p className='flex px-4 py-2 mr-2'><HiPaperAirplane size={30} className='text-indigo-600'/> Cloud Api</p>
            </div>
        </div>
    </div>
    </div>
  )
}

import React from 'react'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BiSupport, BiChip} from 'react-icons/bi'
import supportImg from '../assets/support.jpg'

export default function Support() {
  return (
    <div id='support' className='w-full mt-24'>
        <div className='w-full h-[700px] bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt='support'/>
        </div>
        <div className='text-white max-w-[1240px] relative mx-auto'>
            <div className='px-5 py-12'>
                <h2 className='pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h3 className='text-center text-5xl font-bold py-6 '>Finding the right team</h3>
                <p className='text-3xl text-slate-300 py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-2xl shadow-xl'>
                    <div className='p-8'>
                        <AiOutlinePhone size={40} className='text-white bg-indigo-600 rounded-xl mt-[-4rem] p-1'/>
                        <h3 className='text-2xl font-bold my-6'>Sales</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 rounded-xl'>
                        <p className='flex items-center text-indigo-600'>Contact Us    <BsArrowRightCircle size={30} className='ml-6'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-xl'>
                    <div className='p-8'>
                        <BiSupport size={40} className='text-white bg-indigo-600 rounded-xl mt-[-4rem] p-1'/>
                        <h3 className='text-2xl font-bold my-6'>Technical Support</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 rounded-xl'>
                        <p className='flex items-center text-indigo-600'>Contact Us    <BsArrowRightCircle size={30} className='ml-6'/></p>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-xl'>
                    <div className='p-8'>
                        <BiChip size={40} className='text-white bg-indigo-600 rounded-xl mt-[-4rem] p-1'/>
                        <h3 className='text-2xl font-bold my-6'>Media Inquires</h3>
                        <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4 rounded-xl'>
                        <p className='flex items-center text-indigo-600'>Contact Us    <BsArrowRightCircle size={30} className='ml-6'/></p>
                    </div>
                </div>
            </div>

            

            
        </div>
    </div>
  )
}

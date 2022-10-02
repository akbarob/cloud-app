import React, { useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import { Link, animateScroll as scroll,} from 'react-scroll'

export default function Navbar() {
    const [nav, setNav]= useState<boolean>(false)
    const navToggler = () => setNav(!nav)
    const closeNav =() => setNav(false)
    
  return (
    <nav className='w-screen h-[60px] z-10 bg-zinc-200 drop-shadow-lg shadow-white sticky top-0 '>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl text-indigo-500 font-robotoslab'>Brand</h1>
                <ul className='hidden md:flex'>
                
                <li className='navs'><Link  spy={true} to="home" smooth={true} duration={500} >Home</Link></li>
                <li className='navs'><Link  activeClass='active' spy={true} to="about" smooth={true} offset={-100} duration={500}>About</Link></li>
                <li className='navs'><Link spy={true} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                <li className='navs'><Link spy={true}  to="platform" smooth={true} offset={-100} duration={500}>Platform</Link></li>
                <li className='navs '><Link spy={true} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                 
                </ul>
            </div>
            <div className='hidden md:flex pr-5'>
                <button className='border-none bg-transparent text-black mr-5'>Sign In</button>
                <button className='px-8 py-2'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={navToggler}>
                {!nav ? <AiOutlineMenu className='mr-5 ' size={30}/> : <GrClose className='mr-5' size={30}/> }
                
            </div>

            
        </div>
        {/* Mobile nav ba */}
        <ul className={!nav ? 'hidden' : 'md:hidden absolute w-full px-8 bg-zinc-200  border-t-2 border-zinc-400'}>
            <Link to="home" smooth={true} duration={500} onClick={closeNav}><li className='mobile-nav'>Home</li></Link>
            <Link to="about" smooth={true} offset={-200} duration={500} onClick={closeNav}><li className='mobile-nav' >About</li></Link>
            <Link to="support" smooth={true} offset={-100} duration={500} onClick={closeNav}><li className='mobile-nav' >Support</li></Link>
            <Link to="platform" smooth={true} offset={-100} duration={500} onClick={closeNav}><li className='mobile-nav' >Platform</li></Link>
            <Link to="pricing" smooth={true} offset={-100} duration={500} onClick={closeNav}><li className='mobile-nav' >Pricing</li></Link>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
                    <button className='py-3 mb-4'>Sign Up</button>
                </div>
            </ul> 

    </nav>
  )
}

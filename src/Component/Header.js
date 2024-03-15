import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className=' bg-slate-600 shadow-md shadow-slate-600 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-lime-300 italic font-semibold'>followUp</span>
                    <span className='text-amber-500 font-sans '>Reminder</span>
                </h1>
                
                <ul className='flex items-center gap-4 text-white'>
                    <Link to="/">
                        <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Home</li>
                    </Link>
                    
                    <Link>
                        <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Follow-Ups</li>
                    </Link>
                    <Link to="/">
                        <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Profile</li>
                    </Link>
                    <Link to="/sign-in">
                        <li className='hidden md:inline font-semibold hover:underline cursor-pointer text-white'>Sign-in</li>
                    </Link>
                </ul>
            </div>
        </header>
        
    </>
  )
}

export default Header
import React, { useState } from 'react';
import { Link } from 'react-scroll'
import { FaAlignJustify, FaTimes } from "react-icons/fa";

const Navbar = ({darkMode, setDarkMode}) => {
  const [nav, setNav] = useState(false)
    console.log('dark', darkMode);
  return (
    <nav className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg dark:bg-gray-800'>
      <div className='flex items-center justify-between w-full h-full px-10'>
        <div className='flex items-center'>
          <h1 className='mr-4 text-3xl font-bold sm:text-4xl dark:text-gray-300'>Chatty</h1>

          <ul className='hidden md:flex'>
            <li className='dark:text-gray-300'><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='dark:text-gray-300'><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className='dark:text-gray-300'><Link to="support" smooth={true} duration={500}>Support</Link></li>
            <li className='dark:text-gray-300'><Link to="feature" smooth={true} duration={500}>Feature</Link></li>
            <li className='dark:text-gray-300'><Link to="testimonials" smooth={true} duration={500}>Feedback</Link></li>
          </ul>
        </div>

        <div className='hidden pr-4 md:flex items-center space-x-4'>
            {/*DarkMode */}
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type='checkbox'
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}/>
                {/* toggle style */}
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300
                          dark:peer-focus:ring-yellow-300 rounded-full peer dark:bg-gray-700
                          peer-checked:after:translate-x-full peer-checked:after:border-white
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5
                          after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                </div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  {darkMode ? 'Dark' : 'Light'}
              </span>
            </label>

          <button className='mr-4 text-black bg-transparent border-none dark:text-gray-300'>
            Sign In
          </button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
        <div className='mr-4 md:hidden' onClick={() => setNav(!nav)}>
          {!nav ? <FaAlignJustify className='w-5' /> : <FaTimes className='w-5' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to="home" smooth={true} duration={500}>Home</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to="about" smooth={true} duration={500}>About</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to="support" smooth={true} duration={500}>Support</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to="feature" smooth={true} duration={500}>Feature</Link></li>
        <li className='w-full border-b-2 border-zinc-300'><Link onClick={() => setNav(false)} to="testimonials" smooth={true} duration={500}>Feedback</Link></li>

        <div className='flex flex-col my-4'>
          <button className='px-8 py-3 mb-4 text-slate-600 bg-transparent'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
        </div>
      </ul>
    </nav>

  );
};

export default Navbar;

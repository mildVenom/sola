import React, { useState } from 'react';
import icon from '../assets/images/logo.png';

const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className='flex items-center justify-between gap-3 px-4 py-2 md:py-2 md:px-36 shadow top-0  w-full'>
            <img src={icon} alt="school of life art logo" className='h-30 w-60' />

            <div className={`nav-list middleNav ${isNavOpen ? 'block' : 'hidden'} md:flex`}>
                <ul className="flex flex-col md:flex-row gap-4 md:gap-16 items-center justify-center md:py-0 py-8 font-medium md:text-md text-gray-700">
                    <li className="nav-li active no-underline capitalize hover:text-orange-700">
                        <a href="#"  className=" nav-li active:text-orange-500">Home</a>
                    </li> 
                    <li className=" no-underline capitalize hover:text-orange-700">
                        <a href="#"  className=" nav-li active:text-orange-500">About</a>
                    </li> 
                    <li className=" no-underline capitalize hover:text-orange-700">
                        <a href="#" className=" nav-li active:text-orange-500 text-nowrap">What we offer</a>
                    </li>
                </ul>
            </div>

            <div className="md:hidden">
                <button
                    onClick={toggleNav}
                    className="text-white focus:outline-none"
                >
                    {isNavOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col justify-center items-center mt-4">
                    <li>
                        <a href="#" className="block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 px-4 text-orange-500 hover:bg-orange-500 hover:text-white">
                            What we offer
                        </a>
                    </li>
                </ul>
            </div>

            <button className="hidden md:block bg-orange-500 hover:bg-orange-700 text-nowrap sm:text-md text-white py-2 px-4 rounded-full capitalize font-semibold transition duration-300 ease-in-out">
                Get Started
            </button>
        </nav>
    );
};

export default Navigation;

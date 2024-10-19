import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../index.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(()=> {
        const handleScroll = () => {
            if (window.scrollY()) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll)
        return window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <nav className='navbar'>
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8 ">
                <div className=" p-3  text-sm flex items-center justify-between max-h-fit">
                    <div className=" inset-y-0 left-0 flex items-center sm:hidden rounded-full  ">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="bg-slate-950  flex-1 px-8 rounded-full flex items-center justify-center py-3 sm:text-xl sm:justify-between ">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to={'/'}><img className="h-25 w-40" src={logo} alt="Logo" /></Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4  items-center">
                                <NavLink to="/" className={({ isActive }) =>  `text-gray-300 links border-b-4  border-slate-800   px-3 py-2 rounded-md  font-medium ${isActive ? `border-white text-white` :`hover:border-white   hover:text-white`}`}>Home</NavLink>
                                <NavLink to="/events" className={({ isActive }) => `text-gray-300 links border-b-4  border-slate-800   px-3 py-2 rounded-md  font-medium ${isActive ? `border-white text-white` : `hover:border-white   hover:text-white`}`}>Events</NavLink>
                                <NavLink to="/team" className={({ isActive }) => `text-gray-300 links border-b-4  border-slate-800   px-3 py-2 rounded-md  font-medium ${isActive ? `border-white text-white` : `hover:border-white   hover:text-white`}`}>Team</NavLink>
                                <NavLink to="/magazine" className={({ isActive }) => `text-gray-300 links border-b-4  border-slate-800   px-3 py-2 rounded-md  font-medium ${isActive ? `border-white text-white` : `hover:border-white   hover:text-white`}`}>Magazine</NavLink>
                            </div>
                        </div>
                        <div className=' hidden sm:flex sm:space-x-4 sm:text-xl sm:items-center'>
                            <NavLink to="/contact" className={({ isActive }) => `text-gray-300 links border-b-4  border-slate-800   px-3 py-2 rounded-md  font-medium ${isActive ? `border-white text-white` : `hover:border-white   hover:text-white`}`}>Contact Us</NavLink>

                        </div>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
                        <NavLink to="/events" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Events</NavLink>
                        <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</NavLink>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

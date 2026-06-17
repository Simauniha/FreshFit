import React, { useState } from 'react'
import "./Navbar.css";
import Logo from "../../assets/logo-name.png"
import { NavLink, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between py-5 font-medium">
                <img src={Logo} className="w-36" alt="Logo" />
                <ul className="hidden sm:flex gap-5 text-lg text-gray-700">
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>Collection</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>About</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>

                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contact</p>
                        <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    <button className='w-5 cursor-pointer'><FaSearch className="text-xl" /></button>

                    <div className='group relative'>
                        <button className='w-5 cursor-pointer'><FaUser className="text-xl" /></button>

                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className="flex flex-col gap-2 w-36 py-5 bg-slate-100 text-gray-500 rounded shadow-lg">
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p className='cursor-pointer hover:text-black'>Orders</p>
                                <p className='cursor-pointer hover:text-black'>Log Out</p>
                            </div>
                        </div>
                    </div>

                    <Link to="/cart" className='relative'>
                        <button className='w-5 min-w-5 cursor-pointer'><FaShoppingCart className="text-xl" /></button>
                        <p className='absolute -right-1.75 -bottom-0.5 w-4 text-center leading-4 bg-white text-black aspect-square border border-black rounded-full text-[10px] '>10</p>
                    </Link>
                    <button onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden'><RxHamburgerMenu className='text-2xl' /></button>
                </div>
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? "w-full" : "w-0"}`}>
                    <div className="flex flex-col text-gray-600">
                        <div onClick={() => setVisible(false)} className="flex items-center gap-1 p-3 cursor-pointer">
                            <button className='h-4 rotate-90'><IoIosArrowDown /></button>
                            <p>Back</p>
                        </div>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">Home</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">Collection</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">About</NavLink>
                        <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

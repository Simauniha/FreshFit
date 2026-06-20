import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <hr className="text-gray-400 mt-30" />
      <div className="flex flex-col sm:grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-14 my-10 text-lg">

        {/* <div>
          <div className="flex items-center gap-4 mb-5">
            <img src={Logo} alt="FreshFit Logo" className="h- w-auto" />
            <p className='text-6xl font-medium'>FreshFit</p>
          </div>
          <p className='w-full md:w-2/3 text-gray-600'>
            Premium activewear designed for performance. Move freely, train harder, look fresh.
          </p>
        </div> */}

        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={Logo} alt="FreshFit Logo" className="h-13 w-auto" />
            <p className='text-5xl font-bold text-gray-900'>FreshFit</p>
          </div>
          <p className='w-full md:w-2/3 text-(--neutral-300) leading-relaxed'>
            Premium wear designed for performance. Move freely, train harder, look fresh. Made in India for Indians.
          </p>
        </div>


        {/* COMPANY */}
        <div className="group">
          <p className='text-xl font-medium mb-2 text-(--primary-900)'>COMPANY</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-(--accent-100) mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          <ul className="flex flex-col gap-2 text-(--neutral-500)">
            <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
            <li><Link to="/delivery" className="hover:text-gray-900">Delivery</Link></li>
            <li><Link to="/privacy" className="hover:text-gray-900">Privacy</Link></li>
          </ul>
        </div>

        {/* HELP */}
        <div className="group">
          <p className='text-xl font-medium mb-2 text-(--primary-900)'>HELP</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-(--accent-100) mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          <ul className="flex flex-col gap-2 text-(--neutral-500)">
            <li><Link to="/shipping" className="hover:text-gray-900">Shipping Policy</Link></li>
            <li><Link to="/returns" className="hover:text-gray-900">Returns & Exchange</Link></li>
            <li><Link to="/size-guide" className="hover:text-gray-900">Size Guide</Link></li>
            <li><Link to="/faq" className="hover:text-gray-900">FAQs</Link></li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div className="group">
          <p className="text-xl font-medium mb-2 text-(--primary-900)">GET IN TOUCH</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-(--accent-100) mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          <ul className="flex flex-col gap-2 text-(--neutral-500)">
            <li><a href="tel:+919876543210" className="hover:text-gray-900">+91 98765 43210</a></li>
            <li><a href="mailto:FreshFit@gmail.com" className="hover:text-gray-900">FreshFit@gmail.com</a></li>
            <li><Link to="/location" className="hover:text-gray-900">Mumbai, India</Link></li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-(--primary-900)" />
        <p className="text-(--primary-900) py-5 text-center text-lg">
          © Copyright 2026 FreshFit. All Rights Reserved.
        </p>
      </div>
    </>
  )
}
export default Footer
import React from 'react'
import Logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-lg">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <img src={Logo} alt="FreshFit Logo" className="h-15 w-auto" />
            <p className='text-6xl font-medium'>FreshFit</p>
          </div>
          <p className='w-full md:w-2/3 text-(--neutral-300)'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, magnam sed dolorum repudiandae libero modi, maxime consequuntur laboriosam corrupti nemo velit accusamus corporis minus, aut possimus necessitatibus nostrum natus quisquam!</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 text-(--primary-900)'>COMPANY</p>
          <ul className="flex flex-col gap-1 text-(--neutral-500)">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </>
  )
}
export default Footer

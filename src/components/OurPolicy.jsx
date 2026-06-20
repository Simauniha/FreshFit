import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdCurrencyRupee } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const OurPolicy = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-16 text-(--primary-900)">

        <div className="text-center">
          <TbTruckDelivery className="mx-auto mb-4 h-12 text-9xl" />
          <h3 className="font-semibold">Free Shipping</h3>
          <p className="text-sm text-(--accent-100)">On orders above ₹999</p>
        </div>
        <div className="text-center">
          <MdCurrencyRupee className="mx-auto mb-4 h-12 text-9xl" />
          <h3 className="font-semibold">COD Available</h3>
          <p className="text-sm text-(--accent-100)">Pay when it arrives</p>
        </div>
        <div className="text-center">
          <BiSupport className="mx-auto mb-4 h-12 text-9xl" />
          <h3 className="font-semibold">WhatsApp Support</h3>
          <p className="text-sm text-(--accent-100)">Chat with us 9AM - 9PM</p>
        </div>
      </div>
    </>
  )
}
export default OurPolicy

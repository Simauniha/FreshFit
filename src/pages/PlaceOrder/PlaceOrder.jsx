import CartTotal from "../../components/CartTotal";
import Title from "../../components/Title";
import { SiPaytm } from "react-icons/si";
import { FaGooglePay } from "react-icons/fa6";
import { GrPaypal } from "react-icons/gr";
import cod from "../../assets/cod.png";
import React, { useContext, useState } from 'react'
import { ShopContext } from "../../Context/ShopContext";

const PlaceOrder = () => {
  const [method,setMethod]=useState("cod")
  const{navigate}=useContext(ShopContext)
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* left side */}
        <div className="flex flex-col w-full sm:max-w-120 gap-4">
          <div className="text-2xl sm:text-3xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />
          </div>
          <div className="flex gap-3">
            <input type="text" placeholder="First Name" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
            <input type="text" placeholder="Last Name" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
          </div>
          <input type="email" placeholder="Email Address" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
          <input type="text" placeholder="Street" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
          <div className="flex gap-3">
            <input type="text" placeholder="City" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
            <input type="text" placeholder="State" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
          </div>
          <div className="flex gap-3">
            <input type="number" placeholder="Zipcode" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
            <input type="text" placeholder="Country" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
          </div>
          <input type="number" placeholder="Phone" className="border border-gray-500 rounded py-1.5 px-3.5 w-full" />
        </div>
        {/* right side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal/>
          </div>
          <div className="mt-12 text-2xl">
            <Title text1={"PAYEMENT"} text2={"METHOD"}/>
            {/* payement method */}
            <div className="flex gap-3 flex-col lg:flex-row mt-5">
              <div className="flex items-center border border-(--primary-900) p-2 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-(--primary-700) rounded-full ${method==="Patym"?"bg-(--primary-700)":''}`}></p>
                <button onClick={()=>setMethod("Patym")} className="mx-4"><SiPaytm size={40} /></button>
              </div>

              <div className="flex items-center gap-3 border border-(--primary-900) p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-(--primary-700) rounded-full ${method==="GooglePay"?"bg-(--primary-700)":''}`}></p>
                <button onClick={()=>setMethod("GooglePay")} className="mx-2"><FaGooglePay size={40} /></button>
              </div>

              <div className="flex items-center gap-3 border border-(--primary-700) p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-(--primary-700) rounded-full ${method==="Paypal"?"bg-(--primary-900)":''}`}></p>
                <button onClick={()=>setMethod("Paypal")} className="mx-4"><GrPaypal size={25} /></button>
              </div>

              <div className="flex items-center gap-3 border border-(--primary-700) p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border border-(--primary-900) rounded-full ${method==="COD"?"bg-(--primary-700)":''}`}></p>
                <img onClick={()=>setMethod("COD")} className="h-9.25" src={cod} alt="COD" />
              </div>
            </div>
            <div className="w-full text-end">
              <button onClick={()=>navigate('/orders')} className='bg-(--primary-900) text-white text-sm my-8 px-8 py-3'>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlaceOrder

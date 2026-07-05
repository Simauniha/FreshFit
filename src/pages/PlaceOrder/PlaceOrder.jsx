import Title from "../../components/Title";
import React from 'react'

const PlaceOrder = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
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
        </div>
      </div>
    </>
  )
}

export default PlaceOrder

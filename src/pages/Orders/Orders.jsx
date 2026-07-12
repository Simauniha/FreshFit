import React, { useContext } from 'react'
import Title from "../../components/Title"
import {ShopContext} from "../../Context/ShopContext"

const Orders = () => {
  const{currency,products}=useContext(ShopContext);
  return (
    <>
    <div className="border-t pt-16">
      <div className="text-3xl">
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>


    </div>
    </>
  )
}

export default Orders

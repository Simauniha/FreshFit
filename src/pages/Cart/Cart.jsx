import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import Title from '../../components/Title';
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {

  const { currency, products, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    // console.log(tempData);
    setCartData(tempData);

  }, [cartItems])

  return (
    <>
      <div className="border-t pt-4">
        <div className="text-3xl mb-3">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>
        <div className="">
          {
            cartData.map((item, index) => {
              const productData = products.find((product) => product._id === item._id);

              return (
                <div
                  key={index}
                  className="py-5 border-t border-b text-gray-700 grid grid-cols-[3fr_1fr_0.5fr] sm:grid-cols-[4fr_1fr_0.3fr] items-center gap-4"
                >
                  <div className="flex items-center gap-5">
                    <img src={productData.image[0]} alt="product image" className="w-20 h-24 object-cover rounded" />
                    <div>
                      <p className="text-sm sm:text-lg font-semibold text-(--primary-900)">
                        {productData.name}
                      </p>
                      <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <p>
                          {currency}{productData.price}
                        </p>
                        <p className="px-3 py-1 border rounded bg-gray-100 text-sm">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <input onChange={(e) => e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className="border rounded w-16 sm:w-20 h-10 text-center outline-none" />

                  <button onClick={() => updateQuantity(item._id, item.size, 0)} className="text-gray-500 hover:text-red-500 active:text-red-500 transition cursor-pointer"><RiDeleteBin5Line /></button>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Cart

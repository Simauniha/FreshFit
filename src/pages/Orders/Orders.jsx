import React, { useContext } from "react";
import Title from "../../components/Title";
import { ShopContext } from "../../Context/ShopContext";

const Orders = () => {
  const { currency, products } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 min-h-screen">
      <div className="text-3xl mb-8">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[3fr_1fr_auto] items-center gap-6 py-6 border-b border-gray-300"
          >
            {/* Product Details */}
            <div className="flex items-center gap-5">
              <img
                src={item.image[0]}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {item.name}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-700">
                  <p className="text-lg font-semibold">
                    {currency}
                    {item.price}
                  </p>

                  <p>Quantity: 1</p>

                  <p>
                    Size: <span className="uppercase">M</span>
                  </p>
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  Date: 14 JUL 2026
                </p>
              </div>
            </div>

            {/* Order Status */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>

              <p className="font-medium text-gray-700">
                Ready to Ship
              </p>
            </div>

            {/* Button */}
            <div className="md:justify-self-end">
              <button className="border border-gray-400 px-6 py-2 rounded hover:bg-black hover:text-white transition duration-300">
                Track Your Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
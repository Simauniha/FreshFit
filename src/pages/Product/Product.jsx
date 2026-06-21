import { useParams } from "react-router-dom";
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from "../../Context/ShopContext";
import { GoStarFill, GoCheck } from "react-icons/go";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [activeTab, setActiveTab] = useState('description'); // ← ye state add kar

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex items-start gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[19%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 shrink-0 aspect-4/4 object-cover cursor-pointer"
                alt="product images"
              />
            ))}
          </div>
          <div className="w-full sm:w-[70%]">
            <img src={image} className="w-full h-auto" alt="main product" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-4xl mt-2 text-(--primary-900)">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2 text-xl">
            <GoStarFill color="#e45641" />
            <GoStarFill color="#e45641" />
            <GoStarFill color="#e45641" />
            <GoStarFill color="#e45641" />
            <GoStarFill color="#edc7c2" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium text-(--neutral-300)">{currency} {productData.price}</p>
          <p className="mt-5 text-xl text-gray-500 md:w-4/5">{productData.description}</p>

          <div className="flex flex-col gap-4 my-8 text-(--primary-900) text-xl">
            <p>Select Size</p>
            <div className="flex gap-2 text-xl">
              {productData.sizes.map((item, index) => (
                <button onClick={() => setSize(item)} key={index} className={`py-2 px-4 bg-gray-100 active:bg-gray-400 shadow-lg ${item === size ? "border border-(--primary-900)" : ""}`}>{item}</button>
              ))}
            </div>
          </div>

          <button className="bg-(--primary-900) text-white px-8 py-3 text-lg active:bg-(--primary-800)">ADD TO CART</button>
          <hr className="mt-8 sm:w-4/5 text-gray-300" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-4">
            <p className="flex items-center gap-2"><GoCheck /> 100% Original Products</p>
            <p className="flex items-center gap-2"><GoCheck /> Cash on Delivery Available</p>
            <p className="flex items-center gap-2"><GoCheck /> Easy 7 Days Return & Exchange</p>
          </div>
        </div>
      </div>
      {/* review section */}
      <div className="mt-20">
        <div className="flex">
          <button
            onClick={() => setActiveTab('description')}
            className={`border px-5 py-3 text-lg text-(--primary-900) ${activeTab === 'description' ? 'font-bold border-b-0' : ''} border-gray-300`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`border px-5 py-3 text-lg text-(--primary-900) ${activeTab === 'reviews' ? 'font-bold border-b-0' : ''} border-gray-300`}
          >
            Reviews (122)
          </button>
        </div>

        <div className="border border-gray-300 px-6 py-6 text-sm text-gray-500">
          {activeTab === 'description' ? (
            <div className="flex flex-col gap-4">
              <p>{productData.description}</p>
              <p>
                E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {/* Review 1 */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-lg">
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                  </div>
                  <p className="font-medium text-gray-800">Rahul Sharma</p>
                  <span className="text-gray-400 text-xs">• 2 days ago</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Quality ekdum mast hai. Fit perfect aaya. Fabric bhi soft hai. Paisa vasool product.
                </p>
              </div>

              {/* Review 2 */}
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-lg">
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#edc7c2" />
                  </div>
                  <p className="font-medium text-gray-800">Priya Patel</p>
                  <span className="text-gray-400 text-xs">• 1 week ago</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Product accha hai but delivery mein thoda time laga. Overall satisfied hun.
                </p>
              </div>

              {/* Review 3 */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-lg">
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                    <GoStarFill color="#e45641" />
                  </div>
                  <p className="font-medium text-gray-800">Amit Kumar</p>
                  <span className="text-gray-400 text-xs">• 3 weeks ago</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Best purchase! Same as shown in pictures. Size bhi accurate hai. Recommended.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* related products */}
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product
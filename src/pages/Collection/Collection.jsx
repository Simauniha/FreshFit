import { ShopContext } from "../../Context/ShopContext";
import "./Collection.css";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useContext, useState } from 'react'
import Tittle from "../../components/Tittle";

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <>

      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
        {/* filter */}
        <div className="min-w-60">
          <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
            <button className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ""} transition-all`}><IoIosArrowForward /></button>
          </p>
          {/* categories */}
          <div className={`border border-(--primary-900) pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col gap-2 text-lg font-light text-(--neutral-500)">
              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Men'} />Men
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Women'} />Women
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Kids'} />Kids
              </p>

            </div>
          </div>
          {/* sub categories */}
          <div className={`border border-(--primary-900) pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-lg font-light text-(--neutral-500)">
              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Topwear'} />Topwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Bottomwear'} />Bottomwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Winterwear'} />Winterwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Summerwear'} />Summerwear
              </p>

            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">
          <div className="flex justify-between text-xl sm:text-2xl mb-4">
            <Tittle text1={"ALL"} text2={"COLLECTION"}/>
            <select className="border-2 border-gray-300 text-sm px-2">
              <option value="Relavent">Sort By: Relevant</option>
              <option value="High to Low">Sort By: High to Low</option>
              <option value="Low to High">Sort By: Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection

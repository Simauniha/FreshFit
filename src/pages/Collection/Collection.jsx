import { ShopContext } from "../../Context/ShopContext";
import { IoIosArrowForward } from "react-icons/io";
import React, { useContext, useEffect, useState } from 'react'
import Tittle from "../../components/Tittle";
import ProductItem from "../../components/ProductItem";

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('Relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  // useEffect(() => {
  //   setFilterProducts(products)
  // }, [])

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'Low-High':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'High-Low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    // console.log(category);
    // console.log(subCategory);
    // console.log(products);
    applyFilter();
  }, [category, subCategory,search,showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <>

      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
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
                <input type="checkbox" className="w-4" value={'Men'} onChange={toggleCategory} />Men
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Women'} onChange={toggleCategory} />Women
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Kids'} onChange={toggleCategory} />Kids
              </p>

            </div>
          </div>
          {/* sub categories */}
          <div className={`border border-(--primary-900) pl-5 py-3 mt-5 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className="mb-3 text-sm font-medium">TYPE</p>
            <div className="flex flex-col gap-2 text-lg font-light text-(--neutral-500)">
              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Topwear'} onChange={toggleSubCategory} />Topwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
              </p>

              <p className="flex gap-2">
                <input type="checkbox" className="w-4" value={'Summerwear'} onChange={toggleSubCategory} />Summerwear
              </p>

            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex-1">

          <div className="flex justify-between text-xl sm:text-2xl mb-4">
            <Tittle text1={"ALL"} text2={"COLLECTION"} />
            <select onChange={(e) => setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
              <option value="Relavent">Sort By: Relevant</option>
              <option value="High-Low">Sort By: High to Low</option>
              <option value="Low-High">Sort By: Low to High</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Collection

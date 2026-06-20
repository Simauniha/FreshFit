import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { TfiClose } from "react-icons/tfi";
import { BsSearch } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // console.log(location.pathname);
        if (location.pathname.includes('collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location])

    return showSearch && visible ? (
        <>
            <div className="border-t border-gray-50 bg-gray-50 text-center shadow-lg">

                <div className="inline-flex items-center justify-center border border-(--primary-900) px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' />
                    <button><BsSearch /></button>
                </div>
                <button className='inline w-3 cursor-pointer' onClick={() => setShowSearch(false)}><TfiClose /></button>

            </div>
        </>
    ) : null
}

export default SearchBar
